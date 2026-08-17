---
title: Towns
ccType: entry
ccId: entry-dataview-towns
tags: []
publish: true
dataview: true
links:
  mdlinks: true
  convert: true
---

```dataview
TABLE WITHOUT ID
file.link AS "Settlement",
Hex,
Population,
Government,
Leader
FROM #Town OR #City
WHERE !contains(file.path, "Templates")
SORT default(Population, 0) DESC
```
