---
title: 'Code: Listen for file changes'
section: tutorials
sectionTitle: Tutorials
order: 9
---

The [DatArchive API] provides a simple set of APIs to listen for changes to a file, whether the file is locally owned or remote. After instantiating an archive instance and making changes, you can call createFileActivityStream().

Start with the [site you created in the Writing site files tutorial]. Add the following code to the end of the main function:

```js
  var fileEvents = archive.createFileActivityStream()
  fileEvents.addEventListener('invalidated', e => console.log(e.path, 'invalidated'))
  fileEvents.addEventListener('changed', e => console.log(e.path, 'changed')
```

Refresh the page, then enter this snippet into the devtools console:

```js
var archive = new DatArchive(localStorage.targetDatURL)
archive.writeFile('/foo.txt', 'bar')
```

You should see this appear in your console:

[TODO screenshot]

The ‘changed’ event fires any time the file has been updated on your local disk. Notice, however, that the ‘invalidated’ event did not fire.

The ‘invalidated’ event fires any time a file has been updated by a remote author. It informs you that the file has been changed remotely, but that change has not yet been downloaded.

So, if an archive is local:

- Only ‘changed’ will fire, when the file changes.

But if an archive is remote:

- ‘invalidated’ will fire when the metadata update is downloaded
- ‘changed’ will fire when the new content is downloaded
