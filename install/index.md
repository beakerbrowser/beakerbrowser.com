---
layout: install
title: Installing Beaker
---

# Install Beaker

<div class="columns">
  <div class="col col-1-3 installers">
    <a href="https://github.com/beakerbrowser/beaker/releases/download/0.8.0-prerelease.7/beaker-browser-0.8.0-prerelease.7.dmg" class="installer macos">
      <h2 class="platform">macOS</h2>
      <i class="platform-icon fa fa-apple"></i>
      <p class="pseudolink">
        Download .dmg
        <i class="fa fa-angle-right"></i>
      </p>
    </a>

    <a href="https://github.com/beakerbrowser/beaker/releases/download/0.8.0-prerelease.7/beaker-browser-setup-0.8.0-prerelease.7.exe" class="col col-1-3 installer windows">
      <h2 class="platform">Windows</h2>
      <i class="platform-icon fa fa-windows"></i>
      <p class="pseudolink">
        Download .exe (64-bit only)
        <i class="fa fa-angle-right"></i>
      </p>
    </a>

    <a href="https://github.com/beakerbrowser/beaker/releases/download/0.8.0-prerelease.7/beaker-browser-0.8.0-prerelease.7-x86_64.AppImage" class="col col-1-3 installer linux">
      <h2 class="platform">Linux</h2>
      <i class="platform-icon fa fa-linux"></i>

      <p class="pseudolink">
        AppImage installer (x86_64)
        <i class="fa fa-angle-right"></i>
      </p>
    </a>
  </div>
</div>

## Build Beaker from source

Building Beaker from source requires Node 6 or higher. If you're on Linux (and in some cases macOS), you'll also need libtool, m4, and automake:

```bash
sudo apt-get install libtool m4 make g++  # debian/ubuntu
sudo dnf install libtool m4 make gcc-c++  # fedora
```

Clone [Beaker's source](https://github.com/beakerbrowser/beaker) from GitHub, install the dependencies, and run the build:

```bash
git clone https://github.com/beakerbrowser/beaker.git
cd beaker
npm install
npm run rebuild #see https://github.com/electron/electron/issues/5851
npm start
```

If you pull latest from the repo and get weird module errors, run:

```
npm run burnthemall
```

This invokes [the mad king](http://nerdist.com/wp-content/uploads/2016/05/the-mad-king-game-of-thrones.jpg), who will torch your `node_modules/`, and do the full install/rebuild process. `npm start` should work afterwards.