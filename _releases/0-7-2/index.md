---
version: 0.7.2
releaseDate: June 5, 2017
size: 61.2 MB
layout: release
images: [thumb1.png, thumb2.png]
---

<h2>Self-mutating websites<span class="tag new">new</span></h2>

Beaker now allows applications to modify their own files using the [DatArchive API](https://beakerbrowser.com/docs/apis/dat.html). This enables a model for simple, self-contained web apps such as wikis and todo lists. This decision is part of an [ongoing security discussion](https://github.com/beakerbrowser/beaker/issues/483). We'll blog about this soon.

<h2>Dat Garbage Collector<span class="tag new">new</span></h2>

This is something you probably thought Beaker already did. Surprise! We just got around to it.

As you browse Dat sites, you collect a cache of files which stay on your disk so that reloads are fast. The "Garbage Collector" clears out those cache files after 5 days of no access. The collector does not delete files of dats that the user has saved to their library.

<h2>Dat picker API<span class="tag new">new</span></h2>

Thanks to [@taravancil](https://github.com/taravancil), we now have an API for selecting an archive from the user's library, using a modal dialog. Think of this like the file-picker, for Dat archives. It includes the ability to create a new archive, if the user chooses.

Example usecase: a text editor would use this API to prompt the user for the Dat they want to edit.

```js
var archive = await DatArchive.selectArchive({
  title: "Select an archive",
  buttonLabel: "Submit",
  filters: {isOwner: true}
})
```

<h2>Fixes and smaller updates</h2>

 - UI improvements to the Library page
 - Fix: [Don't let the permissions prompt cause Dat API operations to timeout](https://github.com/beakerbrowser/beaker/pull/496)
 - [Add support for HTTP sites in beaker://view-source](https://github.com/beakerbrowser/beaker/pull/493)
 - [Add bulk delete to the library](https://github.com/beakerbrowser/beaker/pull/479)
 - Fix: [Handle publishing large files without UI errors](https://github.com/beakerbrowser/beaker/issues/476)
 - [Slugify folder names in the ~/Sites directory](https://github.com/beakerbrowser/beaker/issues/477)
 - [Track the staging-area size less ignored files](https://github.com/beakerbrowser/beaker/issues/471)
 - [Add support for HTTP Basic Auth](https://github.com/beakerbrowser/beaker/pull/475)