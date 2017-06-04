---
title: Ignoring files with .datignore
section: usingBeaker
sectionTitle: Using Beaker
order: 3
---

Beaker supports a `.datignore` file in the root folder of sites, which you can use to specify files and folders which should not be published in the site archive. The list can include `*` globs to match against patterns.

<figcaption class="code">A common .datignore</figcaption>
```
.DS_Store
node_modules
*.log
```