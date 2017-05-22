---
title: Web APIs by example
section: webAPIs
sectionTitle: Web APIs
order: 2
---

This is a collection of snippets to help you get familiar with Beaker's APIs.
You can read about the APIs here: [dat](./dat.html), [permissions](./permissions.html)

### Create a site

```js
var datUrl = await dat.createSite({
  title: 'My Site',
  description: 'Where I put my files'
})
console.log(datUrl)
// => dat://da2ce4..dc/
```


### Write a file

```js
var fileUrl = datUrl + '/hello.txt'
await dat.writeFile(fileURL, 'world')
```


### Read a file

```js
var fileUrl = datUrl + '/hello.txt'
var helloTxt = await dat.readFile(fileURL)
console.log(helloTxt)
// => 'world'
```


### Create a subdirectory

```js
var dirUrl = datUrl + '/subdir'
var exists = await dat.exists(dirUrl)
if (!exists) await dat.createDirectory(dirUrl))
```


### List files

```js
var files = await dat.listFiles(datUrl)
console.log(files)
/* =>
{
  index.html: {mtime: ...},
  subdir: {mtime: ...}
}
*/
```


### Check if a file exists

```js
var fileUrl = datUrl + '/subdir/hello.txt'
var exists = await dat.exists(fileUrl)
console.log(exists) // => true
```


### Get the last-modified time of a file

The `ctime` is the file creation-time, and `mtime` is the last-modified time.
Note: the ctime and mtime may not be correct.

```js
var fileUrl = datUrl + '/subdir/hello.txt'
var fileInfo = await dat.stat(fileUrl)
console.log(fileInfo)
/* => {
  type: 'file',
  name: 'subdir/hello.txt',
  ctime: 1477267871000,
  mtime: 1477267871000,
  ...
} */
```


### Read a binary file

```js
var picUrl = datUrl + '/picture.png'

// arraybuffer:
var arrayBuf = await dat.readFile(picUrl)
var blob = new Blob([arrayBuf], {type: 'image/png'})
var src = URL.createObjectURL(blob)
document.querySelector('img').src = src

// base64:
var base64 = await dat.readFile(picUrl, 'base64')
var src = 'data:image/png;base64,'+base64
document.querySelector('img').src = src
```


### Write a binary file

```js
var orgUrl = datUrl + '/picture.png'
var dstUrl = datUrl + '/picture_copy.png'
var res = await fetch(orgUrl)

// arraybuffer:
var arrayBuf = await res.arrayBuffer()
await dat.writeFile(dstUrl, arrayBuf)

// base64:
var base64 = convertBufToBase64(arrayBuf)
await dat.writeFile(dstUrl, base64, 'base64')
```


### Request network access to a host

```js
var res = await navigator.permissions.request({
  name: 'network',
  hostname: 'github.com'
})
console.log(res.status)
// => 'granted'
```


### Request network access to all hosts

```js
var res = await navigator.permissions.request({
  name: 'network',
  hostname: '*'
})
console.log(res.status)
// => 'granted'
```