import fs from "node:fs/promises"
import path from "node:path"
import { parse } from "yaml"

const contentRoot = path.resolve(process.cwd(), "content")

async function markdownFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const absolute = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...(await markdownFiles(absolute)))
    else if (entry.isFile() && entry.name.endsWith(".md")) files.push(absolute)
  }

  return files
}

function readFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!match) return {}

  try {
    return parse(match[1]) ?? {}
  } catch (error) {
    throw new Error(`Could not parse frontmatter: ${error.message}`)
  }
}

const files = await markdownFiles(contentRoot)
const documents = await Promise.all(
  files.map(async (absolute) => {
    const text = await fs.readFile(absolute, "utf8")
    const relative = path.relative(contentRoot, absolute).replaceAll(path.sep, "/")
    const data = readFrontmatter(text)

    return {
      absolute,
      relative,
      slug: relative.replace(/\.md$/i, ""),
      title: data.title || path.basename(relative, ".md"),
      data,
      text,
    }
  }),
)

const published = documents.filter(
  (document) => document.data.publish === true && !document.relative.includes("/Templates/"),
)

function values(value) {
  if (value === undefined || value === null || value === "") return []
  return Array.isArray(value) ? value : [value]
}

function hasTag(document, tag) {
  const wanted = tag.toLowerCase()
  return [...values(document.data.tags), ...values(document.data.ccTags)].some(
    (candidate) => String(candidate).toLowerCase() === wanted,
  )
}

function wikiTarget(value) {
  const match = String(value).match(/\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/)
  return match ? match[1].trim() : String(value).trim()
}

function comparable(value) {
  return path.basename(wikiTarget(value).replaceAll("\\", "/")).toLowerCase()
}

function referencesDocument(value, document) {
  const target = comparable(value)
  return (
    target === document.title.toLowerCase() || target === path.basename(document.slug).toLowerCase()
  )
}

function fileLink(document) {
  return `[[${document.slug}|${document.title}]]`
}

function cell(value) {
  if (value === undefined || value === null || value === "") return "—"
  return String(value).replace(/\r?\n/g, "<br>").replaceAll("|", "\\|")
}

function table(headers, rows, emptyMessage = "No published entries are currently listed.") {
  if (rows.length === 0) return `_${emptyMessage}_`
  const header = `| ${headers.join(" | ")} |`
  const separator = `| ${headers.map(() => "---").join(" | ")} |`
  const body = rows.map((row) => `| ${row.map(cell).join(" | ")} |`).join("\n")
  return `${header}\n${separator}\n${body}`
}

function byTitle(left, right) {
  return left.title.localeCompare(right.title, "en", { sensitivity: "base" })
}

function populationNumber(document) {
  const population = Number(document.data.Population)
  return Number.isFinite(population) ? population : 0
}

function displayPopulation(value) {
  const population = Number(value)
  return Number.isFinite(population) ? population.toLocaleString("en-US") : value
}

const settlements = published
  .filter((document) => hasTag(document, "Town") || hasTag(document, "City"))
  .sort((left, right) => populationNumber(right) - populationNumber(left) || byTitle(left, right))
const npcs = published.filter((document) => hasTag(document, "NPC")).sort(byTitle)
const landmarks = published.filter((document) => hasTag(document, "Landmark")).sort(byTitle)
const factions = published.filter((document) => hasTag(document, "Faction")).sort(byTitle)
const delves = published.filter((document) => hasTag(document, "Delve")).sort(byTitle)
const dungeons = published.filter((document) => hasTag(document, "Dungeon")).sort(byTitle)
const mountains = published.filter((document) => hasTag(document, "Mountain")).sort(byTitle)
const waters = published.filter((document) => hasTag(document, "Water")).sort(byTitle)

function settlementTable() {
  return table(
    ["Settlement", "Hex", "Population", "Government", "Leader"],
    settlements.map((document) => [
      fileLink(document),
      document.data.Hex,
      displayPopulation(document.data.Population),
      document.data.Government,
      document.data.Leader,
    ]),
  )
}

function npcTable(source = npcs) {
  return table(
    ["Name", "Race", "Location", "Factions"],
    source.map((document) => [
      fileLink(document),
      document.data.Race,
      document.data.Location,
      values(document.data.Faction).join(", "),
    ]),
  )
}

function dashboardNpcTable() {
  return table(
    ["NPC", "Race", "Factions", "Location", "Building"],
    npcs
      .slice(0, 16)
      .map((document) => [
        fileLink(document),
        document.data.Race,
        values(document.data.Faction).join(", "),
        document.data.Location,
        document.data.Building,
      ]),
  )
}

function landmarkTable(source = landmarks) {
  return table(
    ["Landmark", "Hex", "Type", "Region"],
    source.map((document) => [
      fileLink(document),
      document.data.Hex,
      document.data.LandmarkType,
      document.data.Region,
    ]),
  )
}

function factionTable() {
  const rows = new Map()

  for (const npc of npcs) {
    for (const reference of values(npc.data.Faction)) {
      const key = comparable(reference)
      const faction = factions.find((candidate) => referencesDocument(reference, candidate))
      const current = rows.get(key) ?? { label: faction ? fileLink(faction) : reference, count: 0 }
      current.count += 1
      rows.set(key, current)
    }
  }

  return table(
    ["Faction", "Known NPCs"],
    [...rows.values()]
      .sort(
        (left, right) =>
          right.count - left.count || String(left.label).localeCompare(String(right.label)),
      )
      .map((entry) => [entry.label, entry.count]),
  )
}

function townNpcTable(document) {
  const localNpcs = npcs.filter((npc) =>
    values(npc.data.Location).some((reference) => referencesDocument(reference, document)),
  )

  return table(
    ["NPC", "Race", "Building", "Factions"],
    localNpcs.map((npc) => [
      fileLink(npc),
      npc.data.Race,
      npc.data.Building,
      values(npc.data.Faction).join(", "),
    ]),
    "No published NPCs are currently indexed here.",
  )
}

function factionNpcTable(document) {
  const members = npcs.filter((npc) =>
    values(npc.data.Faction).some((reference) => referencesDocument(reference, document)),
  )

  return table(
    ["Name", "Race", "Location", "Building"],
    members.map((npc) => [fileLink(npc), npc.data.Race, npc.data.Location, npc.data.Building]),
    "No published NPCs are currently indexed for this faction.",
  )
}

function delveTable() {
  return table(
    ["Known Delve", "Hex", "True Name", "Region", "Ruling Faction"],
    delves.map((document) => [
      fileLink(document),
      document.data.Hex,
      document.data.truname,
      document.data.Region ?? document.data.location,
      document.data.rfaction,
    ]),
  )
}

function dungeonTable() {
  return table(
    ["Dungeon", "Hex", "Region"],
    dungeons.map((document) => [fileLink(document), document.data.Hex, document.data.Region]),
  )
}

function mountainTable() {
  return table(
    ["Mountain Region", "Hex", "Region"],
    mountains.map((document) => [fileLink(document), document.data.Hex, document.data.Region]),
  )
}

function waterTable() {
  return table(
    ["Water", "Hex", "Type", "Region"],
    waters.map((document) => [
      fileLink(document),
      document.data.Hex,
      document.data.LandmarkType,
      document.data.Region,
    ]),
  )
}

function statsTable() {
  return table(
    ["Category", "Count"],
    [
      ["Published pages", published.length],
      ["NPCs", npcs.length],
      ["Settlements", settlements.length],
      ["Landmarks", landmarks.length],
    ],
  )
}

function render(type, document) {
  switch (type) {
    case "settlements":
      return settlementTable()
    case "factions":
      return factionTable()
    case "npcs":
      return npcTable()
    case "dashboard-npcs":
      return dashboardNpcTable()
    case "landmarks":
      return landmarkTable()
    case "dashboard-landmarks":
      return landmarkTable(landmarks.slice(0, 16))
    case "town-npcs":
      return townNpcTable(document)
    case "faction-npcs":
      return factionNpcTable(document)
    case "delves":
      return delveTable()
    case "dungeons":
      return dungeonTable()
    case "mountains":
      return mountainTable()
    case "waters":
      return waterTable()
    case "recent":
      return "For current setting-wide material, visit [[Map of Saros]], [[Saros - Distances, Travel, Trade, and Population]], and [[Useful Links]]."
    case "stats":
      return statsTable()
    default:
      throw new Error(`Unknown materialized table type: ${type}`)
  }
}

function classify(query) {
  if (query.includes('file.link AS "Settlement"')) return "settlements"
  if (query.includes('npcFaction AS "Faction"')) return "factions"
  if (query.includes('file.link AS "NPC"') && query.includes("WHERE Location")) return "town-npcs"
  if (query.includes("contains(Faction, link(this.file.name))")) return "faction-npcs"
  if (query.includes('file.link AS "Known Delve"')) return "delves"
  if (query.includes('file.link AS "Dungeon"')) return "dungeons"
  if (query.includes('file.link AS "Mountain Region"')) return "mountains"
  if (query.includes('file.link AS "Water"')) return "waters"
  if (query.includes('file.link AS "Landmark"')) {
    return query.includes("LIMIT 16") ? "dashboard-landmarks" : "landmarks"
  }
  if (query.includes('file.link AS "Name"')) return "npcs"
  if (query.includes("TABLE Race") && query.includes("LIMIT 16")) return "dashboard-npcs"
  if (/^\s*LIST\b/m.test(query)) return "recent"
  return null
}

function wrap(type, body) {
  return `<!-- saros-materialized:start ${type} -->\n${body}\n<!-- saros-materialized:end ${type} -->`
}

function materialize(document) {
  let text = document.text

  text = text.replace(
    /<!-- saros-materialized:start ([a-z-]+) -->[\s\S]*?<!-- saros-materialized:end \1 -->/g,
    (_match, type) => wrap(type, render(type, document)),
  )

  text = text.replace(/```dataview\r?\n([\s\S]*?)\r?\n```/g, (block, query) => {
    const type = classify(query)
    return type ? wrap(type, render(type, document)) : block
  })

  text = text.replace(/```dataviewjs\r?\n([\s\S]*?)\r?\n```/g, (block, query) =>
    query.includes("dv.table") ? wrap("stats", render("stats", document)) : block,
  )

  return text
}

const changed = []
for (const document of published) {
  const next = materialize(document)
  if (next === document.text) continue
  await fs.writeFile(document.absolute, next, "utf8")
  changed.push(document.relative)
}

console.log(`Materialized Dataview output in ${changed.length} public Markdown files.`)
for (const relative of changed) console.log(`- ${relative}`)
