---
title: 'Example: Write site files'
section: guides
sectionTitle: Guides
order: 7
---

The [DatArchive API](/docs/apis/dat.html) provides a simple set of APIs to write files and create directories. After instantiating an archive instance, you can call `mkdir()` and `writeFile()`.

First, [create a new Dat site](/docs/using-beaker/create-a-site.html) using this [<i class="fa fa-file-archive-o"></i> template.zip](/docs/tutorials/template.zip). Open the site, then open its devtools and paste this code into the console:

<figcaption class="code">snippet</figcaption>
```js
DatArchive.create({title: 'Write site files tutorial'})
  .then(archive => {
    localStorage.targetDatURL = archive.url
    console.log('Created and saved!')
  })
```

When you run this snippet, you’ll see the following dialog appear. Click “Create site”:

<figure>
<img data-src="/img/docs/tut-write-site-files/modal.jpg" >
<figcaption>Click "Create site"</figcaption>
</figure>

You should see this appear in your devtools console:

<figure>
<img data-src="/img/docs/tut-write-site-files/create-site.jpg" >
<figcaption>The output of <code>DatArchive.create()</code></figcaption>
</figure>

## Setup

We now have a Dat which our site can modify. In `js/index.js`, add the following code. This will create an instance of the Dat we just created.

<figcaption class="code">js/index.js</figcaption>
```js
async function main () {
  // create an archive instance for our created dat
  if (!localStorage.targetDatURL) {
    return
  }
  var archive = new DatArchive(localStorage.targetDatURL)
  console.log(await archive.readdir('/'))
}
```

Refresh the page, and you should see an empty array logged in your console:

<figure>
<img data-src="/img/docs/tut-write-site-files/readdir.jpg" >
<figcaption>The output of <code>archive.readdir('/')</code></figcaption>
</figure>

## `mkdir`

As you can see, the archive is empty. Let’s change that by adding a folder. Add the following snippet to the end of your main function:

<figcaption class="code">js/index.js</figcaption>
```js
try {
  await archive.mkdir('/stuff')
  console.log('Created /stuff')
} catch (e) {
  console.log('Failed:', e)
}
```

If you refresh the page, you should see this:

<figure>
<img data-src="/img/docs/tut-write-site-files/mkdir.jpg" >
<figcaption>The output of <code>archive.mkdir('/stuff')</code></figcaption>
</figure>

## `writeFile (string)`

Now let’s add a file. Add this to the end of your main function:

<figcaption class="code">js/index.js</figcaption>
```js
await archive.writeFile('/hello.txt', 'world')
console.log('Wrote', archive.url + '/hello.txt')
```

If you refresh the page, you should see something like this:

<figure>
<img data-src="/img/docs/tut-write-site-files/writefile.jpg" >
<figcaption>The output of <code>archive.writeFile()</code></figcaption>
</figure>

If you open that URL, you’ll see this:

<figure>
<img data-src="/img/docs/tut-write-site-files/writefile-view.png" >
<figcaption>The content of hello.txt</figcaption>
</figure>

## `writeFile (binary)`

Now let’s try a binary file. Add this to your main function:

<figcaption class="code">js/index.js</figcaption>
```js
var thisArchive = new DatArchive(window.location.toString())
var beakerPng = await thisArchive.readFile('/img/beaker.png', 'base64')
await archive.writeFile('/beaker.png', beakerPng, 'base64')
console.log('Wrote', archive.url + '/beaker.png')
```

If you refresh the page, you should see something like this:

<figure>
<img data-src="/img/docs/tut-write-site-files/writefile2.jpg" >
<figcaption>The output of <code>archive.writeFile()</code></figcaption>
</figure>

If you open that URL, you’ll see this:

<figure>
<img data-src="/img/docs/tut-write-site-files/writefile2-view.jpg" >
<figcaption>The content of logo.png</figcaption>
</figure>

## Summary

For review, here is our final `js/index.js`:

<figcaption class="code">js/index.js</figcaption>
```js
async function main () {
  // create an archive instance for our created dat
  if (!localStorage.targetDatURL) {
    return
  }
  var archive = new DatArchive(localStorage.targetDatURL)
  console.log(await archive.readdir('/'))

  // add the /stuff folder
  try {
    await archive.mkdir('/stuff')
    console.log('Created /stuff')
  } catch (e) {
    console.log('Failed:', e)
  }

  // write /hello.txt
  await archive.writeFile('/hello.txt', 'world')
  console.log('Wrote', archive.url + '/hello.txt')

  // write /logo.png
  var thisArchive = new DatArchive(window.location.toString())
  var logoPng = await thisArchive.readFile('/img/logo.png', 'base64')
  await archive.writeFile('/logo.png', logoPng, 'base64')
  console.log('Wrote', archive.url + '/logo.png')
}

main()
```

Now you can create folders and write files. This is great, but so far you’ve only made those changes to the staging area. Next, [read about how to commit those changes to the archive.](/docs/tutorials/diff-commit-revert.html)