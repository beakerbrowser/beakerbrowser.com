---
layout: install
title: Installing Beaker
---

# Install Beaker

<div class="columns">
  <div class="col col-1-3 installers">
    <a href="https://github.com/beakerbrowser/beaker/releases/download/1.0.0-prerelease.7/beaker-browser-1.0.0-prerelease.7.dmg" class="installer macos" target="_blank">
      <h2 class="platform">macOS</h2>
      <i class="platform-icon fa fa-apple"></i>
      <p class="pseudolink">
        Download .dmg
        <i class="fa fa-angle-right"></i>
      </p>
    </a>

    <a href="https://github.com/beakerbrowser/beaker/releases/download/1.0.0-prerelease.7/beaker-browser-setup-1.0.0-prerelease.7.exe" class="col col-1-3 installer windows" target="_blank">
      <h2 class="platform">Windows</h2>
      <i class="platform-icon fa fa-windows"></i>
      <p class="pseudolink">
        Download .exe (64-bit only)
        <i class="fa fa-angle-right"></i>
      </p>
    </a>

    <a href="https://github.com/beakerbrowser/beaker/releases/download/1.0.0-prerelease.7/Beaker.Browser-1.0.0-prerelease.7.AppImage" class="col col-1-3 installer linux" target="_blank">
      <h2 class="platform">Linux</h2>
      <i class="platform-icon fa fa-linux"></i>

      <p class="pseudolink">
        AppImage installer (x86_64)
        <i class="fa fa-angle-right"></i>
      </p>
    </a>
  </div>
</div>

## Staying updated

Beaker will automatically keep up-to-date on macOS and Windows, but not on Linux. Linux users can subscribe to the [AppCast feed](https://github.com/beakerbrowser/beaker/releases.atom) (includes version release notes) to stay updated. (We are actively working on Snap and Flatpak distributions.)

[Instructions for building from source <span class="fa fa-external-link"></span>](https://github.com/beakerbrowser/beaker#building-from-source)

**Changelog**: [1.0 Beta 7](/2020/07/15/beaker-1-0-beta-7.html), [1.0 Beta 6](/2020/07/10/beaker-1-0-beta-6.html), [1.0 Beta 5](/2020/06/19/beaker-1-0-beta-5.html), [1.0 Beta 4](/2020/06/04/beaker-1-0-beta-4.html), [1.0 Beta 3](/2020/05/28/beaker-1-0-beta-3.html), [1.0 Beta 2](/2020/05/20/beaker-1-0-beta-2.html), [1.0 Beta](/2020/05/14/beaker-1-0-beta.html)

<div class="release-notes" markdown="1">

## Beaker 1.0 Beta!

The Beaker 1.0 Beta is finally here! Thank you to everyone for your patience and support over the past year as we've completed this total rehaul of the browser. You can [find the release blogpost here](/2020/05/14/beaker-1-0-beta.html).

### A new protocol

Beaker is now using the [Hypercore Protocol](https://hypercore-protocol.org). With this change, `dat://` URLs are being phased out in Beaker and replaced with `hyper://`.

This breaking change includes a ton of new improvements. Performance is now *vastly* superior thanks to new data structures and connection-reliability has improved thanks to a switch to a hole-punching DHT. This update also includes new features such as mounts and peersockets.

> [Announcing Hyperdrive v10 <span class="fa fa-external-link"></span>](https://blog.hypercore-protocol.org/posts/announcing-hyperdrive-10/)

Beaker includes a Dat -> Hyperdrive converter to help you update your library.

### A new editing experience

With Beaker 1.0, we took an entirely new approach to how you build sites in the browser. We wanted to make it as easy as possible to get work done fast.

The new release includes a set of builtin tools which open side-by-side with your page. These include a source editor, files explorer, and a [new Web-based terminal](https://docs.beakerbrowser.com/advanced/webterm).

Beaker 1.0 also includes tools for quickly forking, comparing, and merging Hyperdrives. With these tools, you can collaborate on your development without ever leaving the browser.

### A new set of Web APIs

For building peer-to-peer applications, it's important you have a powerful set of APIs to replace the server. In 1.0, we've overhauled Beaker's Web APIs to provide a ton of useful tools:

 - [beaker.hyperdrive](https://docs.beakerbrowser.com/apis/beaker.hyperdrive) - query, read, and write files on Hyperdrives.
 - [beaker.peersockets](https://docs.beakerbrowser.com/apis/beaker.peersockets) - send and receive messages with peers on a Hyperdrive.
 - [beaker.contacts](https://docs.beakerbrowser.com/apis/beaker.contacts) - read and update the user's personal address book (with permission).
 - [beaker.markdown](https://docs.beakerbrowser.com/apis/beaker.markdown) - convert Markdown into HTML.
 - [beaker.shell](https://docs.beakerbrowser.com/apis/beaker.shell) - create prompts to select files and hyperdrives.
 - [beaker.terminal](https://docs.beakerbrowser.com/apis/beaker.terminal) - register "page commands" which can be invoked from [Webterm](https://docs.beakerbrowser.com/advanced/webterm).

### Let us know what you think!

This is a beta release so you may run into issues. We're going to be testing a lot of new browser features and finding out how the new protocol scales. If you run into any bumps, [open an issue](https://github.com/beakerbrowser/beaker/issues) or ask questions in [github discussions](https://github.com/beakerbrowser/beaker/discussions).

 </div>

 <script>
   document.querySelector('.installer.macos').addEventListener('click', function () {
     sa_event('click_install_macos')
   })
   document.querySelector('.installer.windows').addEventListener('click', function () {
     sa_event('click_install_windows')
   })
   document.querySelector('.installer.linux').addEventListener('click', function () {
     sa_event('click_install_linux')
   })
 </script>
