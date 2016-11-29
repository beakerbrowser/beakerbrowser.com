---
title:    Dat API
category: Web APIs
order:    3
---

<div class="card">
  <p><strong>Summary.</strong> Read and write versioned files to archives on the user's local hard-drive, and share the archives over the network.</p>
</div>


**Note**

- Only apps served over dat:// are able to access this API.
- <i class="fa fa-flask"></i> This API is under development and subject to change.

**Table of Contents**

<ul class="doc-toc">
  <li>Dat API
    <ul>
      <li><a href="#example-usage">Example Usage</a></li>
      <li><a href="#permissions">Permissions</a></li>
      <li><a href="#disk-usage-and-quotas">Disk Usage and Quotas</a></li>
      <li><a href="#versioning">Versioning</a></li>
      <li><a href="#networking">Networking</a></li>
      <li><a href="#special-files">Special Files</a></li>
      <li>Toplevel Methods {% include api-links.html items=site.data.apis.dat.toplevel_methods %}</li>
    </ul>
  </li>
</ul>

<hr class="nomargin">

### Example Usage

Dat archives can be used to save data locally for an application, or to publish on the network.

```javascript
// Create a new archive
var archiveURL = await dat.createArchive({ title: 'My Dat' })
archiveURL // => 'dat://{hash}/'

// Read/write files
await dat.writeFile(archiveURL + 'hello.txt', 'world')
var str = await dat.readFile(archiveURL + 'hello.txt')
console.log(str) // => 'world'

// Write new versions
await dat.writeCheckpoint(archiveURL, '1.0.0')
await dat.writeFile(archiveURL + 'hello.txt', 'web!!')
await dat.writeCheckpoint(archiveURL, '2.0.0')
```

<hr class="nomargin">

### Permissions 

This API is only available to apps served over `dat://`.
By default, any `dat://` app can read other dat-archives via HTML embeds, Ajax, or the `dat` read commands.

An app can write to archives that it created.
The user will be prompted to confirm permission to:

 1. Create a new dat archive
 2. Modify a dat archive created by another site

The user must be the owner of a dat archive to modify it.

<hr class="nomargin">

### Disk Usage and Quotas

Archives are either permanent or temporary.
Archives that are created via the `dat` api are permanent.
All other archives (downloaded by browsing, HTML embeds, or Ajax) are temporary and may be automatically deleted.
A permanent archive can be made temporary by calling `dat.deleteArchive()` on it.

By default, archives are limited to 100MB of storage.
When the limit is reached, the user will be prompted to allow more disk-usage.
Until this is granted, all writes will fail.

<hr class="nomargin">

### Versioning

Dat Archives retain a log of all changes to the archive, which is accessible via `getHistory()`.
By default, only the latest versions of the files are retained.
When a checkpoint is written, the files' contents are captured and retained.

Checkpoint names must be unique and cannot be reused.
It's recommended that you follow [semantic versioning](http://semver.org/), but this is not required.

<hr class="nomargin">

### Networking

All dat archives have URLs and can be distributed over the network.

An archive which is opened from the network is downloaded and stored locally, and then updated in the background.
The archive's contents may not always be findable on the network.
The connection may fail, or the server could go offline.
This will manifest as timeouts to the read calls.
You can configure the timeout length in the call arguments.

<hr class="nomargin">

### Special Files

The `dat.json` file is special, and can not be read or written directly by the application.
It is a manifest file that includes metadata and configuration.

<hr class="nomargin">

### Toplevel Methods

{% include api-reference.html items=site.data.apis.dat.toplevel_methods %}