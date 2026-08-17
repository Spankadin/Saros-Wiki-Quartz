---
title: NPCs
ccType: entry
ccId: entry-dataview-npcs
tags: []
publish: true
dataview: true
links:
  mdlinks: true
  convert: true
---

```dataview
TABLE WITHOUT ID
file.link AS "Name",
Race,
Location,
join(Faction, ", ") AS Factions
FROM #NPC AND #Published
WHERE file.name != "NPC Template"
SORT file.name ASC
```
