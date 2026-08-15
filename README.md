# Saros Wiki

Player-facing lore for the Saros campaign setting, published with [Quartz 5](https://quartz.jzhao.xyz/).

The live site is deployed from the `v5` branch by GitHub Pages. The `content` directory is a public publishing target, not a backup of the private Obsidian vault.

## Publishing boundary

Only notes deliberately marked `share: true` should be copied into `content`. GM-only notes, secrets, Foundry credentials, API tokens, and the rest of the private vault must never be committed here.

Quartz Syncer can keep using `share` as its publish property; the vault does not need to be renamed to `publish`.

Keep the vault's normal, human-readable folder and note names. Spaces, hyphens, apostrophes, and ampersands are supported. Quartz creates web-safe addresses at build time, so renaming the vault just to improve URLs is unnecessary and risks breaking Obsidian links.

Same-name folder notes are intentional. For example, `Dwarven Clans/Dwarven Clans.md` becomes the page for the `Dwarven Clans` folder in Quartz, while remaining a normal folder note in Obsidian. The small post-install compatibility patch in `scripts/patch-crawl-links.mjs` keeps short Obsidian links working after that conversion.

## Local preview

```shell
npm ci
npx quartz plugin install
npx quartz build --serve
```

Pushes to `v5` rebuild and deploy the site automatically. The Foundry server is intentionally hosted separately and can later be linked at `play.delvesaros.com`.

See [SAROS_CONTENT_NOTICE.md](SAROS_CONTENT_NOTICE.md) for licensing and content ownership.
