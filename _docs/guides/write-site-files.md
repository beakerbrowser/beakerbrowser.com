---
title: Write to a dat:// website
section: guides
sectionUrl: /docs/guides
sectionTitle: Guides
author: Paul Frazee
authorLink: https://pfrazee.hashbase.io
authorAvatar: /img/team/pfrazee.jpg
description: Learn how to write files using the DatArchive API by example
---

The [DatArchive API](/docs/apis/dat) provides a simple set of APIs to write files, create directories, and delete data.

To create a writable `dat://` website, first create a new `DatArchive` instance:

```js
var archive = await DatArchive.create({title: 'My website'})
```

## Writing files and folders

### `mkdir()`

The [mkdir() method](/docs/apis/dat#mkdir) creates new folders.
It will throw an error if a file/folder already exists at the target, or if no parent folder exists.

```js
await archive.mkdir('/stuff')
```

### `writeFile()`

The [writeFile() method](/docs/apis/dat#writefile) writes files. It accepts an encoding as its third parameter.

```js
await archive.writeFile('/hello.txt', str, 'utf8')
await archive.writeFile('/beaker.png', pngBase64, 'base64')
await archive.writeFile('/beaker.png', pngArrayBuffer, 'binary')
```

If the encoding is omitted, then 'utf8' will be assumed for strings and 'binary' will be assumed for ArrayBuffers:

```js
await archive.writeFile('/hello.txt', str)
await archive.writeFile('/beaker.png', pngArrayBuffer)
```

## Deleting files and folders

### `rmdir()`

The [rmdir() method](/docs/apis/dat#rmdir) deletes folders. It will fail if the folder is not empty.

```js
await archive.rmdir('/stuff')
```

### `unlink()`

The [unlink() method](/docs/apis/dat#unlink) deletes files.

```js
await archive.unlink('/hello.txt')
```

### Recursive deletes

You can delete non-empty folders by specifying the `recursive` option.

```js
// delete /stuff and all of its contents
await archive.rmdir('/stuff', {recursive: true})
```

## Copying, moving, and renaming

### `copy()`

The [copy() method](/docs/apis/dat#copy) copies files and folders. If the folder is not empty, it will copy all of its contents.

```js
await archive.copy('/stuff', '/stuff-backup')
await archive.copy('/hello.txt', '/goodbye.txt')
```

### `rename()`

The [rename() method](/docs/apis/dat#rename) moves/renames files and folders. If the folder is not empty, it will move all of its contents.

```js
await archive.rename('/stuff', '/stuff-backup')
await archive.rename('/hello.txt', '/goodbye.txt')
```

## Further reading

- [DatArchive API reference](/docs/apis/dat)
