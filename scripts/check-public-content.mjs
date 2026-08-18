import fs from "node:fs/promises"
import path from "node:path"

const contentRoot = path.resolve(process.cwd(), "content")
const failures = []

async function inspect(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })

  for (const entry of entries) {
    const absolute = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      if (entry.name !== "Templates") await inspect(absolute)
      continue
    }
    if (!entry.isFile() || !entry.name.endsWith(".md")) continue

    const text = await fs.readFile(absolute, "utf8")
    if (!/^publish:\s*true\s*$/m.test(text)) continue
    if (/```dataview(?:js)?\b|\$=\s*dv\./i.test(text)) {
      failures.push(path.relative(contentRoot, absolute).replaceAll(path.sep, "/"))
    }
  }
}

await inspect(contentRoot)

if (failures.length > 0) {
  console.error("Quartz cannot execute Dataview. Materialize these public notes before deploying:")
  for (const failure of failures) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log("Public-content check passed: no executable Dataview remains.")
}
