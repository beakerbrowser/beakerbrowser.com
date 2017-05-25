---
title: DatArchive API
section: webAPIs
sectionTitle: Web APIs
order: 3
---

<p class="doc-summary">
 Read and write versioned files to sites on the user’s local hard drive, and share the sites over the network.
</p>

**Note**

- Only apps served over `dat://` are able to access this API.
- <i class="fa fa-flask"></i> Indicates that this API is under development and subject to change.

---

## About the API

### Permissions

By default, any `dat://` app can read other Dat sites via HTML embeds, Ajax, or the `DatArchive` read commands. By default, a Dat app is given permission to write to sites that it created. The user will be prompted to give permission to:

 1. Create a new Dat site
 2. Modify a Dat site created by another site

The user must be the owner of a Dat site to modify it.

### Disk usage and quotas

Dat sites are either permanent or temporary. Sites that are created by the user, or which are explicitly saved, are permanent. All other sites (downloaded by browsing, HTML embeds, or Ajax) are temporary and may be automatically deleted.

By default, sites are limited to 100MB of storage. In the future, this will be expandable by user action. When the limit is reached, all writes will fail.

### Special files

The `dat.json` file is a special manifest file that includes metadata and configuration. It cannot be written directly by the application.

---

## Toplevel methods

{% include api-reference.html items=site.data.apis.dat.toplevel_methods %}

---

## DatArchive instance attributes and methods

{% include api-reference.html items=site.data.apis.dat.instance_methods %}
