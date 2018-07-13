---
title: Write site files
section: guides
sectionTitle: Guides
order: 7
---


The [DatArchive API](/docs/apis/dat.html) provides a simple set of APIs to write files, create directories, and delete data.

<figcaption class="code">create a writable dat archive</figcaption>
```js
var archive = await DatArchive.create({title: 'My writable dat', prompt: false})
```

## Writing files and folders

The [mkdir() method](/docs/apis/dat.html#mkdir) creates new folders.
It will throw an error if a file/folder already exists at the target, or if no parent folder exists.

<figcaption class="code">create folders</figcaption>
```js
await archive.mkdir('/stuff')
```

The [writeFile() method](/docs/apis/dat.html#writefile) writes files.
It accepts an encoding as its third parameter.

<figcaption class="code">write files</figcaption>
```js
await archive.writeFile('/hello.txt', str, 'utf8')
await archive.writeFile('/beaker.png', pngBase64, 'base64')
await archive.writeFile('/beaker.png', pngHex, 'hex')
await archive.writeFile('/beaker.png', pngArrayBuffer, 'binary')
```

If the encoding is omitted, then 'utf8' will be assumed for strings and 'binary' will be assumed for ArrayBuffers.

<figcaption class="code">write files (default encoding)</figcaption>
```js
await archive.writeFile('/hello.txt', str)
await archive.writeFile('/beaker.png', pngArrayBuffer)
```

## Deleting files and folders

The [rmdir() method](/docs/apis/dat.html#rmdir) deletes folders.
It will fail if the folder is not empty.

<figcaption class="code">delete a folder</figcaption>
```js
await archive.rmdir('/stuff')
```

The [unlink() method](/docs/apis/dat.html#unlink) deletes files.

<figcaption class="code">delete a file</figcaption>
```js
await archive.unlink('/hello.txt')
```

### Recursive deletes

You can delete non-empty folders by specifying the `recursive` option.

<figcaption class="code">delete a folder and all of its contents</figcaption>
```js
await archive.rmdir('/stuff', {recursive: true})
```

## Copying, moving, and renaming

The [copy() method](/docs/apis/dat.html#copy) copies files and folders.
If the folder is not empty, it will copy all of its contents.

<figcaption class="code">copy files and folders</figcaption>
```js
await archive.copy('/stuff', '/stuff-backup')
await archive.copy('/hello.txt', '/goodbye.txt')
```

The [rename() method](/docs/apis/dat.html#rename) moves/renames files and folders.
If the folder is not empty, it will move all of its contents.

<figcaption class="code">rename files and folders</figcaption>
```js
await archive.rename('/stuff', '/stuff-backup')
await archive.rename('/hello.txt', '/goodbye.txt')
```

