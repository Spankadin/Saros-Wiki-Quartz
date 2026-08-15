---
publish: true
title: Locations & NPCs
created: 2025-02-09T22:14:26.313Z
modified: 2026-08-08T11:56:13.599Z
tags:
  - Index
  - Published
---

![[Rules & Tables & Tools/Z-Attachments/Saros Image 2.webp]]

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

| Landmark                                                                                                       | Type            | Region                                                                                     |
| -------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------ |
| [[Locations & NPCs/Cities & Towns/Albyrt/Locations/Albyrt Grain Steps.md\|Albyrt Grain Steps]]                 | Waterfront      | [[Locations & NPCs/Cities & Towns/Albyrt/Albyrt.md\|Albyrt]]                               |
| [[Locations & NPCs/Cities & Towns/Ari/Locations/Ari Grain Quay.md\|Ari Grain Quay]]                            | Waterfront      | [[Locations & NPCs/Cities & Towns/Ari/Ari.md\|Ari]]                                        |
| [[Locations & NPCs/Cities & Towns/Ani/Locations/Barrowgate.md\|Barrowgate]]                                    | Fortification   | [[Locations & NPCs/Cities & Towns/Ani/Ani.md\|Ani]]                                        |
| [[Locations & NPCs/Landmarks/Waters/Bishop's Bay.md\|Bishop's Bay]]                                            | Bay             | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Landmarks/Blackwater Bog.md\|Blackwater Bog]]                                               | Bog             | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Landmarks/Caelum's End.md\|Caelum's End]]                                                   | Frozen Peak     | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Cities & Towns/Port Quartz/Locations/Cataract Yard.md\|Cataract Yard]]                      | Industrial      | [[Locations & NPCs/Cities & Towns/Port Quartz/Port Quartz.md\|Port Quartz]]                |
| [[Locations & NPCs/Cities & Towns/Trystn/Locations/Four Roads Market.md\|Four Roads Market]]                   | Market          | [[Locations & NPCs/Cities & Towns/Trystn/Trystn.md\|Trystn]]                               |
| [[Locations & NPCs/Cities & Towns/Isoltide/Locations/Isoltide Fishstairs.md\|Isoltide Fishstairs]]             | Waterfront      | [[Locations & NPCs/Cities & Towns/Isoltide/Isoltide.md\|Isoltide]]                         |
| [[Locations & NPCs/Landmarks/Waters/Lake of Lament.md\|Lake of Lament]]                                        | Lake            | [[Locations & NPCs/Landmarks/Mountains/The Silvervein Summits.md\|The Silvervein Summits]] |
| [[Locations & NPCs/Landmarks/Waters/Lake Runa.md\|Lake Runa]]                                                  | Lake            | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Cities & Towns/Kylor/Locations/Lantern Head.md\|Lantern Head]]                              | Fortification   | [[Locations & NPCs/Cities & Towns/Kylor/Kylor.md\|Kylor]]                                  |
| [[Locations & NPCs/Cities & Towns/Pyrris/Locations/Queen's Gate.md\|Queen's Gate]]                             | -              | [[Locations & NPCs/Cities & Towns/Pyrris/Pyrris.md\|Pyrris]]                               |
| [[Locations & NPCs/Cities & Towns/Kylor/Locations/Saltwood Market.md\|Saltwood Market]]                        | Market          | [[Locations & NPCs/Cities & Towns/Kylor/Kylor.md\|Kylor]]                                  |
| [[Locations & NPCs/Landmarks/Roads/Surveyors' Step.md\|Surveyors' Step]]                                       | Road            | [[Locations & NPCs/Cities & Towns/Port Quartz/Port Quartz.md\|Port Quartz]]                |
| [[Locations & NPCs/Cities & Towns/Brynk/Locations/The Closed Gate.md\|The Closed Gate]]                        | Gate            | [[Locations & NPCs/Cities & Towns/Brynk/Brynk.md\|Brynk]]                                  |
| [[Locations & NPCs/Landmarks/The Glimmering Expanse.md\|The Glimmering Expanse]]                               | Desert          | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Cities & Towns/Soryn's Crossing/Locations/The Great Crossmarket.md\|The Great Crossmarket]] | Market          | [[Locations & NPCs/Cities & Towns/Soryn's Crossing/Soryn's Crossing.md\|Soryn's Crossing]] |
| [[Locations & NPCs/Landmarks/The Greyweald.md\|The Greyweald]]                                                 | Forest          | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Landmarks/Roads/The High Road.md\|The High Road]]                                           | Road            | [[Locations & NPCs/Cities & Towns/Pyrris/Pyrris.md\|Pyrris]]                               |
| [[Locations & NPCs/Landmarks/Mountains/The Masys Mountains.md\|The Masys Mountains]]                           | Mountain Range  | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Landmarks/Waters/The Sea of Myth.md\|The Sea of Myth]]                                      | Sea             | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Landmarks/Mountains/The Silvervein Summits.md\|The Silvervein Summits]]                     | Mountain Range  | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Landmarks/Waters/The Sparkling Sea.md\|The Sparkling Sea]]                                  | Sea             | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Landmarks/The Urmong Barrows.md\|The Urmong Barrows]]                                       | Burial Mounds   | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Landmarks/The Wyrm Scar.md\|The Wyrm Scar]]                                                 | Canyon          | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Landmarks/Mountains/Vy'Tungavor.md\|Vy'Tungavor]]                                           | Mountain Region | [[History & Lore/A Brief Saros History.md\|Saros]]                                         |
| [[Locations & NPCs/Cities & Towns/Ari/Locations/Vytung Yard.md\|Vytung Yard]]                                  | Market          | [[Locations & NPCs/Cities & Towns/Ari/Ari.md\|Ari]]                                        |
| [[Locations & NPCs/Cities & Towns/Port Quartz/Locations/Westwater Ferry.md\|Westwater Ferry]]                  | Ferry           | [[Locations & NPCs/Cities & Towns/Port Quartz/Port Quartz.md\|Port Quartz]]                |
| [[Locations & NPCs/Cities & Towns/Port Quartz/Locations/White Quays.md\|White Quays]]                          | Waterfront      | [[Locations & NPCs/Cities & Towns/Port Quartz/Port Quartz.md\|Port Quartz]]                |
