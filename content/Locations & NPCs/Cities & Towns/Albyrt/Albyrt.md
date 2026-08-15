---
title: Albyrt
ccType: region
ccId: region-albyrt
aliases: []
tags:
- Town
- Port
- Published
Region: "[[A Brief Saros History|Saros]]"
Government: Twin-Lake Charter Council
Leader: "[[Mara Avelin]]"
Population: 6400
ccTags:
- Town
- Port
share: true
dataview: true
links:
  mdlinks: true
  convert: true
---

[[Albyrt]] is the larger western half of the twin cities on the great southern lake, facing [[Isoltide]] across the water. The two settlements grew around opposite ends of the lake's trade and ferry routes and are culturally intertwined even when their councils disagree.

## Character

Albyrt is sturdy, practical, and lake-oriented. Ferries, warehouses, grain yards, fish markets, and repair slips line the water. Travelers from the north often treat Albyrt and Isoltide as a single destination; residents are quick to explain why that is incorrect.

## Government

A local charter council handles civic affairs under [[Mara Avelin]], the current **Lake Reeve**. The Crown is recognized, but daily life is governed locally and the city's relationship with Isoltide matters almost as much as its relationship with distant [[Pyrris]].

## Trade and Economy

Albyrt lives on lake transport, fishing, grain, ferry service, warehousing, and goods moving between the western roads and the south.

Its position near routes toward the dangerous [[The Urmong Barrows|Urmong Barrows]] also supports outfitters, guides, and guards.

## Travel and Connections

[[Isoltide]] stands across the great southern lake. A ferry or lake boat crosses in less than a day, while going around takes about 2 days on foot, 2-3 days by heavy cart, or 1-2 days mounted.

The lake carries grain, fish, timber, livestock feed, stone, and passengers far more efficiently than the road. See [[Saros - Distances, Travel, Trade, and Population]] for the canonical route model.

## Security

A lakeside wall, gatehouses, watch boats, and local militia protect the town. Patrols focus as much on the approaches from the Barrows as on ordinary crime.

## Places of Interest

- [[Westlake Ferry Hall]] — ferry offices and civic meeting point
- [[Albyrt Grain Steps]] — terraced loading quays for grain and bulk goods
- [[The Reed Crown]] — large lakeside inn serving merchants and ferry crews

<!-- foundry-ignore-start -->
#### NPCs Found Here
```dataview
TABLE WITHOUT ID file.link AS "NPC", Race, Building, join(Faction, ", ") AS "Factions"
FROM #NPC
WHERE Location = link(this.file.name)
SORT file.name ASC
```
<!-- foundry-ignore-end -->
