---
title: Hosting a site
---

Any site you [create](/docs/howto/create-a-site.html) or save to your "library" will be hosted from your computer. To save: click the save button in the URL bar.

<figure>
  <img class="bordered" src="/img/screenshot-save-btn.png">
  <figcaption>Save a site to host it from your computer.</figcaption>
</figure>

The [Dat Protocol](/learn/dat.html) encrypts network traffic so that only users who possess the URL of a site can read its content. If you only share the URL with your intended recipients, the site files and metadata will be secret.

You can see the sites you're hosting from your library with `bkr ls`. For example:

```bash
$ bkr ls
2 archives

  Yo-Yo.js (downloaded) Jan 18, 2017 
  dat://469eb4ed1089ee7fa9705455ea0a372bfa5b2995e55f54bc7f2bfa4eafea114b

  datprotocol.com (mine) 4 hours ago 
  dat://6ab6da6a160b9ba0a960c3caa7d24610e0f2683fdf08f8ebf3ecbd612419d63c
```

### Cloud hosting

Cloud-hosting is recommended for public sites that need reliable uptime and a memorable URL. For advanced users, cloud-hosting has several advantages over hosting from home:

 - DNS shortnames (dat://foo.com),
 - Fallback to HTTPS, and
 - Better reliability.

**[DatHTTPD, a Dat & static HTTPS site server,](https://github.com/beakerbrowser/dathttpd)** is available to host from a VPS. It provides hosting for Dat and HTTPS, DNS shortnames, and automatic TLS certificate provision with LetsEncrypt. [Follow the guide in the readme](https://github.com/beakerbrowser/dathttpd) to get started.

### Troubleshooting

Beaker can host to users on the Wifi and over the Internet. If you have trouble connecting, try these steps:

 - (Wifi) Make sure [the operating system firewall is disabled](http://www.wikihow.com/Turn-off-Mac-Firewall).
 - (Internet) Make sure your router firewall is not blocking.
 - [File an issue to ask for help.](https://github.com/beakerbrowser/beaker/issues)

