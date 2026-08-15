---
title: Karastos
ccType: region
ccId: region-karastos
aliases: []
tags:
- Town
- Port
- Published
Region: "[[A Brief Saros History|Saros]]"
Government: Pirate Captains and Local Powers
Leader: ''
Population: 5000
ccTags:
- Town
- Port
share: true
dataview: true
links:
  mdlinks: true
  convert: true
---

[[Karastos]] is a notorious pirate-held port on the southeastern coast and one of the few major settlements that does not pretend to answer to the Crown.

Its population is difficult to count. Crews arrive, disappear, recruit, die, and sail again constantly; an estimate of roughly five thousand permanent residents is useful only in the broadest sense.

## Character

Karastos is loud, dangerous, crowded, and commercially useful. Stolen cargo can become ordinary merchandise within a few transactions, provided the right people are paid.

Its reputation for complete lawlessness is exaggerated. Karastos has rules—the difference is that they are enforced by captains, crews, local bosses, and whoever currently possesses enough force to make a ruling matter.

## Trade and Economy

- Pirated cargo
- Ship repair and refitting
- Smuggling
- Coastal fishing
- Weapons and provisions
- Captive labor and illicit trade
- Information about shipping routes

## Travel and Connections

[[Grymswatch]] is close enough to remain a constant military threat. The difficult land journey takes roughly 3 days where usable, 3-4 days by wagon, or about 2 days mounted. A coastal vessel can make the passage in about a day.

The ease of movement by sea makes patrols, raids, smuggling, and sudden changes in naval pressure more important than the apparent overland separation. See [[Saros - Distances, Travel, Trade, and Population]] for the canonical route model.

## Security

There is no central civic watch comparable to Goslow's. Individual docks, taverns, compounds, and warehouses employ their own guards.

The city's greatest external threat is [[Grymswatch]] and the [[The Aegis Legion|Aegis Legion]] fleet.

[[Bloodmarked]] crews are among the most feared pirate factions associated with the southern waters.

<!-- foundry-ignore-start -->
#### NPCs Found Here
```dataview
TABLE WITHOUT ID file.link AS "NPC", Race, Building, join(Faction, ", ") AS "Factions"
FROM #NPC
WHERE Location = link(this.file.name)
SORT file.name ASC
```
<!-- foundry-ignore-end -->
