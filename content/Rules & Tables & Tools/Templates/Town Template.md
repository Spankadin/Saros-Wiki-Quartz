---
title: Town Template
ccType: region
ccId: region-town-name
ccImage: null
aliases: []
tags:
- Town
- Published
Region: "[[A Brief Saros History|Saros]]"
Government: null
Leader: null
Population: 0
ccTags:
- Town
share: true
dataview: true
links:
  mdlinks: true
  convert: true
---

A concise description of the settlement, its landscape, and the first impression it gives a traveler.

## Character

What makes this settlement feel different from the others in [[Saros]]?

## Government

Describe the local authority, how it relates to the Crown, and who actually makes decisions.

## Trade and Economy

Explain why the settlement exists, what it exports, what it needs, and how goods move in and out.

## Security

Describe walls, watch, militia, [[The Aegis Legion|Legion]] presence, and the dangers people worry about.

## Places of Interest

- [[Example Entry]] — short description

<!-- foundry-ignore-start -->
#### NPCs Found Here
```dataview
TABLE WITHOUT ID file.link AS "NPC", Race, Building, join(Faction, ", ") AS "Factions"
FROM #NPC
WHERE Location = link(this.file.name)
SORT file.name ASC
```
<!-- foundry-ignore-end -->
