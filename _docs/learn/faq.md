---
title: FAQ
redirect_from:
 - /docs/faq.html
---

Is your question not answered here?
**[Open an issue](https://github.com/beakerbrowser/FAQ/issues)** and let us know.

### What are archives?

Dat Archives are bundles of files that are shared in a Peer-to-Peer network.
They are similar to Torrents, except that they are changeable, versioned, and privately shareable.
In Beaker, they act as web-sites.

[You can read more about the Dat protocol here.](./dat.html)

### What do Dat URLs look like?

Like this:

```
dat://54f74fe89d7779946343ec6db9618631e4dbf43bece2a125d0099103741963c9/
```

They work just like regular URLs, except that the "hostname" is a 64-character hex number.
You can reference specific files by putting the path at the end.

### Can I use DNS to create short URLs?

Yes!
You can [with the DatHTTPD server](https://github.com/beakerbrowser/dathttpd).

### Is the network anonymous?

**No!**
This is very important to understand:
If any other user has the link to a Dat site, they'll be able to see
your requests for it, and they'll know your IP.
Browsing Dat sites is therefore not anonymous.

### Is the Dat Protocol encrypted?

Yes, like in HTTPS, the connection is encrypted.
The URL itself is used to encrypt the connection; therefore, only people with whom
you have shared a URL can read the traffic.

### How does a Dat site differ from a normal site?

Other than the difference in protocols, Dat sites are more tightly "sandboxed."
Without explicit permission, they are not allowed to access the network directly.
That means you can't embed YouTube videos, use Google Analytics, or make Ajax requests home.
This is to protect the privacy of users.

### Does the peer-to-peer network automatically host my content?

No, files are not hosted on the network automatically.
To make sure your files are available, you must setup a computer in the network to share them.

### Do I automatically host sites that I've visited or downloaded?

No. Beaker does not automatically rehost the sites you've visited.
If you want to rehost a site, you must [save it to your sites library](/docs/howto/host.html).

### Who is allowed to change a Dat site?

When a site is created, a "key pair" is generated (literally, a pair of keys).
The "private" key gives you the power to change the site.
Beaker keeps that secret inside a database, on your device.
The second key, called the "public" key, gives other users the power to find and download the site.
The public key is used to create the site's URL.

Only the user with the private key can change the site.
If the private key is lost, the site can never be changed.

<div class="detailed-card" data-title="Beware!">
  <div class="icon"><span class="fa fa-exclamation-triangle"></span></div>
  <div class="body">
    <p>Don't try to copy the private key onto multiple devices, except as a backup precaution.
    The Dat protocol doesn't yet have a way to handle conflicting updates, which might happen if you make changes from 2 devices.</p>
  </div>
</div>

### Can I browse regular HTTP/S sites?

Yes, Beaker browses the normal Web.

### Will peer-to-peer protocols ever be adopted by other browsers?

We hope so!

### Is Beaker built entirely from scratch?

No, it's a fork of the Chrome browser.
