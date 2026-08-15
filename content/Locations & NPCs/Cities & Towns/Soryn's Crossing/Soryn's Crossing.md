---
title: Soryn's Crossing
ccType: region
ccId: region-soryn-s-crossing
aliases: []
tags:
- Town
- Port
- Published
Region: "[[A Brief Saros History|Saros]]"
Government: Crossing Charter Council
Leader: "[[Dalen Soryn]]"
Population: 4800
ccTags:
- Town
- Port
share: true
dataview: true
links:
  mdlinks: true
  convert: true
---

[[Soryn's Crossing]] is the principal trade junction of southern Saros, positioned where roads and waterways allow goods to move in several directions without first hugging the outer coast.

It is a commercial town before it is anything else.

## Character

The Crossing is full of warehouses, ferry slips, stables, brokers, caravan yards, and temporary residents. The town's population changes noticeably with the trading season.

## Government

A charter council regulates tolls, quays, road maintenance, and market law. [[Dalen Soryn]], a distant descendant of the family associated with the crossing's modern name, currently serves as **First Warden**.

## Trade and Economy

Soryn's Crossing makes money from:

- Warehousing
- Ferry and river traffic
- Caravan services
- Grain and livestock exchange
- Money changing
- Bulk resale
- Repair and resupply

Goods from [[Mysha]], the lake cities, the southern coast, and routes toward [[Ari]] frequently pass through the town.

## Travel and Connections

[[Mysha]] lies roughly **45-55 miles** away: 2-3 days walking, 3-4 by wagon, about 2 days mounted, or 1-2 days for river freight when conditions cooperate.

[[Brynk]] lies roughly **40-50 road miles** away: 2-3 days walking, 3-4 by wagon, about 2 days mounted, or less than a day by griffin. The climb makes bulky low-value freight expensive.

See [[Saros - Distances, Travel, Trade, and Population]] for the canonical route model.

## Security

The town maintains a professional watch and hires additional guards during major trade periods. Its strategic position also attracts frequent Legion patrols.

## Places of Interest

- [[The Great Crossmarket]] — central wholesale market
- [[Soryn Hall]] — civic hall and toll office
- [[Three Rivers Yard]] — secure caravan and freight compound

<!-- foundry-ignore-start -->
#### NPCs Found Here
```dataview
TABLE WITHOUT ID file.link AS "NPC", Race, Building, join(Faction, ", ") AS "Factions"
FROM #NPC
WHERE Location = link(this.file.name)
SORT file.name ASC
```
<!-- foundry-ignore-end -->
