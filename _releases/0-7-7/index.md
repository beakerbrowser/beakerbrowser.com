---
version: 0.7.7
releaseDate: October 23, 2017
size: 65 MB
layout: release
---

Two fixes to the Dat networking stack which should improve performance for everybody.

<h2>Fixes</h2>

 - <span class="tag updated">fix</span> ([memory-pager#2](https://github.com/mafintosh/memory-pager/pull/2)) Substantially reduce the amount of memory allocated and de-allocated for each connection.
 - <span class="tag updated">fix</span> ([hyperdrive@89aacb](https://github.com/mafintosh/hyperdrive/commit/89aacb10ebbf66ebdb4adf54a0a5cf31d7f9d0a0)) Fixed an edge case that would cause Dat downloads to stall and never finish.