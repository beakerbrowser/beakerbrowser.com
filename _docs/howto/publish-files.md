---
title:    Publish files
category: Get Started
order:    3
---

<small>Prerequisite: [Create a site](/docs/howto/create-a-site.html)</small>

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
? Publish? (y/N)
```

Press `y` and enter, and you should see this:

```bash
2 files (332 B)
1 added, 0 updated
```

Your site now says "Hello World" when you visit it in Beaker.

Using this flow, you can add many more files, and update the existing files as well.

---

Next: [Host from home](./host-from-home.html)