---
title:    Technology
order:    2
category: Documentation
---

Beaker integrates two new P2P hypermedia protocols:

 - The [Dat Protocol](http://dat-data.com), called "Hyperdrive".
 - The [IPFS Protocol](https://ipfs.io) (requires the external daemon).

<table class="doc-table bold-headings">
  <tbody>
    <tr class="heading"><td colspan="2">Features</td></tr>
    <tr><td>Peer-to-Peer</td><td>Users can author and host sites directly from Beaker.</td></tr>
    <tr><td>Offline-First</td><td>Sites can be saved permanently and run without the network.</td></tr>
    <tr><td>Builtin Forking</td><td>Duplicate any site with one click.</td></tr>
    <tr><td>Shortnames</td><td>DNS gives human-readable names.</td></tr>
    <tr><td>Live-Reloading</td><td>Automatically refresh the page as you work.</td></tr>
    <tr class="heading"><td colspan="2">Coming Soon:</td></tr>
    <tr><td>Versioning</td><td>Lookup old versions with URL tags: <code>foo.js@2.1.0</code>.</td></tr>
    <tr><td>APIs</td><td>Programmatically store and share files on the P2P networks.</td></tr>
  </tbody>
</table>

<hr class="nomargin">

<h3>About the IPFS Protocol</h3>

[You can read about IPFS here.](https://ipfs.io/#how)

<hr class="nomargin">

<h3>About the Dat Protocol</h3>

Dat's protocol, Hyperdrive, is most easily described as "Git meets BitTorrent."
It connects users in a P2P system, and distributes archives with their change-logs.

**Summary**

 - A Dat "archive" behaves like a self-contained folder of files.
 - The archive is addressed by a public key. All updates are signed, and the files are referenced by content-hash. This ensures all users receive the same data, regardless of the source.
 - The full history of changes is retained in a metadata log. This can be used by peers to lookup specific versions of a file. The log is append-only, and can not be modified after it has been distributed.
 - As in BitTorrent, multiple peers can be used simultaneously to download data. Users connect to "discovery networks" to look up peers with the files they need. Hyperdrive deduplicates data to make syncing as efficient as possible.

Because Hyperdrive was built for the [Dat Project](http://dat-data.com), its URLs start with `dat://`.
