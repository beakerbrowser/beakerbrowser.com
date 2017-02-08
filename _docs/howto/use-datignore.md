---
title:    Use .datignore
category: Howto
order:    3
---

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

---

Next: [The site manifest](./site-manifest.html)