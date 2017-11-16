---
version: 0.7.9
releaseDate: November 16, 2017
size: 79 MB
layout: release
---

This update contains some fixes for the MacOS DAT networking stack.

<h2>Fixes</h2>

 - <span class="tag updated">fix</span> Use native-compiled crypto library (sodium) rather than the wasm version. This improves performance overall.
 - <span class="tag updated">fix</span> If the wasm crypto library is used for some reason, don't spaz out and throw "Source too large" errors.