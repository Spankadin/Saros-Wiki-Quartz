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
publish: true
dataview: true
---

> [!info] Map of Saros
> [[Map of Saros|Open the full realm map]] for a closer look at its cities, roads, waters, mountains, and frontiers.

## Settlements and Their People

These figures follow [[Saros - Distances, Travel, Trade, and Population|the canonical settlement estimates]]. Each settlement page contains its fuller description and additional local figures.

| Settlement           | Hex     | Approx. population | A few notable people                                             |
| -------------------- | ------- | -----------------: | ---------------------------------------------------------------- |
| [[Goslow]]           | 67.103  |             14,000 | [[Perla Mudridge]], [[Gerdga]], [[Vostin The Mighty]]            |
| [[Rore]]             | 132.101 |              7,200 | [[Cassia Rook]], [[Varo Quill]], [[Nessa Crowe]]                 |
| [[Albyrt]]           | 83.142  |              6,400 | [[Mara Avelin]]                                                  |
| [[Isoltide]]         | 86.150  |              5,800 | [[Teren Moss]]                                                   |
| [[Port Quartz]]      | 79.96   |              5,250 | [[Hesta Vane]], [[Oren Bale]], [[Lind Bergy]]                    |
| [[Karastos]]         | 133.170 |             ~5,000 | Pirate captains and crews; no stable census                      |
| [[Soryn's Crossing]] | 78.171  |              4,800 | [[Dalen Soryn]]                                                  |
| [[Trystn]]           | 102.99  |              4,600 | [[Jessa Marr]], [[Torv Hallick]], [[Elian Thorne]]               |
| [[Ari]]              | 128.109 |              4,000 | [[Harlan Vey]]                                                   |
| [[Lilya]]            | 106.81  |              3,800 | [[Ysra Pell]], [[Maela Torr]], [[Garran Flint]]                  |
| [[Ani]]              | 59.153  |              3,000 | [[Captain Lysa Dorn]]                                            |
| [[Mysha]]            | 92.167  |              2,500 | [[Pellin Root]]                                                  |
| [[Kylor]]            | 45.104  |              2,400 | [[Mara Venn]], [[Osk Fen]], [[Derran Pike]]                      |
| [[Skaggerty]]        | 62.99   |              1,200 | [[Heldoren The Wise]], [[Mara Sedge]], [[Simoon]]                |
| [[Pyrris]]           | 71.109  |              1,100 | [[Queen Amara]], [[General Ironclad]], [[Spymaster Shadowcloak]] |
| [[Grymswatch]]       | 133.179 |              1,000 | [[Admiral Thainan]], [[Festin Dontel]]                           |
| [[Dun Karag]]        | 53.85   |                900 | The wardens of [[Dun'zod]]                                      |
| [[Brynk]]            | 58.180  |                650 | [[Vessa Keln]]                                                   |

## Landmarks

```dataview
TABLE WITHOUT ID
file.link AS "Landmark",
Hex,
LandmarkType AS "Type",
Region
FROM #Landmark
WHERE !contains(file.path, "Templates") AND share != false
SORT file.name ASC
```
