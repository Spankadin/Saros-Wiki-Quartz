import { readFile, writeFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"

const crawlLinksPath = fileURLToPath(
  new URL("../node_modules/@quartz-community/crawl-links/dist/index.js", import.meta.url),
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
