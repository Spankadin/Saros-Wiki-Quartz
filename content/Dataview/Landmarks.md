---
title: Landmarks
ccType: entry
ccId: entry-dataview-landmarks
tags: []
publish: true
dataview: true
links:
  mdlinks: true
  convert: true
---

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
