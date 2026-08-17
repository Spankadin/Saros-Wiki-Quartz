---
title: Campaign Codex v6 Integration Notes
ccType: entry
ccId: entry-rules-tables-tools-campaign-codex-v6-integration-notes
tags:
- GM Only
- Tool
share: false
---

# Campaign Codex v6 Integration Notes

This vault uses a deliberately simple metadata layer so Obsidian remains the canonical source and Campaign Codex can receive predictable types and tags.

## Important v6 note

The official Campaign Codex documentation currently documents `exportToObsidian()` and notes that `convertJournalToCCSheet` is deprecated in v6+, but it does **not** publish a stable Obsidian-frontmatter import contract. For that reason, the `ccType`, `ccId`, `ccImage`, `ccTags`, and `ccAssociates` keys in this vault should be treated as **Saros bridge metadata**, not as guaranteed native Campaign Codex v6 syntax.

The structure is intentionally aligned with Campaign Codex's current sheet hierarchy so a bridge or importer can map it cleanly.

## Saros Type Mapping

| Saros Note | `ccType` | Why |
| --- | --- | --- |
| City, town, major settlement | `region` | Regions can contain locations, entries, and NPCs |
| Dungeon, delve, major explorable complex | `location` | Locations can contain entries and NPCs |
| Building, shop, tavern, ship, civic work | `entry` | Entries are intended for points of interest and commercial premises |
| Landmark, road, water, mountain, district | `entry` | Keeps landmarks distinct from CC Locations and Obsidian `#Location` tables |
| NPC / legendary person or creature | `npc` | NPC sheet |
| Faction / civic council / guild | `group` | Group sheets organize linked regions, entries, NPCs, and tags |
| GM adventure | `quest` | Quest board/objective support |
| General lore / history / item legend | `entry` | Flexible text-centric content |

## Link Rules

Use simple Obsidian wiki links whenever the title is unique:

- `[[Port Quartz]]`
- `[[Hesta Vane]]`
- `[[The Prism]]`

Use aliases only for natural display text:

- `[[Rom The Wizard|Rom]]`
- `[[A Brief Saros History|Saros]]`

Avoid folder paths inside wiki links unless two notes genuinely share the same title.

## Public vs GM-Only

Public wiki notes:

```yaml
tags:
  - Published
publish: true
```

GM-only notes:

```yaml
tags:
  - GM Only
share: false
foundry: true
```

Public setting notes should never contain adventure instructions, secret motivations, or links back to a GM-only adventure. Put those references in the adventure instead.

## Tag Discipline

`tags` drive Obsidian and Dataview.

`ccTags` are the semantic tags intended for the Campaign Codex bridge.

Examples:

- A tavern: `Building`, `Tavern`, `Published`
- A quay: `Landmark`, `Waterfront`, `Published`
- A mountain: `Landmark`, `Mountain`, `Published`
- A town: `Town`, optionally `Port`, `Published`
- An NPC: `NPC`, `Published`

Do not use `Location` as a generic synonym for "place." Reserve CC `location` for substantial explorable sites such as dungeons and delves.
