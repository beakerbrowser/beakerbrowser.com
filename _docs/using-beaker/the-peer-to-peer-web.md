---
title: The peer-to-peer Web
section: usingBeaker
sectionTitle: Using Beaker
order: 1
---

<img data-src="/img/docs/tour-intro.png" class="centered">

Peer-to-peer websites are just like any other website. But instead of being served from a datacenter, files are hosted by peers on your network. This makes it easy for anybody to host a site.

<figure>
<img data-src="/img/docs/tour-site-peer-count.jpg">
<figcaption>Browsing to a peer-to-peer site shows the number of peers</figcaption>
</figure>

You can see how many peers are hosting a site’s files. When you navigate to a site, you’ll automatically share the files you download for a short period. You can [save the site to your library](/docs/using-beaker/saving-sites.html) if you want to rehost it permanently.

## Peer-to-peer URLs

Peer-to-peer websites use the `dat://` protocol, and have URLs that look like this:

<figcaption class="code">"Raw" peer-to-peer URLs</figcaption>
```
dat://40a7f6b6147ae695bcbcff432f684c7bb5291ea339c28c1755896cdeb80bd2f9
```

This is the equivalent to an `https://` URL that's showing the raw address, eg `https://72.189.45.108`. Dat URLs can use shortnames such as [dat://beakerbrowser.com](dat://beakerbrowser.com) using the [Dat DNS over TLS protocol](https://github.com/beakerbrowser/beaker/wiki/Authenticated-Dat-URLs-and-HTTPS-to-Dat-Discovery#proposal).