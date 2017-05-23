---
title: 'Code: Write site files'
section: tutorials
sectionTitle: Tutorials
order: 7
---

The [DatArchive API](/docs/apis/dat.html) provides a simple set of APIs to write files and create directories. After instantiating an archive instance, you can call `mkdir()` and `writeFile()`.

First, [create a new Dat site](/docs/using-beaker/publishing-with-beaker.html) using this [<i class="fa fa-file-archive-o"></i> template.zip](/docs/tutorials/template.zip). Open the site, then open its devtools and paste this code into the console:

<figcaption class="code">snippet</figcaption>
```js
DatArchive.create({title: 'Write site files tutorial'})
  .then(archive => {
    localStorage.targetDatURL = archive.url
    console.log('Created and saved!')
  })
```

When you run this snippet, you’ll see the following dialog appear. Hit ‘Create site’:

<figure>
<img src="/img/docs/tut-write-site-files/modal.png" >
<figcaption>Click "Create site" on this modal</figcaption>
</figure>

You should see this appear in your devtools console:

<figure>
<img src="/img/docs/tut-write-site-files/create-site.png" >
<figcaption>The output of DatArchive.create()</figcaption>
</figure>

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

Refresh the page, and you should see this in your devtools:

<figure>
<img src="/img/docs/tut-write-site-files/readdir.png" >
<figcaption>The output of archive.readdir('/')</figcaption>
</figure>

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
<img src="/img/docs/tut-write-site-files/mkdir-success.png" >
<figcaption>The output of archive.mkdir('/stuff') on first load</figcaption>
</figure>

If you refresh the page again, you should see this:

<figure>
<img src="/img/docs/tut-write-site-files/mkdir-failure.png" >
<figcaption>The output of archive.mkdir('/stuff') on second load</figcaption>
</figure>

This is expected. After creating the folder, you can’t create it again. Now let’s add a file. Add this to the end of your main function:

<figcaption class="code">js/index.js</figcaption>
```js
await archive.writeFile('/hello.txt', 'world')
console.log('Wrote', archive.url + '/hello.txt')
```

If you refresh the page, you should see something like this:

<figure>
<img src="/img/docs/tut-write-site-files/writefile.png" >
<figcaption>The output of archive.writeFile()</figcaption>
</figure>

If you open that URL, you’ll see this:

<figure>
<img src="/img/docs/tut-write-site-files/writefile-view.png" >
<figcaption>The output of hello.txt</figcaption>
</figure>

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
<img src="/img/docs/tut-write-site-files/writefile2.png" >
<figcaption>The output of archive.writeFile()</figcaption>
</figure>

If you open that URL, you’ll see this:

<figure>
<img src="/img/docs/tut-write-site-files/writefile2-view.png" >
<figcaption>The output of logo.png</figcaption>
</figure>

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