---
title: Landmarks
ccType: entry
ccId: entry-landmark-index
aliases: []
tags:
- Index
- Published
ccTags:
- Index
publish: true
dataview: true
---

Landmarks are geographic features, monumental works, roads, districts, waters, and other named parts of [[A Brief Saros History|Saros]] that shape travel and identity without functioning as Campaign Codex **Locations**.

```dataview
TABLE WITHOUT ID
file.link AS "Landmark",
Hex,
LandmarkType AS "Type",
Region
FROM #Landmark
WHERE !contains(file.path, "Templates") AND share != false
SORT file.name ASC
```
