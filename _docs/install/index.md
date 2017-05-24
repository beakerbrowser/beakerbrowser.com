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
      <a href="https://download.beakerbrowser.net/download/latest/osx">Download the .dmg</a>
    </td>
  </tr>
  <tr>
    <th>Linux:</th>
    <td>
      <i class="fa fa-linux"></i>
      <a href="TODO">Download the TODO</a>
    </td>
  </tr>
  <tr>
    <th>Windows:</th>
    <td>
      <i class="fa fa-windows"></i>
      Coming soon
    </td>
  </tr>
</table>

## Building from source

Requires node 6 or higher.
In Linux (and in some cases OSX) you need libtool, m4, and automake.

<figcaption class="code">bash</figcaption>
```
sudo apt-get install libtool m4 automake
```

To build:

<figcaption class="code">bash</figcaption>
```
git clone https://github.com/beakerbrowser/beaker.git
cd beaker
npm install
npm run rebuild #see https://github.com/electron/electron/issues/5851
npm start
```

If you pull latest from the repo and get weird module errors, do:

<figcaption class="code">bash</figcaption>
```
npm run burnthemall
```

This invokes [the mad king](http://nerdist.com/wp-content/uploads/2016/05/the-mad-king-game-of-thrones.jpg), who will torch your `node_modules/`, and do the full install/rebuild process for you.
`npm start` should work afterwards.

If you're doing development, `npm run watch` to have assets build automatically.
