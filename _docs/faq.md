---
title:    FAQ
order:    3
category: Documentation
---

### What are Archives?

Dat Archives are bundles of files that are shared in a Peer-to-Peer network.
They are similar to BitTorrents, except that they are changeable, versioned, and privately shareable.

[You can read more about Dat's protocol, Hyperdrive, here.](/docs/technology.html)

---

### What do Dat URLs look like?

Like this:

```
dat://54f74fe89d7779946343ec6db9618631e4dbf43bece2a125d0099103741963c9/
```

They work just like regular URLs, except that the "hostname" is a 64-character hex number.
You can reference specific files by putting the path at the end.

<div class="technical-explanation" data-title="Tech In-depth">
  <div class="icon"><span class="fa fa-info-circle"></span></div>
  <div class="body">
    <p>
      Every site has an ECC keypair which is used to sign the file-listing.
      The URL is the keypair's hex-encoded public key.
      This is how the Hyperdrive protocol verifies files from the network.
    </p>
  </div>
</div>

---

### Can I use DNS to create short URLs?

Yes!
You can [read the guide here](/docs/guides/dns.html). 

This is experimental support, and it's not secure yet.
Until we've integrated DNSSEC or TLS certificates, or something
similar, it will be possible to execute a [Man in the Middle
attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) on your DNS lookup.

See <a href="dat://hostless.website">dat://hostless.website</a> for a working example.
Run `dig txt hostless.website` to see the records behind it.

---

### Is the network anonymous?

**No!**
This is very important to understand:
If any other user has the link to a Dat site, they'll be able to see
your requests for it, and they'll know your IP.
Browsing Dat sites is therefore not anonymous.

<div class="technical-explanation single-line" data-title="Beware!">
  <div class="icon"><span class="fa fa-exclamation-triangle"></span></div>
  <div class="body">
    <p>Browsing Dat Sites is <strong>not anonymous</strong>.</p>
  </div>
</div>

This is a natural characteristic of a Dat network; because there is no individual server in charge, the browser must ask the entire network for files.

This isn't ideal, but it's not all bad. There are some things which make the situation better:

**1. Only users who possess the URL can see you.**

Network traffic is encrypted using the site's URLs.
Only users that possess the URL can track requests for it, which means you can share sites privately by keeping the URL secret.

Conversely, a publicly-shared Dat site will be open for anyone to watch.

**2. The sites can't access the network.**

Unlike regular websites, web pages on Dat sites are not allowed to access the network without your permission.
That means they can't leak personal information, such as your contact-list, photos, messages, or documents.
Other users know you're there, but they won't know what data you put into the page.

---

### Is the Hyperdrive Protocol encrypted?

Yes, like in HTTPS, the connection is encrypted.

---

### How does a Dat site differ from a normal site?

Other than the diference in protocols, Dat sites are more tightly "sandboxed."
They are not allowed to access the network directly.
That means you can't embed YouTube videos, use Google Analytics, or make Ajax requests home.
This is to protect the privacy of users.

Over time, we'll add features for Dat sites to request extra privileges.
Right now, your site will need to be self-contained.

---

### Does the P2P network automatically host my content?

No, files are not hosted on the network automatically.
To make sure your files are available, you must configue a computer in
the network to share them.
[See the "Cloud Hosting" guide](/docs/guides/cloud-hosting.html) for advice about doing this reliably.

---

### Do I automatically host sites that I've visited or downloaded?

No.
Unlike many P2P networks, Beaker does not automatically upload the files you've downloaded.
If you want to "seed" a site (that is, host its files), you can do so manually.

---

### Who is allowed to change a Dat site?

When a site is created, a "keypair" is generated
The first key, called the "private" key, gives you the power to change the site.
Beaker keeps that secret inside a database, on your device.
The second key, called the "public" key, gives other users the power to find and download the site.
The public key is used to create the site's URL.

Only the user with the private key can change the site.
If the private key is lost, the site can never be changed.

<div class="technical-explanation" data-title="Beware!">
  <div class="icon"><span class="fa fa-exclamation-triangle"></span></div>
  <div class="body">
    <p>Don't try to copy the private key onto multiple devices, except as a backup precaution.
    The Hyperdrive protocol doesn't yet have a way to handle conflicting updates, which might happen if you make changes from 2 devices.</p>
  </div>
</div>

---

### Why P2P instead of Client/Server?

Beaker launched with Peer-to-Peer sites, and we're going to keep expanding until almost every Web silo can be replaced with a protocol.
Here's why:

**Creative Freedom**

P2P sites are costless and quick to create, and they can be pushed up to a cloud server without ceding any control over the content. 
That will change the way we publish content: instead of posting to somebody else's .com, a creator can just make their own site.
With a mature platform, we'll be able to create decentralized networks that work as well as YouTube or Spotify, but don't sacrifice publishers' independence.

**"Forkability"** 

Peer-to-peer sites are self-contained bundles of files that depend on the browser's Web APIs instead of a hard-wired server.
This makes it easy to copy the files and rewrite the software to fit your needs.

**Data-Security**

Servers make valuable hacking targets, and allow businesses to sell personal information to advertisers.
In a Peer-to-Peer system, the user data is stored on-device and synced directly between users.

**Convenience**

With the Hyperdrive protocol, you can run a site from your laptop, and scale up your resources by adding new devices to the swarm.
Peer-to-Peer makes computing resources fungible, by eliminating the hard-dependencies on specific computers.
And, it makes setup easy by cutting down on the amount of configuration involved.

---

### Why Hyperdrive instead of IPFS?

Beaker currently supports IPFS, but only as a secondary protocol.
This is because Hyperdrive currently holds some technical advantages over IPFS.

Hyperdrives advantages are:

 - It retains a complete change-history in its metadata log, which allows file-versioning, similar to Git. IPFS' mutable archives don't retain a changelog.
 - Encryption features which enable confidential sharing. IPFS does not currently support this feature.
 - A more conventional URL spec. Hyperdrive URLs retain the standard format, while IPFS breaks from the standard.

Both protocols are powerful tools, and we'll update our support as they mature.

---

### Can I browse regular HTTP/S sites?

Yes, Beaker browses the normal Web.
It doesn't make any changes to Web platform, except for its added Peer-to-Peer features.

---

### Will P2P ever be adopted by other browsers?

We have no idea, but our mission is to reach as many people as possible.
We'll work with standards bodies to make that happen.

---

### Is Beaker built entirely from scratch?

No, it's a fork of the Chrome browser.

---

### Who is behind Beaker?

Beaker was created by [Paul Frazee](https://twitter.com/pfrazee) using technology by [The Dat Project](http://dat-data.com), GitHub's [Electron](http://electron.atom.io/), and many others.