---
title: Host outside of Beaker
section: tutorials
sectionTitle: Tutorials
order: 3
---

The [Dat project](https://datproject.org) has created a suite of tools outside of Beaker for hosting and sharing Dats, including:

- [Dat CLI](https://github.com/datproject/dat), A cross-platform commandline tool.
- [Dat Desktop](https://github.com/datproject/dat-desktop), A cross-platform GUI tool built with [Electron](https://electron.atom.io/).
- [Dat-node](https://github.com/datproject/dat-node), A Node.js library for writing custom Dat applications outside of Beaker.
- [DatHTTPD](https://github.com/beakerbrowser/dathttpd), A Web server for Dat and HTTPS, with zero-config TLS.

As fun as self-hosting a site is, sometimes it’s important to make sure your site is always available. The simple solution is to setup a cloud server somewhere and rehost your site using either [Dat CLI](https://github.com/datproject/dat) or [DatHTTPD](https://github.com/beakerbrowser/dathttpd). For hands-off hosting, DatHTTPD is the best choice.

From the readme:

> A Web server for Dat and HTTPS.

> Dat sites are hosted at public keys, which are the equivalent of IP addresses in the P2P network. The pubkeys are ugly, though! Wouldn't it be nice if your Dats could have nice DNS shortnames, and also rehost over HTTPS for people still on legacy browsers?

> DatHTTPD is for you!

> - Serve sites over Dat at dat://{subdomain}.{yourdomain.com}.
> - Rehost those sites over https://{subdomain}.{yourdomain.com}.
> - Get TLS certs automatically with Let's Encrypt.
> - (Optionally) Auto-redirect from https -> dat.
> - Metrics dashboard

Using DatHTTPD should be very simple for an experienced cloud admin. Create a host your Dats with Beaker, or some other Dat application. Then, on your server, create a config file at ~/.dathttpd.yml:

```yml
letsencrypt:
  email: 'bob@foo.com' # replace this value with your email address
  agreeTos: true
sites:
  mydatsite.com: # replace this key with your server’s hostname
    url: dat://{your_dat_url_here}/ # replace this value with your dat’s URL
```

Then run

```
# install build dependencies
sudo apt-get install libtool m4 automake

# install dathttpd (https://docs.npmjs.com/getting-started/fixing-npm-permissions)
npm install -g dathttpd

# give node perms to use ports 80 and 443
sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``

# start dathttpd
dathttpd
```

To daemonify the server in Debian-based systems, stop the dathttpd process and then run:

```
# install a helper tool
npm install -g add-to-systemd

# create a systemd entry for dathttpd
sudo add-to-systemd dathttpd --user $(whoami) $(which dathttpd)

# start the dathttpd service
sudo systemctl start dathttpd
```

Just like that, you’re ready to go. [Read the DatHTTPD readme](https://github.com/beakerbrowser/dathttpd) for more information.