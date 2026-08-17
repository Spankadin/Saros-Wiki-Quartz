---
title: Grymswatch
ccType: region
ccId: region-grymswatch
aliases: []
tags:
- Town
- Port
- Published
Region: "[[A Brief Saros History|Saros]]"
Hex: "133.179"
Government: Military Charter
Leader: "[[Admiral Thainan]]"
Population: 1000
ccTags:
- Town
- Port
publish: true
dataview: true
links:
  mdlinks: true
  convert: true
---

[[Grymswatch]] is a fortified military town and one of the principal strongholds of [[The Aegis Legion]]. It stands watch over the southeastern approaches of Saros and exists primarily to contain the threat posed by [[Karastos]] and the pirate factions operating from that coast.

Almost everything in Grymswatch serves the garrison.

## Character

The town feels more like a fortress with civilian streets than a settlement that later acquired walls. Training yards, warehouses, barracks, signal stations, and repair sheds dominate the skyline.

Civilians are accustomed to inspections, drills, ration stores, and military schedules.

## Government

Grymswatch is governed under a military charter. [[Admiral Thainan]] commands the naval establishment and holds enormous practical authority, while [[Festin Dontel]] serves as his lieutenant and second in command.

The arrangement is tolerated because the town's strategic purpose is defense rather than commerce.

## Trade and Economy

Grymswatch survives on:

- Naval supply contracts
- Ship repair
- Fishing
- Salted provisions
- Weapons and armor maintenance
- Timber and rope purchased from other settlements
- Crown expenditure

Without the Legion, the settlement would be dramatically smaller.

## Travel and Connections

[[Karastos]] lies about a day away by coastal vessel. The difficult land journey takes roughly 3 days where usable, 3-4 days by wagon, or about 2 days mounted.

This short sea connection makes naval readiness more important than the land road and places [[Admiral Thainan]] under constant pressure to watch the pirate coast. See [[Saros - Distances, Travel, Trade, and Population]] for the canonical route model.

## Security

[[Mira's Wall]] is the great central fortress and training ground. Coastal patrols, watch towers, naval vessels, and constant readiness against [[Bloodmarked]] raiders define life here.

## Places of Interest

- [[Mira's Wall]] — Legion headquarters and training fortress

<!-- foundry-ignore-start -->
#### NPCs Found Here
```dataview
TABLE WITHOUT ID file.link AS "NPC", Race, Building, join(Faction, ", ") AS "Factions"
FROM #NPC
WHERE Location = link(this.file.name)
SORT file.name ASC
```
<!-- foundry-ignore-end -->
