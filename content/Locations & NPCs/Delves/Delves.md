---
title: Delves
ccType: entry
ccId: entry-delve-index
aliases:
- Delve
- Delving
tags:
- Lore
- Index
- Published
ccTags:
- Delves
publish: true
dataview: true
---

During the [[Ages of Saros|Second Age]], dwarven and elven understanding of the [[Fey-Lines]] changed how both peoples interacted with the land.

Elven traditions used concentrations of fey-line power to cultivate life, conceal domains, and protect forests.

The [[Dwarven Clans]] built vast underground complexes at or near powerful convergences. Modern Sarosians call these structures **Delves**.

## Purpose

A Delve could combine:

- Mine
- Fortress
- Clan settlement
- Workshop
- Storehouse
- Fey-line installation
- Access to deeper underworld passages

The dwarves sought valuable stone, metal, and [[Fey-stone]] while also establishing defensible underground centers.

## The Danger of Depth

Many delves were eventually sealed.

Dwarven stories repeatedly warn that a delve can go **too deep**, reaching places or creatures that should not be disturbed.

A large number of known delves are now abandoned, ruined, occupied, or lost entirely.

## Light and Abandonment

Working delves once used lamps, forge light, reflected shafts, luminous materials, or magic suited to their inhabitants. When those systems fail, the deeper works become truly lightless.

Explorers should not expect a centuries-sealed gallery to reveal more than their torch, spell, shard, or ritual light can reach. Beyond that small island of illumination, architecture and danger may remain completely unseen.

## Modern Delving

When a delve is rediscovered, adventurers arrive quickly.

Merchants, guards, laborers, scholars, and opportunists usually follow.

Some towns have grown around profitable old workings.

```dataview
TABLE WITHOUT ID
file.link AS "Known Delve",
Hex,
truname AS "True Name",
Region,
rfaction AS "Ruling Faction"
FROM #Delve
WHERE file.name != this.file.name
SORT file.name ASC
```
