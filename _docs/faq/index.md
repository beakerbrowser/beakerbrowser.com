---
title: Help & FAQ
section: faq
---

Have a question that isn't answered here? [Open an issue on GitHub](https://github.com/beakerbrowser/beakerbrowser.com) or tweet at [@BeakerBrowser](https://twitter.com/beakerbrowser).

## When I visit a `dat://` URL in Beaker, does Beaker download the entire website?

No. Beaker downloads files on-demand.

For example, if a website has a file at `/images/cat.jpg`, you won't download that file until you navigate to `/images/cat.jpg`, the file is loaded in an `<img>` tag, or in another request, i.e., with the [`DatArchive` APIs](/docs/apis/dat).

## Do visitors to peer-to-peer websites seed its files?

Yes, temporarily. When you visit a `dat://` URL in Beaker, you temporarily
re-upload or *seed* whichever files you've downloaded from the website. This
help the website's author keeps the website online.

You can also explicitly choose to seed a website's files for a longer period:

<img src="/img/docs/tour/seeding-menu.png" />

If you accidentally visit a website with content that you don't want to seed,
you can purge the files from your computer in
[Beaker's network settings](beaker://settings#dat-network-activity).

{% include seeding-aside.html %}

## Is the Dat network anonymous?

**No! Dat is not anonymous or private.**

When you visit or seed a `dat://` website, other visitors can see your IP address. You should not visit a `dat://` website with the expectation that you can share or view its files with anonymity.

<!-- TODO add a bit about Tor or i2p here? -->

## Are `dat://` files encrypted?

Yes. Like in HTTPS, the connection is encrypted. Only people who know the URL for a given `dat://` website can decrypt and view its files.

## Who can access `dat://` websites?

When you create a `dat://` website with Beaker, no one will be able to see your website until you share the URL. Only people who know the site's URL will be able to visit it.

## Will my website stay online when I turn Beaker off?

It depends. When you close Beaker, *you* are no longer hosting your website's
files, but previous visitors may still be. To guarantee that your files stay
online, there are a few options:

- Ask your friends to help seed your website's files
- Share your website's URL with a seeding service like [Hashbase](https://hashbase.io)
- Or if you're feeling ambitious, run a your own seeding server using [`homebase`](https://github.com/beakerbrowser/homebase)

## Is there an iOS or Android Beaker client?

Not yet!

## Will peer-to-peer protocols like Dat ever be adopted by other browsers?

We hope so!

## How is Beaker built?

Beaker is built with [Electron](https://electronjs.org), which is built on
top of Chromium.