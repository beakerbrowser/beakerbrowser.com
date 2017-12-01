---
version: 0.7.10
releaseDate: December 1, 2017
size: 80 MB
layout: release
---

This release contains a set of fixes which we should've released a week ago, but forgot about. Enjoy!

<h2>Additions</h2>

 - <span class="tag new">new</span> Added the ability to save the current page (thanks [@rickycodes](https://github.com/rickycodes)!)
 - <span class="tag new">new</span> ([#768](https://github.com/beakerbrowser/beaker/pull/768)) Added a tool to the settings page which clears your Dat browsing cache.
 - <span class="tag new">new</span> Added pagination to `beaker://debug-log` so that you don't end up loading a 10gb log on accident.
 - <span class="tag new">new</span> Added the `beaker_open_url` env var, which opens the given URL on first load.

<h2>Fixes</h2>

 - <span class="tag updated">fix</span> ([#775](https://github.com/beakerbrowser/beaker/issues/775), [#776](https://github.com/beakerbrowser/beaker/issues/775), [#765](https://github.com/beakerbrowser/beaker/issues/765)) Now, when you add files to a Dat archive, Beaker will add the files to the Dat archive instead of weirdly replacing the folder.
 - <span class="tag updated">fix</span> ([#779](https://github.com/beakerbrowser/beaker/issues/779)) Modals will now resize themselves to avoid clipping the edges off of content.
 - <span class="tag updated">fix</span> ([#774](https://github.com/beakerbrowser/beaker/issues/774)) You can now close modals without ruining everything.
 - <span class="tag updated">fix</span> ([#773](https://github.com/beakerbrowser/beaker/issues/773)) Fixed a bad reference error at start up. The new reference is not necessarily good, but it's not bad either.
 - <span class="tag updated">fix</span> Sometimes the URL-bar's site info dropdown would show the wrong tab's info. Users felt this was "confusing" and "kind of unprofessional" so we fixed it.
 - <span class="tag updated">fix</span> Reduced overall memory usage for Dat archives. We did this by reducing the amount of data cached in memory, which may increase some load times, but it should be worth it for the reduced RAM usage and GC frequency.
 - <span class="tag updated">fix</span> Eliminated some internal messaging bugs that was barfing errors into the window. Bleh!
