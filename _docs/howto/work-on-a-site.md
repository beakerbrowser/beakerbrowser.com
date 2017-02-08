---
title:    Work on a site
category: Howto
order:    1
---

Beaker stores all Dat sites in an internal database. To work on a site, you "clone" it into a folder, then publish updates back into Beaker.

### How to clone

Create the folder you want to clone the site into, then run this command:

```bash
bkr clone <url> # give the url of the target site
```

You will see output similar to this:

```bash
Checking out dat://ff3472..93 into /Users/paulfrazee/mysite
7 files created
```

You can now edit the files and [publish changes](./publish-files).

### How to fork

If you do not own a site, you will see a prompt similar to this when you try to publish changes:

```bash
Running a diff...
dat://316a27810b2886a2b2cb8c9d0e57a0b1b07aa9f47a000c61de47e2f87b6cddfe
Cannot write: not the archive owner
```

To solve this, you must fork the site. "Forking" means to make a new copy at a new URL which you control.

```bash
bkr fork <url> # give the url of the target site
```

If you're in the directory of a site you want to fork, you don't need to give the url:

```bash
bkr fork
```

You will see output similar to this:

```bash
Forking dat://fdad0f..80, please be patient...

Checking out into /Users/pfrazee/mysite
2 files created
New url: dat://1322af7a09027ff2b80b250ae410e33873a788000066a9996365095838d02069
```

You can now make changes to the new site.

---

Next: [Live-reloading](./live-reloading.html)