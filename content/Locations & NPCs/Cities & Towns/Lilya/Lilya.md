---
title: Lilya
ccType: region
ccId: region-lilya
aliases: []
tags:
- Town
- Published
Region: "[[A Brief Saros History|Saros]]"
Government: "[[Stone Council]]"
Leader: "[[Maela Torr]]"
Population: 3800
ccTags:
- Town
share: true
dataview: true
links:
  mdlinks: true
  convert: true
---

[[Lilya]] presses against the lower slopes of [[The Silvervein Summits]], built as close to the mountain as its miners can safely live. Retaining walls, ore yards, smoke stacks, hoists, steep streets, and tunnel mouths make the town appear wedged into the range rather than placed beside it.

Its reason for existing is simple: the mountain pays.

## Character

Lilya is industrious, cramped, and perpetually dusty. Work shifts shape the day more than the sun does. Bells announce cave-ins, shift changes, fires, and closures, and almost every household has lost someone below ground.

Miners tend to measure trust by competence. A stranger who can shore a tunnel, repair a pump, or carry an injured worker earns respect faster than someone with an impressive title.

## Government

The [[Stone Council]] governs the town under Crown charter. [[Maela Torr]], the **Stone Reeve**, chairs the council and represents Lilya in major civic disputes.

The council is strongly influenced by mine crews, smelters, haulers, craftsmen, and long-established households.

The [[The Aegis Legion|Aegis Legion]] maintains a small defensive presence because the mines are strategically important, but local mine law predates many current Crown regulations and is fiercely protected.

## Trade and Economy

Lilya exports:

- Silver-bearing ore
- Iron and lesser metals
- Cut stone
- Tools and fittings
- Pigments and mineral salts
- Deep-earth materials
- Durable goods prepared for the [[Fall Casks|fall-cask trade]]

Most ordinary freight moves south by road to [[Trystn]], where it can continue toward [[Port Quartz]] or [[Rore]].

## Travel and Connections

[[Trystn]] lies roughly **60-70 road miles** away: 3-4 days walking, 4-5 days by heavy wagon, or 2-3 days mounted.

The full safe route to [[Port Quartz]] runs through Trystn and covers approximately **110-120 road miles**. It takes about 6 days walking, 7-9 days by heavy commercial wagon, or roughly 4 days mounted. A direct griffin journey can be made in about a day.

Ore, stone, and finished mineral goods move downhill. Food, feed, timber, tools, and mine supplies move north. See [[Saros - Distances, Travel, Trade, and Population]] for the canonical route model.

## Security

Lilya relies on:

- Heavy gates
- Stone watch positions
- Armed mine crews
- A small Legion detachment
- Controlled mine entrances
- Emergency refuge chambers cut into the mountain

A disaster below ground is often more dangerous than an enemy outside the walls.

## Places of Interest

- [[Stonewake Hall]] — meeting place of the Stone Council
- [[The Silver Gate]] — the most heavily controlled entrance into the principal mine works
- [[Hammerfall Yard]] — ore sorting, smelting, repair, and loading
- [[The Deep Lantern]] — miners' inn and hiring hall

The oldest and deepest workings around Lilya overlap with forgotten dwarven construction whose full extent is no longer understood.

<!-- foundry-ignore-start -->
#### NPCs Found Here
```dataview
TABLE WITHOUT ID file.link AS "NPC", Race, Building, join(Faction, ", ") AS "Factions"
FROM #NPC
WHERE Location = link(this.file.name)
SORT file.name ASC
```
<!-- foundry-ignore-end -->
