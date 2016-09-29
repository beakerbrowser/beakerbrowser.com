---
title:    Dat API
category: Web APIs
order:    3
---

<div class="card">
  <p><strong>Summary.</strong> Read and write versioned files to archives on the user's local hard-drive, and share the archives over the network.</p>
  <p><strong><span class="fa fa-warning"></span> This API is under development and subject to change. It has not yet been enabled.</strong></p>
</div>

Only apps served over `dat://` are able to access this API.

<ul class="doc-toc">
  <li>Dat API
    <ul>
      <li><a href="#example-usage">Example Usage</a></li>
      <li><a href="#permissions">Permissions</a></li>
      <li><a href="#disk-usage-and-quotas">Disk Usage and Quotas</a></li>
      <li><a href="#versioning">Versioning</a></li>
      <li><a href="#networked-archives">Networked Archives</a></li>
      <li><a href="#special-files">Special Files</a></li>
      <li>Toplevel Methods {% include api-links.html items=site.data.apis.dat.toplevel_methods %}</li>
      <li><code>DatArchive</code> Properties {% include api-links.html items=site.data.apis.dat.datarchive_properties %}</li>
      <li><code>DatArchive</code> Methods {% include api-links.html items=site.data.apis.dat.datarchive_methods %}</li>
    </ul>
  </li>
</ul>

---

### Example Usage

Dat archives can be used to save data locally for an application, or to publish on the network.

```javascript
// Create a new archive
var archive = dat.createArchive({ versioned: true })

// Read/write files
archive.writeFile('hello.txt', 'world')
archive.readFile('hello.txt').then(str => {
  console.log(str) // => 'world'
})

// Get the URL of the archive or files
archive.getURL() // => 'dat://{hash}/'
archive.getURL('hello.txt') // => 'dat://{hash}/hello.txt'

// Write new versions
archive.writeCheckpoint('1.0.0')
  .then(() => archive.writeFile('hello.txt', 'web!!'))
  .then(() => archive.writeCheckpoint('1.0.1'))

// Get a versioned URL for the archive or files
archive.getURL('@1.0.0') // => 'dat://{hash}/@1.0.0'
archive.getURL('hello.txt@1.0.1') // => 'dat://{hash}/hello.txt@1.0.1'

// Serve the archive on the network
// (by default, the archive is not served)
archive.serve()
```

---

### Permissions 

This API is only available to apps served over `dat://`.
By default, any `dat://` app can read other dat-archives via HTML embeds, Ajax, or the `dat` read commands.

To write and upload archives, the app must include a `dat.json` manifest file with the appropriate permissions specified.
The user will be prompted whether to allow these permissions.

An example manifest:

```json
{
  "title": "My App",
  "description": "A simple example application",
  "permissions": ["datWrite", "datUpload"]
}
```

The `dat` permissions include the following:

 - `datWrite`: Can use createArchive, writeFile, writeCheckpoint, and other write methods. 
 - `datUpload`: Can use serve and unserve.

They will be presented to the user as the following requests:

 - `datWrite`: "Save files to your hard-drive"
 - `datUpload`: "Serve files on the network" 

---

### Disk Usage and Quotas

Archives are either permanent or temporary.
Archives that are created or opened via `dat` are permanent.
All other archives (downloaded by browsing, HTML embeds, or Ajax) are temporary and may be automatically deleted.
A permanent archive can be made temporary by calling `dat.deleteArchive()` on it, and a temporary archive can be made permanent by calling `dat.openArchive()` on it.

Behind the scenes, archives have "claims" against them by applications.
Calling `openArchive()` adds a claim by the calling app, while `deleteArchive()` removes that claim.
An archive with no claims is temporary, and subject to cleanup.

By default, apps are limited to 100MB of storage.
Their claimed archives - that is, archives that are created or opened by `dat` - count against this quota.
When the limit is reached, the user will be prompted to allow more disk-usage.
Until this is granted, all writes will fail, and all downloads will pause.
Files that are downloaded by Ajax or HTTP embeds do not count against this quota.

---

### Versioning

Dat Archives retain a log of all changes to the archive, which is accessible via `getHistory()`.
By default, only the latest versions of the files are retained.

If an archive is created with `versioned: true` specified, then the archive's `getCheckpoints()` and `writeCheckpoint()` methods will be made available.
When a checkpoint is written, the state of the archive is captured, allowing the files to be restored from the checkpoint.

Checkpoint names must be unique and cannot be reused.
It's recommended that you follow [semantic versioning](http://semver.org/), but this is not required.

---

### Networked Archives

All dat archives have URLs and can be distributed over the network.

By default, the archives are offline.
They can be shared between apps on your computer using the URL, but they are not accessible from outside your device.
An archive must have `.serve()` called to be network-accessible.

An archive which is opened from the network is downloaded and stored locally, and then updated in the background.
The archive's contents may not always be findable on the network.
The connection may fail, or the server could go offline.
This will manifest as timeouts to the read calls.
You can configure the timeout length in the call arguments.

---

### Special Files

The `dat.json` file is special, and can not be read or written by the application.
It is a manifest file that includes metadata and configuration.

---

### Toplevel Methods

{% include api-reference.html items=site.data.apis.dat.toplevel_methods %}

---

### `DatArchive` Properties

{% include api-reference.html items=site.data.apis.dat.datarchive_properties %}

---

### `DatArchive` Methods

{% include api-reference.html items=site.data.apis.dat.datarchive_methods %}