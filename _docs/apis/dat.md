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

By default, any `dat://` app can read other dat-sites via HTML embeds, Ajax, or the `DatArchive` read commands. An app can also default write to sites that it created. The user will be prompted to confirm permission to:

 1. Create a new dat site
 2. Modify a dat site created by another site

The user must be the owner of a dat site to modify it.

### Disk usage and quotas

Dat sites are either permanent or temporary. Sites that are created by the user, or which are explicitly saved, are permanent. All other sites (downloaded by browsing, HTML embeds, or Ajax) are temporary and may be automatically deleted.

By default, sites are limited to 100MB of storage. In the future, this will be expandable by user action. When the limit is reached, all writes will fail.

### Special files

The `dat.json` file is special, and can not be written directly by the application. It is a manifest file that includes metadata and configuration.

---

## Toplevel methods

{% include api-reference.html items=site.data.apis.dat.toplevel_methods %}

---

## DatArchive instance attributes and methods

{% include api-reference.html items=site.data.apis.dat.instance_methods %}
