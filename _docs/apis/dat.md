---
title:    Dat API
category: Web APIs
order:    3
---

<div class="card">
  <p><strong>Summary.</strong> Read and write versioned files to archives on the user's local hard-drive, and share the archives over the network.</p>
  <p><i class="fa fa-flask"></i> This API is under development and subject to change.</p>
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
    </ul>
  </li>
</ul>

<hr class="nomargin">

### Example Usage

Dat archives can be used to save data locally for an application, or to publish on the network.

```javascript
// Create a new archive
var archiveURL = dat.createArchive()
archiveURL // => 'dat://{hash}/'

// Read/write files
dat.writeFile(archiveURL + 'hello.txt', 'world')
dat.readFile(archiveURL + 'hello.txt').then(str => {
  console.log(str) // => 'world'
})

// Write new versions
dat.writeCheckpoint(archiveURL, '1.0.0')
  .then(() => dat.writeFile(archiveURL + 'hello.txt', 'web!!'))
  .then(() => dat.writeCheckpoint(archiveURL, '2.0.0'))

// Serve the archive on the network
// (by default, the archive is not served)
dat.serve(archiveURL)
```

<hr class="nomargin">

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

<hr class="nomargin">

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

<hr class="nomargin">

### Versioning

Dat Archives retain a log of all changes to the archive, which is accessible via `getHistory()`.
By default, only the latest versions of the files are retained.
When a checkpoint is written, the files' contents are captured and retained.

Checkpoint names must be unique and cannot be reused.
It's recommended that you follow [semantic versioning](http://semver.org/), but this is not required.

<hr class="nomargin">

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

<hr class="nomargin">

### Special Files

The `dat.json` file is special, and can not be read or written by the application.
It is a manifest file that includes metadata and configuration.

<hr class="nomargin">

### Toplevel Methods

{% include api-reference.html items=site.data.apis.dat.toplevel_methods %}