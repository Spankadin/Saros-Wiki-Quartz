---
title: Dungeons
ccType: entry
ccId: entry-dungeon-index
aliases: []
tags:
- Index
- Published
ccTags:
- Dungeons
share: true
dataview: true
---

The settled parts of [[A Brief Saros History|Saros]] are surrounded by ruins, tombs, forts, caves, sealed complexes, and other dangerous places collectively useful to adventurers as **dungeons**.

## Light Below

Abandoned Sarosian dungeons can be genuinely lightless. A sealed interior that has not been occupied for centuries does not retain ambient illumination merely to reveal its architecture.

A dying torch, lantern, spell, personal shard, or ritual source may expose only a small portion of a chamber while the rest remains absolute black. Occupied sites still use whatever practical light their inhabitants require; true blackout is a property of abandonment, depth, and circumstance rather than a universal visual filter.

```dataview
TABLE WITHOUT ID
file.link AS "Dungeon",
Region
FROM #Dungeon
WHERE file.name != this.file.name
SORT file.name ASC
```
