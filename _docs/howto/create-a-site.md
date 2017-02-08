---
title:    Create a site
category: Get Started
order:    2
redirect_from:
 - /docs/howto/publish-a-site.html
---

<small>Prerequisite: [Install Beaker and Bkr](/docs/howto/install.html)</small>

Make sure Beaker is running, then run these commands:

```bash
mkdir ~/mysite
cd ~/mysite
bkr init
```

You will be asked to give a title, description, and author.

```bash
Initializing /Users/paulfrazee/mysite

This utility will walk you through creating a dat.json file.
It only covers the most common items, and tries to guess sensible defaults.

? title: mysite
? description: My new site!
? author: paulfrazee

About to write /Users/paulfrazee/mysite/dat.json

{
  "title": "mysite",
  "description": "My new site!",
  "author": "paulfrazee"
} 

? Is this ok? Yes
```

When it is done, you will receive a URL like this:

```bash
Created new site
dat://ff34725120b2f3c5bd5028e4f61d14a45a22af48a7b12126d5d588becde88a93/ # your URL will differ
```

This is your site's URL. You can open it in Beaker, and you'll see the manifest you created during init.

---

Next: [Publish files](./publish-files.html)