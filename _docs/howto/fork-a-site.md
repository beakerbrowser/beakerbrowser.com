---
title:    Fork a Site
category: Howto
order:    6
---

"Forking" means to make a new copy of a site.
It puts the copy into new URL, and gives you control over the files, so that you can make changes.


### How to fork

Navigate to the site you want to fork, then click on the title in the navbar.

<img src="/img/getting-started-screen-siteinfo.png" class="bordered">

Hit "View Site Files."
You'll be presented with a file-listing, and tools to host or fork the site.

<img src="/img/getting-started-screen-datviewer.png" class="bordered">

If you want to work on the fork afterwards from the CLI, use [bkr co](https://github.com/beakerbrowser/bkr#checkout).

### Using the CLI

You can also fork with the [bkr fork command](https://github.com/beakerbrowser/bkr#fork).

```
~ bkr fork dat://fdad0febf3ca58a7d115c622218838b48c3f093b33fe2798010c94bb7847e880/ ~/my-new-fork

Forking dat://fdad0f..80, please be patient...

Checking out into /Users/bob/my-new-fork
2 files created
New url: dat://1322af7a09027ff2b80b250ae410e33873a788000066a9996365095838d02069
```