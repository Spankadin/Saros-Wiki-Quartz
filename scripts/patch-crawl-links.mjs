import { readFile, writeFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"

const crawlLinksPath = fileURLToPath(
  new URL("../node_modules/@quartz-community/crawl-links/dist/index.js", import.meta.url),
)

const graphPath = fileURLToPath(
  new URL("../node_modules/@quartz-community/graph/dist/components/index.js", import.meta.url),
)

const original = `        const parts = slug2.split("/");
        const fileName = parts.at(-1);
        return targetCanonical === fileName;`

const patched = `        const parts = slug2.split("/");
        const fileName = parts.at(-1);
        if (targetCanonical === fileName) return true;

        // Quartz turns a same-name Obsidian folder note into folder/index.
        // Keep shortest links such as [[Goslow]] pointing at that folder page.
        return fileName === "index" && targetCanonical === parts.at(-2);`

const source = await readFile(crawlLinksPath, "utf8")

if (source.includes(patched)) {
  console.log("Quartz folder-note link patch is already applied")
} else if (source.includes(original)) {
  await writeFile(crawlLinksPath, source.replace(original, patched), "utf8")
  console.log("Applied Quartz folder-note link patch")
} else {
  throw new Error(
    "Could not apply the Quartz folder-note link patch. The crawl-links package changed upstream.",
  )
}

// The graph plugin keeps the trailing slash created when `folder/index` is
// simplified, but the browser URL for the same page has no trailing slash.
// Normalizing both forms to the same key restores local graphs on folder notes.
const graphOriginal = `function Fu(u){let e=_t(ft(u,"index"),!0);return e.length===0?"/":e}`
const graphPatched = `function Fu(u){let e=_t(ft(u,"index"),!0);return e.length>1&&e.endsWith("/")&&(e=e.slice(0,-1)),e.length===0?"/":e}`
const graphSource = await readFile(graphPath, "utf8")

if (graphSource.includes(graphPatched)) {
  console.log("Quartz folder-note graph patch is already applied")
} else if (graphSource.includes(graphOriginal)) {
  await writeFile(graphPath, graphSource.replace(graphOriginal, graphPatched), "utf8")
  console.log("Applied Quartz folder-note graph patch")
} else {
  throw new Error(
    "Could not apply the Quartz folder-note graph patch. The graph package changed upstream.",
  )
}
