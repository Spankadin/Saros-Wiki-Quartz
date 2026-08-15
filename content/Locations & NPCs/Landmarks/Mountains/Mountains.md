---
title: Mountains
ccType: entry
ccId: entry-mountain-index
aliases: []
tags:
- Index
- Published
ccTags:
- Mountains
- Index
share: true
dataview: true
---

The mountain ranges of [[A Brief Saros History|Saros]] contain mines, isolated settlements, old ruins, and entrances to forgotten [[Delves]].

```dataview
TABLE WITHOUT ID
file.link AS "Mountain Region",
Region
FROM #Mountain
WHERE file.name != this.file.name
SORT file.name ASC
```
