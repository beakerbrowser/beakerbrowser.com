---
title: Installing Beaker
section: installingBeaker
sectionTitle: Installing Beaker
order: 1
---

<table class="install-options basic-table">
  <tr>
    <th>MacOS:</th>
    <td>
      <i class="fa fa-apple"></i>
      <a href="https://github.com/beakerbrowser/beaker/releases/download/0.7.11/beaker-browser-0.7.11.dmg">Download the installer</a>
    </td>
  </tr>
  <tr>
    <th>Windows:</th>
    <td>
      <i class="fa fa-windows"></i>
      <a href="https://github.com/beakerbrowser/beaker/releases/download/0.7.11/beaker-browser-setup-0.7.11.exe">Download the installer</a>
    </td>
  </tr>
  <tr>
    <th>Linux:</th>
    <td>
      <i class="fa fa-linux"></i>
      <a href="https://github.com/beakerbrowser/beaker/releases/download/0.7.11/beaker-browser-0.7.11-x86_64.AppImage">Download the AppImage</a>
    </td>
  </tr>
</table>

**Note 1**: Windows will prompt you with a security concern before install. It is safe to continue! Beaker is downloaded via secure connection from <code>download.beakerbrowser.net</code>. (We're still working on signing the release, which will solve that problem.)

**Note 2**: Linux users don't have an auto-updater yet. You'll need to download new versions manually for now. Sorry!

**You can [report issues here](https://github.com/beakerbrowser/beaker/issues).**

## Building from source

Requires node 6 or higher. On windows, you may need to use npm version 4, due to a bug in npm 5.

In Linux (and in some cases OSX) you need libtool, m4, and automake:

<figcaption class="code">bash (linux)</figcaption>
```bash
sudo apt-get install libtool m4 make g++  # debian/ubuntu
sudo dnf install libtool m4 make gcc-c++  # fedora
```

In Windows, you'll need to install [Python 2.7](https://www.python.org/downloads/release/python-2711/), Visual Studio 2015 or 2017, and [Git](https://git-scm.com/download/win). (You might try [windows-build-tools](https://www.npmjs.com/package/windows-build-tools).) Then run:

<figcaption class="code">powershell (windows)</figcaption>
```bash
npm config set python c:/python27
npm config set msvs_version 2015
npm install -g node-gyp
npm install -g gulp
```

To build:

<figcaption class="code">bash (linux) or powershell (windows)</figcaption>
```bash
git clone https://github.com/beakerbrowser/beaker.git
cd beaker
npm install
npm run rebuild #see https://github.com/electron/electron/issues/5851
npm start
```

If you pull latest from the repo and get weird module errors, do:

<figcaption class="code">bash (linux) or powershell (windows)</figcaption>
```
npm run burnthemall
```

This invokes [the mad king](http://nerdist.com/wp-content/uploads/2016/05/the-mad-king-game-of-thrones.jpg), who will torch your `node_modules/`, and do the full install/rebuild process for you.
`npm start` should work afterwards.

If you're doing development, `npm run watch` to have assets build automatically.
