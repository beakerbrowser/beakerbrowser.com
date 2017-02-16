---
title:    Work on a site
category: Howto
order:    1
---

In the directory of the [site you created](/docs/howto/create-a-site.html), run these commands:

```bash
echo "<h1>Hello, world</h1>" > index.html
bkr publish
```

You'll see similar output to this:

```bash
Running a diff...
dat://344c140462779e2737987c706e16840662a9deafa620996bb6638058b5fa4c07/

1 new file, 0 updates.

    new file:  /Users/paulfrazee/mysite/index.html

Publishing dat://344c14..07
? Publish? (y/N) y
2 files (332 B)
1 added, 0 updated
```

Your site now says "Hello World" when you visit it in Beaker.

Using this flow, you can add many more files, and update the existing files as well.

### Live reloading

Development will be slow if you have to manually publish files every time you make a change. To solve this, use `bkr dev` and live-reloading.

In a working directory, run the following command:

```bash
bkr dev
```

You'll see output similar to this:

```bash
  Building '/Users/paulfrazee/mysite'...
  Ready. Sharing at:

  dat://76cb2b757c9707fea78b38e667aa58b0a1df72defb303d97a50af515c6d0ecc2
```

This creates a *temporary* dat site which will watch the source directory and automatically publish changes. You can not share this dat, and it will be automatically deleted when you close `bkr dev`.

Next, turn on live-reloading by clicking the <span class="fa fa-bolt"></span> icon in the URL bar.

<figure>
  <img class="bordered" src="/img/screenshot-live-reload-btn.png">
  <figcaption>Turn on live-reloading.</figcaption>
</figure>

Now, as you make changes, the page will automatically refresh for you. When you're done, close `bkr dev` and publish the updated site.

```bash
$ bkr publish
Running a diff...
dat://344c140462779e2737987c706e16840662a9deafa620996bb6638058b5fa4c07/

0 new files, 1 update.

    updated file:  /Users/paulfrazee/mysite/index.html

Publishing dat://344c14..07
? Publish? (y/N) y
2 files (332 B)
1 added, 0 updated
```

### Using .datignore

There are times when there are files in your working directory that you need to keep, but don't want to publish, as in this example:

```bash
bkr status

Running a diff...
dat://c8e29ae95586898986a8691b5804e7dddf4af624df22789fc5c9378a13667d63/

14 new files, 0 updates.

    new file:  /Users/paulfrazee/mysite/.DS_Store
    new file:  /Users/paulfrazee/mysite/dat.json
    new file:  /Users/paulfrazee/mysite/index.html
    new file:  /Users/paulfrazee/mysite/index.html~
    new file:  /Users/paulfrazee/mysite/node_modules/left-pad/index.js
    new file:  /Users/paulfrazee/mysite/node_modules/left-pad/package.json
```

All I want to publish, in this case, is the `dat.json` and `index.html`. To solve this, write a `.datignore` file to specify which files should not be included:

```bash
echo "\
.DS_Store
node_modules
*~" > .datignore
```

Now we'll only publish what we want:

```bash
bkr status

Running a diff...
dat://c8e29ae95586898986a8691b5804e7dddf4af624df22789fc5c9378a13667d63/

3 new files, 0 updates.

    new file:  /Users/paulfrazee/mysite/.datignore
    new file:  /Users/paulfrazee/mysite/dat.json
    new file:  /Users/paulfrazee/mysite/index.html
```

The rules of .datignore are the same as .gitignore or .npmignore.