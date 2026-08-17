# Saros Wiki

Player-facing lore for the Saros campaign setting, published with [Quartz 5](https://quartz.jzhao.xyz/).

## Live destinations

- [Saros Wiki](https://delvesaros.com)
- [Enter Saros in Foundry VTT](https://play.delvesaros.com)
- [Map of Saros](https://delvesaros.com/locations--and--npcs/map-of-saros)
- [About Saros](https://delvesaros.com/about-saros)

The live site is deployed from the `v5` branch by GitHub Pages. It includes a vault-sourced landing page, site-wide navigation, folder-note navigation, graph views, a full-resolution realm map, a portable settlement directory, and creator attribution on every page. Public content uses ordinary Markdown and Obsidian links where browser compatibility matters, and clear references to existing Saros notes are periodically audited for missing cross-links. The `content` directory is a public publishing target, not a backup of the private Obsidian vault.

## Authorship and site curation

Saros is an original fantasy campaign setting created and owned by James McBroom. Its original ideas, characters, locations, settings, factions, stories, maps, artwork, adventures, and quests are James's works.

Quartz provides the open-source publishing framework. AI-assisted tools help curate, organize, edit, cross-link, and technically maintain the vault and public site under James's direction; they are not the source of Saros's creative authorship. See the public [About Saros](https://delvesaros.com/about-saros) page and [SAROS_CONTENT_NOTICE.md](SAROS_CONTENT_NOTICE.md).

## Publishing boundary

Only notes deliberately marked `share: true` should be copied into `content`. GM-only notes, secrets, Foundry credentials, API tokens, and the rest of the private vault must never be committed here.

Quartz Syncer can keep using `share` as its publish property; the vault does not need to be renamed to `publish`.

Keep the vault's normal, human-readable folder and note names. Spaces, hyphens, apostrophes, and ampersands are supported. Quartz creates web-safe addresses at build time, so renaming the vault just to improve URLs is unnecessary and risks breaking Obsidian links.

Same-name folder notes are intentional. For example, `Dwarven Clans/Dwarven Clans.md` becomes the page for the `Dwarven Clans` folder in Quartz, while remaining a normal folder note in Obsidian. The small post-install compatibility patch in `scripts/patch-crawl-links.mjs` keeps short Obsidian links and local graph identities working after that conversion.

The compact navigation header is supplied by the local `plugins/saros-navigation` component. It gives every published page direct access to Home, the interactive map, cities and towns, factions, history, useful links, and the secure game server without adding a Home WikiLink to every vault note and overwhelming the relationship graph.

## Local preview

```shell
npm ci
npx quartz plugin install
npx quartz build --serve
```

Pushes to `v5` rebuild and deploy the site automatically. The Foundry server remains hosted separately behind Cloudflare Tunnel and is linked from the homepage at `play.delvesaros.com`.
