---
title: Web APIs by example
section: webAPIs
sectionTitle: Web APIs
class: dark
---

This is a collection of snippets to help you get familiar with Beaker’s APIs.
You can read more about the APIs here: <a href="./dat.html">DatArchive</a>,
<a href="./permissions.html">permissions</a>.

<section markdown="1">

## Create a site

```js
var archive = await DatArchive.create({
  title: 'My Site',
  description: 'Where I put my files'
})
console.log(archive.url)
// => dat://da2ce4..dc/
```

</section>

<section markdown="1">

## Write a file

```js
await archive.writeFile('/hello.txt', 'world')
await archive.writeFile('/image.png', myArrayBuffer)
await archive.writeFile('/image.png', myBase64, 'base64')
```

</section>

<section markdown="1">

## Read a file

```js
var helloTxt = await archive.readFile('/hello.txt')
// => String
var imagePng = await archive.readFile('/image.png', 'binary')
// => ArrayBuffer
```

</section>

<section markdown="1">

## Create a directory

```js
await archive.mkdir('/subdir'))
```

</section>

<section markdown="1">

## List files

```js
var files = await archive.readdir('/')
console.log(files) // => ['index.html', 'js']
var files = await archive.readdir('/', {recursive: true})
console.log(files) // => ['index.html', 'js', 'js/index.js']
```

</section>

<section markdown="1">

## Check if a file exists

```js
try {
  var st = await archive.stat('/foo.txt')
  // does exist
} catch (e) {
  // does not exist
}
```

</section>

<section markdown="1">

## Get the last-modified time of a file

The `ctime` is the file creation-time, and `mtime` is the last-modified time.
Note: `ctime` and `mtime` can be edited by the file’s author and *may* be incorrect.

```js
var st = await archive.stat('/hello.txt')
console.log(st)
/* => {
  ctime: 1477267871000,
  mtime: 1477267871000,
  ...
} */
```

</section>

<section markdown="1">

## Read a binary file

```js
// arraybuffer:
var arrayBuf = await archive.readFile('/picture.png')
var blob = new Blob([arrayBuf], {type: 'image/png'})
var src = URL.createObjectURL(blob)
document.querySelector('img').src = src

// base64:
var base64 = await archive.readFile(picUrl, 'base64')
var src = 'data:image/png;base64,'+base64
document.querySelector('img').src = src
```

</section>

<section markdown="1">

## Write a binary file

```js
var orgUrl = archive.url + '/picture.png'
var res = await fetch(orgUrl)

// arraybuffer:
var arrayBuf = await res.arrayBuffer()
await archive.writeFile('/picture_copy.png', arrayBuf)

// base64:
var base64 = convertBufToBase64(arrayBuf)
await archive.writeFile('/picture_copy.png', base64, 'base64')
```

</section>

<section markdown="1">

## Request network access to a host

```js
var res = await navigator.permissions.request({
  name: 'network',
  hostname: 'github.com'
})
console.log(res.status)
// => 'granted'
```

</section>

<section markdown="1">

## Request network access to all hosts

```js
var res = await navigator.permissions.request({
  name: 'network',
  hostname: '*'
})
console.log(res.status)
// => 'granted'
```

</section>