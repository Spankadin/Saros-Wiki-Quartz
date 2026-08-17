---
title: Isoltide
ccType: region
ccId: region-isoltide
aliases: []
tags:
- Town
- Port
- Published
Region: "[[A Brief Saros History|Saros]]"
Hex: "86.150"
Government: Twin-Lake Charter Council
Leader: "[[Teren Moss]]"
Population: 5800
ccTags:
- Town
- Port
publish: true
dataview: true
links:
  mdlinks: true
  convert: true
---

[[Isoltide]] stands opposite [[Albyrt]] on the great southern lake, where the eastern forest, river traffic, and lake fisheries meet.

The two cities depend on one another but maintain distinct laws, officials, guilds, and local pride.

## Character

Isoltide is greener and more wooded than Albyrt. Timber structures, fish smokehouses, ferry slips, and forest roads crowd the lakeshore.

## Government

[[Teren Moss]] serves as the current **East Reeve**, presiding over a charter council representing ferry owners, fishers, forest trades, and established families.

The council coordinates closely with Albyrt on lake safety while arguing constantly over tolls and commercial precedence.

## Trade and Economy

- Lake fishing
- Timber and forest goods
- Ferry traffic
- River cargo
- Grain and food arriving from nearby farmland
- Warehousing for goods crossing the lake

## Travel and Connections

[[Albyrt]] lies across the great southern lake. A ferry or lake boat crosses in less than a day; the road around takes about 2 days walking or 2-3 days by heavy cart.

[[Mysha]] lies roughly **65-80 road miles** away: 3-4 days walking, 4-6 by wagon, or 2-3 days mounted. Navigable water movement can rival or beat the road.

See [[Saros - Distances, Travel, Trade, and Population]] for the canonical route model.

## Security

Isoltide is modestly fortified and maintains armed watch boats. The forest edge is patrolled because predators and older dangers can approach the town more quietly than any army.

## Places of Interest

- [[Eastwater Hall]] — civic hall and ferry registry
- [[Isoltide Fishstairs]] — stepped fish market descending toward the lake
- [[The Green Lantern]] — travelers' inn near the forest road

<!-- foundry-ignore-start -->
#### NPCs Found Here
```dataview
TABLE WITHOUT ID file.link AS "NPC", Race, Building, join(Faction, ", ") AS "Factions"
FROM #NPC
WHERE Location = link(this.file.name)
SORT file.name ASC
```
<!-- foundry-ignore-end -->
