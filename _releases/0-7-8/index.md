---
version: 0.7.8
releaseDate: November 15, 2017
size: 79 MB
layout: release
---

With this update, we have **finally** fixed the dreaded crash bug!
We also sprinkled in a couple of other fixes, and added a pre-releases channel for people to try out new versions early.

<h2>Additions</h2>

 - <span class="tag new">new</span> ([#711](https://github.com/beakerbrowser/beaker/issues/711)) Added the ability to mute tabs. Hush, you!
 - <span class="tag new">new</span> ([#668](https://github.com/beakerbrowser/beaker/issues/668)) Added an "import folders" control to the library for Linux. It's really clunky and confusing but we had to come up with something.
 - <span class="tag new">new</span> ([#744](https://github.com/beakerbrowser/beaker/pull/744)) Added back/forward/reload controls to the context menu (thanks [@rickycodes](https://github.com/rickycodes)!) The menu really didn't look right without it.
 - <span class="tag new">new</span> Added a 'toggle javascript console' shortcut. We had to do some serious code diving to figure out [this snippet](https://github.com/beakerbrowser/beaker/blob/c5d9b0342fb4fa3dada5f53c0450a1f204075df4/app/shell-window/pages.js#L268-L271).
 - <span class="tag new">new</span> Added auto-updating for Windows, and the ability to jump ahead to pre-releases. We'll use this for the big 0.8 release coming up.

<h2>Fixes</h2>

 - <span class="tag updated">fix</span> ([#474](https://github.com/beakerbrowser/beaker/issues/474)) Fixed a crash bug in the dat:// protocol handler. Rotonde will now be much more fun to use, unless you liked the crashes, in which case Rotonde will now be much less fun to use.
 - <span class="tag updated">fix</span> ([#380](https://github.com/beakerbrowser/beaker/issues/380)) Ctrl+W now closes the tab instead of the browser in Linux. Sorry we didn't believe you earlier, Linux users.
 - <span class="tag updated">fix</span> ([#754](https://github.com/beakerbrowser/beaker/issues/754)) New tab command now creates a new window if no window exists.
 - <span class="tag updated">fix</span> ([#735](https://github.com/beakerbrowser/beaker/issues/735)) Guard against bad references to `electron.screen`. We have no idea why the bad references keep happening, but we're on guard now.
 - <span class="tag updated">fix</span> ([#746](https://github.com/beakerbrowser/beaker/issues/746)) Opening URLs from other apps no longer errors. (Unless it's the URL to an error page... then you'll see an error.)
 - <span class="tag updated">fix</span> Fixed keyboard shortcuts for keyboard layouts other than US QWERTY. For what it's worth, we had a typing competition and QWERTY beat DVORAK.
