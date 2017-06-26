---
version: 0.7.3
releaseDate: June 26, 2017
size: 65 MB
layout: release
images: [_1.png, _2.png]
---

<h2>Sidebar UI<span class="tag new">new</span></h2>

All Dat pages now support a new sidebar UI <a class="thumbnail" href="#" data-src="/img/releases/0-7-3_1.png">(click to preview)</a>. The sidebar handles several tasks for managing and viewing Dat pages, including viewing its files, saving the site for offline use, importing files, and more. Its content updates as you browse to match the current page.

<h2>Library UI<span class="tag updated">updated</span></h2>

This release includes an updated library UI <a class="thumbnail" href="#" data-src="/img/releases/0-7-3_2.png">(click to preview)</a>. It has been revamped to be much simpler and easier to navigate.

<h2>Fixes and smaller updates</h2>

 - Major performance improvements to archive sync
 - Fixed issue which would cause the page to lose focus
 - Fixed [an issue with Twitter logins](https://github.com/beakerbrowser/beaker/issues/453)
 - Fixed rendering glitches in the URL autocomplete
 - Added `{stat:}` option to `DatArchive.readdir()`
 - Added `{shallow:}` option to `DatArchive.diff()`
 - Updated dat CSPs to allow `blob:` resources
 - User is now [prompted before deleting an archive](https://github.com/beakerbrowser/beaker/issues/531)
 - Added beaker://dat-dns-cache/ page and the ability to "hard refresh" Dat DNS
 - Imported support for DNS shortnames in the `DatArchive` API
 - In `dat://`, [fallback the page title to the site title if none is given](https://github.com/beakerbrowser/beaker/issues/507)
 - [Don't garbage collect Dat archives that are under 2MB](https://github.com/beakerbrowser/beaker/issues/518)
 - Can now [close the burger menu by clicking anywhere in the window](https://github.com/beakerbrowser/beaker/issues/530)
 - [Set devtools shortcut to shift+ctrl+i for non-darwin platforms](https://github.com/beakerbrowser/beaker/issues/516)