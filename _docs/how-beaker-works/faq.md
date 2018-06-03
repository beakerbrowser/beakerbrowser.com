---
title: Frequently asked questions
section: howBeakerWorks
sectionTitle: How Beaker works
order: 2
---

Have a question that isn't answered here?
[Open an issue on GitHub](https://github.com/beakerbrowser/beakerbrowser.com)
or tweet at [@BeakerBrowser](https://twitter.com/beakerbrowser) and let us know.

## Peer-to-peer websites

### When I visit a `dat://` URL in Beaker, does Beaker download the entire website?

No. Beaker downloads files on-demand.

For example, if a website has a file at
`/images/cat.jpg`, you won't download that file until you navigate to
`/images/cat.jpg`, or the file is loaded in an `<img>` tag.

### Do visitors to peer-to-peer websites seed its files?

Yes, temporarily. When you visit a `dat://` URL in Beaker, you temporarily
re-upload or *seed* whichever files you've downloaded from the website. This
help the website's author keeps the website online.

You can also explicitly choose to seed a website's files for a longer period
with the seeding menu in the website's URL bar:

<figure>
  <img src="/img/screenshots/ui/seeding-menu.png" />
  <figcaption>Beaker's seeding menu</figcaption>
</figure>

If you accidentally visit a website with content that you don't want to seed,
you can purge the files from your computer in
[Beaker's network settings](beaker://settings#dat-network-activity).

## The Dat protocol

### What is a Dat archive?

A Dat archive is a bundle of files that can be shared on the Dat peer-to-peer
network. Dat archives are similar to torrents, but they're mutable and versioned.

In Beaker, Dat archives

I
They are similar to Torrents, except that they are changeable, versioned, and privately shareable. In Beaker, they act as websites.

[You can read more about the Dat protocol here.](/docs/how-beaker-works/dat-files-protocol.html)

### Is the Dat peer-to-peer network anonymous?

**No!**

Anyone who knows the URL for a `dat://` website can see the IP addresses of the
other peers in the network who are connected to the swarm for that website.

### What do Dat URLs look like?

Like this:

```
dat://54f74fe89d7779946343ec6db9618631e4dbf43bece2a125d0099103741963c9/
```

They work just like regular URLs, except that the "hostname" is a 64-character hex number. You can reference specific files by putting the path at the end:

```
dat://54f74fe89d7779946343ec6db9618631e4dbf43bece2a125d0099103741963c9/index.html
```

### How do I get a nice URL like `dat://beakerbrowser.com` for my website?


Beaker uses [dat-dns](https://github.com/datprotocol/dat-dns#spec) to issue DNS.
You can [with the DatHTTPD server](https://github.com/beakerbrowser/dathttpd).

### Is the Dat Protocol encrypted?

Yes, like in HTTPS, the connection is encrypted.
The URL itself is used to encrypt the connection; therefore, only people with whom
you have shared a URL can read the traffic.

### How do I view a specific version of a `dat://` website?

To view a `dat://` website at a given version, append <code>+{versionNumber}</code>
to the end of the site’s URL:

```
dat://beakerbrowser.com+4
````

### Who can see websites I publish with Beaker?

Your site is private by default. Dat URLs are effectively unguessable and are never sent over the network, so only people you share the URL with will be able to download your site’s files.

### How does a Dat site differ from a normal site?

Other than the difference in protocols, Dat sites are more tightly "sandboxed."
Without explicit permission, they are not allowed to access the network directly.
That means you can't embed YouTube videos, use Google Analytics, or make Ajax requests home.
This is to protect the privacy of users.

### Will my website stay online if I close Beaker or turn off my computer?

It depends. When you close Beaker, *you* are no longer hosting your website's
files, but previous visitors may still be. To guarantee that your files stay
online, there are a few options:

- Ask your friends to seed your website's files using seeding menu in the URL bar[#]
- Share your website's URL with a seeding service like [Hashbase](https://hashbase.io)
- Or if you're feeling ambitious, run a seeding server like [dathttpd](https://github.com/beakerbrowser/dathttpd)

### Is there an iOS or Android Beaker client?

Not yet!

### Who is allowed to change a Dat site?

When a site is created, a "key pair" is generated (literally, a pair of keys).
The "private" key gives you the power to change the site.
Beaker keeps that secret inside a database, on your device.
The second key, called the "public" key, gives other users the power to find and download the site.
The public key is used to create the site's URL.

Only the user with the private key can change the site.
If the private key is lost, the site can never be changed.

<div class="detailed-card warning">
  <div class="card-heading">Warning</div>
  <div class="card-body">
    <span class="icon fa fa-exclamation-triangle"></span>
    <div>
      Don't copy the private key onto multiple devices, except as a backup
      precaution. The Dat protocol doesn't yet have a way to handle conflicting
      updates, which might happen if you make changes from 2 devices.
    </div>
  </div>
</div>

### Can I browse HTTP/S sites with Beaker?

Yes. Beaker can browse `dat://`, `https://` and `http://` URLs.

### Will peer-to-peer protocols like Dat ever be adopted by other browsers?

We hope so!

### How is Beaker built?

Beaker is built with [Electron](https://electronjs.org), which is built on
top of Chromium.