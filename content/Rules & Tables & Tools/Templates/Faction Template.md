---
title: Faction Template
ccType: group
ccId: group-faction-name
ccImage: null
aliases: []
tags:
- Faction
- Published
ccTags:
- Faction
ccAssociates: []
publish: true
dataview: true
links:
  mdlinks: true
  convert: true
---

Describe the faction's public identity, goals, methods, and place in [[Saros]].

## Organization

Explain leadership, membership, and internal structure.

## Reputation

Explain how ordinary people, rivals, and the Crown tend to view the faction.

<!-- foundry-ignore-start -->
#### Known NPCs
```dataview
TABLE WITHOUT ID file.link AS "Name", Race, Location, Building
FROM #NPC
WHERE contains(Faction, link(this.file.name))
SORT file.name ASC
```
<!-- foundry-ignore-end -->
