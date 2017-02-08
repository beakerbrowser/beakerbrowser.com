---
title:    Install Beaker
category: Get Started
order:    1
redirect_from:
 - /docs/howto/use-bkr.html
---

<table class="install-options">
  <tr>
    <th>MacOS:</th>
    <td><span class="fa fa-apple"></span> <a href="https://download.beakerbrowser.net/download/latest/osx">Download the binary</a></td>
  </tr>
  <tr>
    <th>Linux:</th>
    <td><span class="fa fa-linux"></span> <a href="https://github.com/beakerbrowser/beaker">Build from source</a></td>
  </tr>
  <tr>
    <th>Windows:</th>
    <td><span class="fa fa-windows"></span> Coming soon</td>
  </tr>
</table>

For MacOS, follow the instructions in the installer. For Linux, follow the instructions on the GitHub readme.

After installation completes, you should also install the [bkr command-line](https://github.com/beakerbrowser/bkr) which lets you fork, develop, and publish P2P sites from the command line. (Requires [node 0.6 or later](https://nodejs.org/).)

```
npm install -g bkr
```

<div class="detailed-card thin" data-title="Permissions issue?">
  <div class="icon"><span class="fa fa-exclamation-triangle"></span></div>
  <div class="body">
    <p>If you have a problem with permissions, <a href="https://docs.npmjs.com/getting-started/fixing-npm-permissions" target="_blank">see this guide</a>.</p>
  </div>
</div>

Command overview:

```
Usage: bkr <command> [opts...]

Publishing:

  init [directory] - create a new dat
  status [directory] - check the change status of a dat
  publish [directory] - publish a new version of a dat

Checkouts:

  co <dat-url> [directory] - checkout a dat
  fork <dat-url|directory> [directory] - fork and then checkout a dat
  pull [--live] [directory] - pull the latest version of a dat

Open in beaker:

  open [directory] - open the dat in a folder
  dev [directory] - create and open a temporary live-watching dat (useful for dev)

Management:

  ls [--mine] - list dats saved in beaker
  save <dat-url> - save a dat to beaker
  unsave <dat-url> - unsave a dat from beaker
```

Next: [Create a site](./create-a-site.html)
