---
title: Web APIs
section: webAPIs
sectionTitle: Web APIs
order: 1
---

<style>
.docs h2, .docs h3 {
  margin-top: 1em;
}
</style>

<div class="columns two">

<div>
<h3>Tutorials</h3>
<ul>
  <li><a href="/docs/tutorials/read-site-files.html">Read site files</a></li>
  <li><a href="/docs/tutorials/write-site-files.html">Write site files</a></li>
  <li><a href="/docs/tutorials/diff-commit-revert.html">Diff, commit, revert</a></li>
  <li><a href="/docs/tutorials/listen-for-file-changes.html">Listen for file changes</a></li>
  <li><a href="/docs/tutorials/create-or-fork-a-site.html">Create or fork a site</a></li>
</ul>
</div>

<div>
<h3>API References</h3>
<ul>
  <li>
    <a href="/docs/apis/dat.html">DatArchive API</a>
  </li>
  <li>
    <a href="/docs/apis/permissions.html">Permissions API</a>
  </li>
  <li>
    <a href="/docs/apis/manifest.html">Dat.json site manifest</a>
  </li>
</ul>
</div>

</div>

## Core concepts

<div class="columns two">

<div>
<h3>Peer-to-peer hosting</h3>
<p>Dat is a peer-to-peer protocol that's similar to BitTorrent. The browser enters the swarm while a user is visiting a site. File metadata is downloaded optimistically, while the file content is only downloaded on access. Changes to the metadata are actively synced in the background.</p>
</div>

<div>
<h3>Public-key URLs</h3>
<p>Each Dat site is addressed by an elliptic-curve public-key URL. The public key is encoded in 64-character hex. The device that holds the private key is the “owner” or “author” of the Dat. Currently, only one device may be the owner; multi-author Dats are not yet supported.</p>
</div>

<div>
<h3>Dat staging area</h3>
<p>Like Git, Beaker maintains a “staging area” for each Dat the user creates or saves. This staging area allows the user to make local changes to the Dat before publishing. In addition to helping prevent changes from accidentally being published, this saves bandwidth, processing time, and disk space. At any point, the user can either “commit” the changes to the Dat, or “revert” to the last committed stage.</p>
</div>

<div>
<h3>Versions and history</h3>
<p>Each Dat maintains a linear, monotonic log of its changes (the history). Each time a file is written or deleted, a new entry is added to the history, and the version number is incremented. This version number (the revision) can be used to checkout historic versions of a Dat. In Beaker, this is done by adding the version number to the end of the domain after a <code>'+'</code> sign.</p>
</div>

<div>
<h3>Hostless sandbox</h3>
<p>Traditionally, websites can use Ajax to freely can freely contact their hosting server. However, Dat sites are served from the peer-to-peer swarm, not from a hosting server. Therefore there is no remote host attached to the domain, and all remote requests to non-Dat URLs require a request for permission.</p>
</div>

<div>
<h3>Dat files API</h3>
<p>Beaker provides a complete Web API for reading, writing, and watching Dats from within a site. Only sites hosted over the <code>dat://</code> protocol can access the API. No permission is currently required to read Dats, but permission is required to write. (Reads may be permissioned in the future, depending on their potential for abuse.)</p>
</div>

</div>