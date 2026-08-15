---
title: Waters
ccType: entry
ccId: entry-water-index
aliases: []
tags:
- Index
- Published
ccTags:
- Water
- Index
share: true
dataview: true
---

The seas, bays, lakes, and other named waters of [[A Brief Saros History|Saros]] shape nearly every major trade route.

```dataview
TABLE WITHOUT ID
file.link AS "Water",
LandmarkType AS "Type",
Region
FROM #Water
WHERE file.name != this.file.name
SORT file.name ASC
```
