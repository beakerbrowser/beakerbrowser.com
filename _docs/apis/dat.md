---
title:    Dat API
category: Web APIs
order:    4
---

<div class="card">
  <p><strong>Summary.</strong> Read and write versioned files to sites on the user's local hard-drive, and share the sites over the network.</p>
</div>


**Note**

- Only apps served over dat:// are able to access this API.
- <i class="fa fa-flask"></i> This API is under development and subject to change.

<hr class="nomargin">

### Example usage

Dat sites can be used to save data locally for an application, or to publish on the network.

```javascript
// Create a new site
var datUrl = await dat.createSite({ title: 'My Dat' })
datUrl // => 'dat://{hash}/'

// Read/write files
await dat.writeFile(datUrl + 'hello.txt', 'world')
var str = await dat.readFile(datUrl + 'hello.txt')
console.log(str) // => 'world'
```

<hr class="nomargin">

### Permissions 

This API is only available to apps served over `dat://`.
By default, any `dat://` app can read other dat-sites via HTML embeds, Ajax, or the `dat` read commands.

An app can write to sites that it created.
The user will be prompted to confirm permission to:

 1. Create a new dat site
 2. Modify a dat site created by another site

The user must be the owner of a dat site to modify it.

<hr class="nomargin">

### Disk usage and quotas

Sites are either permanent or temporary.
Sites that are created via the `dat` api are permanent.
All other sites (downloaded by browsing, HTML embeds, or Ajax) are temporary and may be automatically deleted.
A permanent site can be made temporary by calling `dat.deleteSite()` on it.

By default, sites are limited to 100MB of storage.
When the limit is reached, the user will be prompted to allow more disk-usage.
Until this is granted, all writes will fail.

<hr class="nomargin">

### Versioning

Dat Sites retain a log of all changes to the archive, which is accessible via `getHistory()`.
By default, only the latest versions of the files are retained.
When a checkpoint is written, the files' contents are captured and retained.

Checkpoint names must be unique and cannot be reused.
It's recommended that you follow [semantic versioning](http://semver.org/), but this is not required.

<hr class="nomargin">

### Networking

All dat sites have URLs and can be distributed over the network.

An site which is opened from the network is downloaded and stored locally, and then updated in the background.
The site's contents may not always be findable on the network.
The connection may fail, or the server could go offline.
This will manifest as timeouts to the read calls.
You can configure the timeout length in the call arguments.

<hr class="nomargin">

### Special files

The `dat.json` file is special, and can not be read or written directly by the application.
It is a manifest file that includes metadata and configuration.

<hr class="nomargin">

### Toplevel methods

{% include api-reference.html items=site.data.apis.dat.toplevel_methods %}
