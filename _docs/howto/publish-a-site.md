---
---

TODO REMOVE ME

After downloading Beaker, install the [bkr command-line tool](/docs/howto/use-bkr.html):

```
npm install -g bkr
```

You can do everything in this guide from Beaker's builtin GUI, but we'll use the CLI.

### Create the domain

Make sure Beaker is running, then run these commands:

```bash
~/ mkdir ~/my-site
~/ bkr init ~/my-site

# some questions will be asked

Created new site
dat://fdad0febf3ca58a7d115c622218838b48c3f093b33fe2798010c94bb7847e880/ # your URL will differ

```

This URL is now hosted from your device.
It can be shared with anyone in the world.

### Publish changes

Let's add an index.html:

```bash
~/my-site echo "<h1>Hello, world</h1>" > index.html
~/my-site bkr publish 1.0.0

Publishing 1.0.0 of dat://fdad0f..80
? Is this ok? Yes

5 files (821 B)
2 added, 0 updated
```

Open the site and you'll see your page:

<img src="/img/getting-started-screen-helloworld.png" class="bordered">

### Start a dev server

Publishing with bkr is similar to publishing on NPM.
It updates the site's permanent changelog, and writes a new version.

If you want to work on a site without publishing, you can create a temporary dat using the `dev` command.
This dat will stay in sync with the folder.

```bash
~/my-site bkr dev

  Building '/Users/bob/my-site'...
  Ready. Sharing at:

  dat://f53bb36ba6b49e2f55faadba44192c03357a57812d730f1974a422ff91057d7b # again, your url will differ
```

When you close `bkr dev`, the temporary site will be deleted.

### Turn on live reloading

While you work, it can be convenient to turn on live reloading in Beaker.
This can be done by the dropdown menu at the top right:

<img src="/img/getting-started-screen-livereload.png" class="bordered">

Now when you make changes, the page will automatically reload itself.

```bash
~/my-site echo "<p>How are you?</p>" >> index.html
```