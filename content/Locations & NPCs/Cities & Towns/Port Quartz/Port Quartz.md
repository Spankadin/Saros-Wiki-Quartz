---
title: Port Quartz
ccType: region
ccId: region-port-quartz
aliases: []
tags:
- Town
- Port
- Published
Region: "[[A Brief Saros History|Saros]]"
Government: "[[Mooring Council]]"
Leader: "[[Hesta Vane]]"
Population: 5250
ccTags:
- Town
- Port
share: true
dataview: true
links:
  mdlinks: true
  convert: true
---

[[Port Quartz]] is one of the great transfer points of northern [[A Brief Saros History|Saros]], built around an immense river crossing that cannot be bridged by present-day Sarosian engineering. Ferries, cargo craft, warehouses, customs offices, and river crews shape nearly every part of daily life.

The town is also the last dependable concentration of civilization for anyone turning northwest toward [[The Masys Mountains]].

## Geography and Routes

The principal safe commercial road runs east toward [[Trystn]], where freight can continue north toward [[Lilya]] or southeast toward [[Rore]].

There is **no ordinary safe commercial road southwest to [[Goslow]] or [[Kylor]]**. Enormous rivers divide the regions. The normal Goslow connection is a shipping route through [[Bishop's Bay]] and then upstream to Port Quartz.

There is **no charted safe road north from Port Quartz to [[Lake of Lament]]**.

The lake lies far above Port Quartz in the high basin around [[The Silvervein Summits]]. At its southwestern edge, the water plunges over an enormous cataract before joining the river that eventually reaches Port Quartz. No ordinary vessel can travel upstream through that fall.

Explorers may cross west at [[Westwater Ferry]] and turn toward the Masys country, but maintained paths disappear quickly.

## Travel and Connections

| Destination | Route | Working Distance and Time |
| --- | --- | --- |
| [[Goslow]] | River and coastal shipping | **70-90 water miles**; ordinarily 2-3 days toward Port Quartz and 1-2 days returning |
| [[Trystn]] | Maintained road | **45-50 miles**; 2-3 days walking or 3-4 by heavy wagon |
| [[Lilya]] | Via [[Trystn]] | **110-120 road miles**; about 6 days walking or 7-9 by heavy commercial wagon |
| [[The Masys Mountains|Masys country]] | [[Westwater Ferry]] and unmaintained routes | Expedition travel; no dependable commercial time |

See [[Saros - Distances, Travel, Trade, and Population]] for the canonical route model.

## Government

Port Quartz is governed under royal charter by the [[Mooring Council]], presided over by [[Hesta Vane]], the **First Mooring**.

The local [[The Aegis Legion|Aegis Legion]] garrison is commanded by [[Captain Serin Holt]]. The garrison protects the crossing and regional routes, but it does not legally govern the town.

The disappearance of [[Queen Amara]] has made the boundary between civic and military authority increasingly important.

## Trade and Economy

Port Quartz makes most of its wealth by moving, storing, insuring, and recovering goods.

Major trades include:

- Ferry operation
- Warehousing and customs
- Cargo brokerage
- Rivercraft repair
- Cartage and animal handling
- Rope, pitch, tackle, and cooperage
- Salvage
- Expedition supply
- Trade moving between [[Goslow]], [[Trystn]], [[Lilya]], and [[Rore]]

One of the strangest parts of the economy is the **[[Fall Casks|fall-cask trade]]**. Durable goods from Lilya and the Lake of Lament basin can be packed into reinforced barrels and intentionally sent over the great waterfall for recovery downstream.

See [[Fall Casks]] for construction, registration, recovery fees, and the claim laws governing lost or unclaimed casks.

## Security

Port Quartz has several overlapping security forces:

- The civic Chain Watch
- The local [[The Aegis Legion|Aegis Legion]] garrison
- Licensed private guards employed by merchants and warehouse owners
- A militia that can be raised during a serious emergency

The town's greatest everyday hazards are river accidents, cargo theft, smuggling, and disputes that become violent before anyone agrees who has jurisdiction.

## Places of Interest

- [[The Fourty Knights]] — the largest tavern and inn in town, operated by [[Prance Mondrel]]
- [[Hall of Moorings]] — civic hall, customs house, and seat of [[Hesta Vane]]
- [[White Quays]] — the pale commercial waterfront
- [[Cataract Yard]] — [[Fall Casks|fall-cask]] recovery and salvage works
- [[Vane Archive]] — expedition journals and maps kept by [[Nelra Vossin]]
- [[Westwater Ferry]] — the main western crossing, overseen by [[Oren Bale]]
- [[Breakwater Registry]] — licenses guides, surveyors, ferry crews, and declared expeditions
- [[Quartz Vaults]] — secured warehouses cut into pale stone
- [[Shrine of the Last Oar]] — riverside memorial to those lost on the water
- [[Chainwatch]] — civic watch tower and ferry signal station
- [[The Quartz Cobra]] — chartered gambling hall and Bank of Saros, operated by [[Lind Bergy]]

## Character

Port Quartz is crowded, loud, practical, and accustomed to strangers. Its people respect competence more than titles.

The river decides working hours, prices, law, and funerals. No government has ever persuaded it otherwise.

<!-- foundry-ignore-start -->
#### NPCs Found Here
```dataview
TABLE WITHOUT ID file.link AS "NPC", Race, Building, join(Faction, ", ") AS "Factions"
FROM #NPC
WHERE Location = link(this.file.name)
SORT file.name ASC
```
<!-- foundry-ignore-end -->
