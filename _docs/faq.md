---
title:    FAQ
order:    3
category: Documentation
---

### What do Peer-to-Peer URLs look like?

Like this:

```
dat://54f74fe89d7779946343ec6db9618631e4dbf43bece2a125d0099103741963c9/
```

They work just like regular URLs, except that the 'hostname' is a 64-character hex number.
You can reference specific files by putting the path at the end.

<div class="technical-explanation">
  <div class="icon"><span class="fa fa-info-circle"></span></div>
  <div class="body">
    <p>
      Every site has an ECC keypair which is used to sign the file-listing.
      The URL is the keypair's public key, in hex-encoding.
      This is how the Hyperdrive protocol verifies files from the network.
    </p>
  </div>
</div>

<hr>

### Can I use DNS to create short URLs?

There is experimental DNS support in development, but it's not secure &mdash; so we don't recommend you use it.
We'll need to integrate DNSSEC or TLS certificates before it's safe to use.

If you are curious, see <a href="dat://hostless.website">dat://hostless.website</a> for a working example. Run `dig txt hostless.website` to see the records behind it.

<hr>

### Is the network anonymous?

**No!**
This is very important to understand:
If any other user has the link to a P2P site, they'll be able to see your requests for it, and they'll know your IP.
Browsing P2P sites is therefore not anonymous.

<div class="technical-explanation single-line">
  <div class="icon"><span class="fa fa-exclamation-triangle"></span></div>
  <div class="body">
    <p>Browsing P2P Sites is <strong>not anonymous</strong>.</p>
  </div>
</div>

This is a natural characteristic of a P2P network; because there is no individual server in charge, the browser must ask the entire network for files.

This isn't ideal, but it's not all bad. There are some things which make the situation better:

**1. Only users on the site can see you.**

Network traffic is encrypted using the site's URLs.
Only users that possess the URL can track requests for it, which means you can share sites privately by keeping the URL secret.

Conversely, a publicly-shared P2P site will be open for everyone to watch.

**2. The sites can't access the network.**

Unlike regular websites, web pages on P2P sites are not allowed to access the network without your permission.
That means they can't leak personal information, such as your contact-list, photos, messages, or documents.
Other users know you're there, but they won't know what data you put into the page.

<hr>

### Why P2P instead of Client/Server?

Beaker launched with Peer-to-Peer sites, and we're going to keep expanding until almost every server can be replaced with a protocol.
Here's why:

**Creative Freedom**

P2P sites are free and easy to create.
They have no gatekeepers, since anyone can host from home.
They're also user-modifiable: it's easy to copy the files and rewrite features to fit your needs.
With more free and open tools, we can lower the barrier to creating new software.

**Data-Security**

Servers make valuable hacking targets, and allow businesses to sell personal information to advertisers.
With Peer-to-Peer, we stop depending on centralized cloud services.
User-data is stored on-device and synced directly, and safely, between users.

**Convenience**

With the Hyperdrive protocol, you can run a site from your laptop, and scale up your resources by adding new devices to the swarm.
Peer-to-Peer makes computing resources fungible, by eliminating the hard-dependencies on specific computers.
And, it makes setup easy by cutting down on the amount of configuration involved.

<hr>

### Can I browse regular HTTP/S sites?

Yes, Beaker browses the normal Web.
It doesn't make any changes to Web platform, except for its added Peer-to-Peer features.

<hr>

### Is Beaker built entirely from scratch?

No, it's a fork of the Chrome browser.
