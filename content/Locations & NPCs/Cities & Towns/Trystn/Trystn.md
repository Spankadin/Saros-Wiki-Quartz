---
title: Trystn
ccType: region
ccId: region-trystn
aliases: []
tags:
- Town
- Published
Region: "[[A Brief Saros History|Saros]]"
Hex: "102.99"
Government: "[[Crossroads Council]]"
Leader: "[[Elian Thorne]]"
Population: 4600
ccTags:
- Town
publish: true
dataview: true
links:
  mdlinks: true
  convert: true
---

[[Trystn]] exists because roads meet there.

Caravans from [[Port Quartz]], [[Lilya]], [[Rore]], and the central country all pass through the same broad corridor, turning the settlement into a town of wagon yards, inns, livestock pens, warehouses, smiths, wheelwrights, and arguments over whose cargo moves first.

## Character

Trystn is transient without being rootless. Many residents make their living serving people who will be gone by morning.

A visitor can hear accents from across Saros in a single market circuit. Wagon bells and livestock are as much part of the town's sound as conversation.

## Government

The [[Crossroads Council]] governs Trystn under [[Elian Thorne]], the **Roadwarden**.

Its authority is intensely practical: road maintenance, tolls, caravan space, market order, bridge repair, escort contracts, and disputes between merchants who may not even live in town.

## Trade and Economy

Trystn thrives on:

- Caravan lodging
- Wagon and wheel repair
- Horses and draft animals
- Grain exchange
- Livestock markets
- Warehousing
- Toll collection
- Escort contracts
- Food and drink for travelers

It is also the safest conventional route between [[Port Quartz]] and [[Lilya]].

## Travel and Connections

| Destination | Working Distance and Time |
| --- | --- |
| [[Port Quartz]] | **125–140 miles**; 7–8 days walking, 9–12 by heavy wagon, or 4–6 mounted |
| [[Lilya]] | **110–125 miles**; 6–8 days walking, 8–12 by heavy wagon, or 4–6 mounted |
| [[Rore]] | Provisional pending a hex-by-hex audit; count the visible road and apply the campaign's OSE movement rate |

The long Rore road supports feed sellers, overnight stops, repair yards, and caravan staging throughout the corridor. The final twenty miles toward Lilya narrow near hex **105.84** and are vulnerable to snow and rockfall. See [[Saros - Distances, Travel, Trade, and Population]] for the canonical route model.

## Security

Trystn relies on its town watch, roadwardens, contract guards, passing mercenaries, and a small Legion patrol office.

The walls are less imposing than Lilya's, but the constant presence of armed travelers makes the town difficult to intimidate cheaply.

## Places of Interest

- [[Four Roads Market]] — the great central open market
- [[The Axle and Bell]] — busy caravan inn run by [[Jessa Marr]]
- [[Tollhouse Commons]] — road office, public notices, and civic hearings
- [[East Gate Caravan Yard]] — the largest secure wagon yard in town

<!-- foundry-ignore-start -->
#### NPCs Found Here
```dataview
TABLE WITHOUT ID file.link AS "NPC", Race, Building, join(Faction, ", ") AS "Factions"
FROM #NPC
WHERE Location = link(this.file.name)
SORT file.name ASC
```
<!-- foundry-ignore-end -->
