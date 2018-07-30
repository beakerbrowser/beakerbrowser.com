---
title: DatArchive API
section: webAPIs
sectionUrl: /docs/apis
sectionTitle: Web APIs
sectionSubtitle: Explore Beaker's Web APIs for reading and writing the peer-to-peer filesystem
order: 3
---

<!-- TODO
- Only apps served over `dat://` are able to access this API.
- <i class="fa fa-flask"></i> Indicates that this API is under development and subject to change.
-->

<p class="accent">
	The <code>DatArchive</code> API is Beaker's interface for reading and writing the Dat peer-to-peer filesystem. Websites and applications can use the <code>DatArchive</code> API to create, write, and read Dat archives.
</p>

## Permissions

### Read permissions

By default, any `dat://` website or application can read other `dat://` pages
with HTML embeds, Ajax, or the `DatArchive` read interfaces.

### Write permissions

By default, `dat://` pages are only granted write permission for other `dat://` pages that it created.

The user will be prompted to grant permission when a `dat://` page attempts to:

 1. Create a new Dat archive
 2. Modify a `dat://` page that was created by a different `dat://` origin

Additionally, the user must be the owner of a given Dat archive in order to
modify it.

#### Special files

The [`dat.json` file](/docs/apis/manifest.html) is a special file that specifies
metadata and configuration. It cannot be written directly using the `DatArchive`
API.

## Disk usage

How Beaker manages a Dat archive's disk usage depends on whether the user owns
the Dat archive, has chosen to seed the archive's files, or is simply visiting
and browsing the archive's files.

If the user owns a given Dat archive or has chosen to seed its files, Beaker
keeps those files on the local disk. All other `dat://` websites, applications,
and files are kept on the local disk temporarily, and will be automatically
deleted.

Files that are temporarily cached after visiting a `dat://` page can also
be manually purged in the [Beaker settings page](beaker://settings#dat-network-activity).

### Per-origin quotas

By default, each `dat://` origin is limited to 100MB of storage. In the future,
this limit will be configurable by user action.

When the 100MB limit is reached, all writes attempted
with the `DatArchive` API will fail.

## Constructor

{% include api-reference.html items=site.data.apis.dat.constructor %}

## Top-level methods

{% include api-reference.html items=site.data.apis.dat.toplevel_methods %}

## Properties

{% include api-reference.html items=site.data.apis.dat.properties %}

## Methods

{% include api-reference.html items=site.data.apis.dat.methods %}

## Events

{% include api-reference.html items=site.data.apis.dat.events %}

## Deprecated methods

{% include api-reference.html items=site.data.apis.dat.deprecated_methods %}
