---
title: Locations & NPCs
ccType: entry
ccId: entry-locations-and-npcs-index
aliases: []
tags:
- Index
- Published
ccTags:
- Index
share: true
dataview: true
---

![[Saros Image 2.webp]]

## Settlements and Their People

```dataviewjs
const towns = dv.pages('#Town or #City')
  .where(p => !p.file.path.includes("Templates"))
  .sort(p => Number(p.Population ?? 0), 'desc');

const npcs = dv.pages('#NPC')
  .where(p => !p.file.path.includes("Templates"));

let lines = [];

for (const town of towns) {
  const pop = town.Population ?? "Unknown";
  lines.push(`- ${town.file.link} — Population: ${pop}`);

  const townNPCs = npcs
    .where(npc => String(npc.Location ?? "").includes(town.file.name))
    .sort(npc => npc.file.name, 'asc');

  if (townNPCs.length === 0) {
    lines.push(`  - No linked NPCs yet.`);
    continue;
  }

  for (const npc of townNPCs) {
    const building = npc.Building ?? "No fixed building";
    lines.push(`  - ${npc.file.link} — ${building}`);
  }
}

dv.paragraph(lines.join("\n"));
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
```
