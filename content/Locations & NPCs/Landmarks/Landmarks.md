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
share: true
dataview: true
---

Landmarks are geographic features, monumental works, roads, districts, waters, and other named parts of [[A Brief Saros History|Saros]] that shape travel and identity without functioning as Campaign Codex **Locations**.

```dataview
TABLE WITHOUT ID
file.link AS "Landmark",
LandmarkType AS "Type",
Region
FROM #Landmark
WHERE !contains(file.path, "Templates")
SORT file.name ASC
```
