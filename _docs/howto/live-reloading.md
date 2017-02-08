---
title:    Live-reloading
category: Howto
order:    2
---

Development will be slow if you have to [manually publish files](./publish-files.html) every time you make a change. To solve this, use `bkr dev` and live-reloading.

In a [working directory](./work-on-a-site.html), run the following command:

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

Now, as you make changes, the page will automatically refresh for you. When you're done, close `bkr dev` and [publish the updated site](./publish-files.html).

---

Next: [Use .datignore](./use-datignore.md)