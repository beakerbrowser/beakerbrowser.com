---
title: Host outside of Beaker
section: tutorials
sectionTitle: Tutorials
order: 3
---

The [Dat project](https://datproject.org) has created a suite of tools outside of Beaker for hosting and sharing Dats, including:

- [Dat CLI](https://github.com/datproject/dat), A cross-platform commandline tool.
- [DatHTTPD](https://github.com/beakerbrowser/dathttpd), A Web server for Dat and HTTPS, with zero-config TLS.
- [Dat Desktop](https://github.com/datproject/dat-desktop), A cross-platform GUI tool built with [Electron](https://electron.atom.io/).
- [Dat-Node](https://github.com/datproject/dat-node), A Node.js library for writing custom Dat applications outside of Beaker.

Sometimes it’s important to make sure your site is always available. The solution is to setup a server and rehost your site using [DatHTTPD](https://github.com/beakerbrowser/dathttpd).

From the README:

> A Web server for Dat and HTTPS.

> - Serve sites over Dat at dat://{subdomain}.{yourdomain.com}.
> - Rehost those sites over https://{subdomain}.{yourdomain.com}.
> - Get TLS certs automatically with Let's Encrypt.
> - (Optionally) Auto-redirect from https -> dat.
> - Metrics dashboard

Using DatHTTPD should be very simple for an experienced admin. Create a host your Dats with Beaker, or some other Dat application. Then, on your server, create a config file at `~/.dathttpd.yml`.

<figcaption class="code">~/.dathttpd.yml</figcaption>
```yml
letsencrypt:
  email: 'bob@foo.com' # replace this value with your email address
  agreeTos: true
sites:
  mydatsite.com: # replace this key with your server’s hostname
    url: dat://{your_dat_url_here}/ # replace this value with your dat’s URL
```

Then run

<figcaption class="code">bash</figcaption>
```
# install build dependencies
~$ sudo apt-get install libtool m4 automake

# install dathttpd (https://docs.npmjs.com/getting-started/fixing-npm-permissions)
~$ npm install -g dathttpd

# give node perms to use ports 80 and 443
~$ sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``

# start dathttpd
~$ dathttpd
```

To daemonify the server in Debian-based systems, stop the dathttpd process and then run:

<figcaption class="code">bash</figcaption>
```
# install a helper tool
~$ npm install -g add-to-systemd

# create a systemd entry for dathttpd
~$ sudo add-to-systemd dathttpd --user $(whoami) $(which dathttpd)

# start the dathttpd service
~$ sudo systemctl start dathttpd
```

[Read the DatHTTPD README](https://github.com/beakerbrowser/dathttpd) for more information.