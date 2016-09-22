---
title:    Permissions
category: Web APIs
order:    2
---

Some APIs require additional permissions for the application to use them.
This permissions must be granted by the user.

To request permissions, include a [dat.json Manifest File](/docs/apis/manifest.html) in the root of the site with the required permissions listed.
Here is a comprehensive list of all permission values:

<table class="doc-table">
  <tr>
    <td class="unbreakable"><code>datWrite</code></td>
    <td class="unbreakable"><a href="/docs/apis/dat.html#permissions">Dat API</a></td>
    <td>Can use createArchive, writeFile, writeCheckpoint, and other write methods.</td>
  </tr>
  <tr>
    <td class="unbreakable"><code>datUpload</code></td>
    <td class="unbreakable"><a href="/docs/apis/dat.html#permissions">Dat API</a></td>
    <td>Can use serve and unserve.</td>
  </tr>
</table>