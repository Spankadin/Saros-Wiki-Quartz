# Saros Wiki

Player-facing lore for the Saros campaign setting, published with [Quartz 5](https://quartz.jzhao.xyz/).

The live site is deployed from the `v5` branch by GitHub Pages. The `content` directory is a public publishing target, not a backup of the private Obsidian vault.

## Publishing boundary

Only notes deliberately marked `share: true` should be copied into `content`. GM-only notes, secrets, Foundry credentials, API tokens, and the rest of the private vault must never be committed here.

Quartz Syncer can keep using `share` as its publish property; the vault does not need to be renamed to `publish`.

## Local preview

```shell
npm ci
npx quartz plugin install
npx quartz build --serve
```

Pushes to `v5` rebuild and deploy the site automatically. The Foundry server is intentionally hosted separately and can later be linked at `play.delvesaros.com`.

See [SAROS_CONTENT_NOTICE.md](SAROS_CONTENT_NOTICE.md) for licensing and content ownership.
