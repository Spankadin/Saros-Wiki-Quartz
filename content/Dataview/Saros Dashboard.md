---
title: Saros Dashboard
ccType: entry
ccId: entry-dataview-saros-dashboard
tags: []
publish: true
dataview: true
links:
  mdlinks: true
  convert: true
---

> [!info]
> Explore the people, powers, places, and history of Saros from one central hub.

## Major Cities and Towns

```dataview
TABLE WITHOUT ID
file.link AS "Settlement",
Population,
Government,
Leader
FROM #Town OR #City
WHERE !contains(file.path, "Templates")
SORT default(Population, 0) DESC
```

## Major Factions

```dataview
TABLE WITHOUT ID
npcFaction AS "Faction",
length(rows) AS "Known NPCs"
FROM #NPC
FLATTEN Faction AS npcFaction
WHERE npcFaction
GROUP BY npcFaction
SORT length(rows) DESC
```

## Major NPCs

```dataview
TABLE Race, join(Faction, ", ") AS Faction, Location, Building
FROM #NPC
WHERE !contains(file.path, "Templates")
SORT file.name ASC
LIMIT 16
```

## Landmarks

```dataview
TABLE WITHOUT ID
file.link AS "Landmark",
LandmarkType AS "Type",
Region
FROM #Landmark
WHERE !contains(file.path, "Templates")
SORT file.name ASC
LIMIT 16
```

## Recent File Updates

```dataview
LIST
FROM ""
WHERE !contains(file.path, "Templates")
SORT file.mtime DESC
LIMIT 8
```

## Saros at a Glance

```dataviewjs
const totalFiles = dv.pages().where(p => !p.file.path.includes("Templates")).length;
const totalNPCs = dv.pages("#NPC").length;
const totalSettlements = dv.pages('#Town or #City').length;
const totalLandmarks = dv.pages('#Landmark').length;

dv.table(
  ["Category", "Count"],
  [
    ["Total Files", totalFiles],
    ["NPCs", totalNPCs],
    ["Settlements", totalSettlements],
    ["Landmarks", totalLandmarks]
  ]
);
```

## Featured Peoples of Saros

- [[Gerdga]]
- [[Malgrim Darkshade]]
- [[Queen Amara]]
- [[Admiral Thainan]]

## Featured Powers and Threads

- [[The Prism]]
- [[The Aegis Legion]]
- [[Merchant's Guild]]
- [[The Black Circle]]
- [[Fey-Lines]]
- [[Delves]]
