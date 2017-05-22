---
title: Create a blog
section: tutorials
sectionTitle: Tutorials
order: 1
---

Creating a blog on Beaker is extremely easy with existing site-builders. If you already have a static blog, you can use it.

In this tutorial, we’ll use [Jekyll](https://jekyllrb.com/). Start by following their instructions to create your blog:

[TODO screenshot]

My blog is located at `~/my-awesome-p2p-blog`, which means that the site it generates is located at `~/my-awesome-p2p-blog/_site`.

Update your `_config.yml` file to have the settings you want. Here’s my `~/my-awesome-p2p-blog/_config.yml`:

```yaml
title: Bob’s Blog
email: "bob@foo.com"
description: Software, decentralization, peer-to-peer systems, and more.
twitter_username: bob
github_username:  bob

# Build settings
markdown: kramdown
theme: minima
gems:
  - jekyll-feed
exclude:
  - Gemfile
  - Gemfile.lockl
```

Run `jekyll build` and your site will be generated.

Now, let’s create the site in Beaker. Open the dropdown menu in Beaker, and select “New site”:

[TODO screenshot]

Fill in the title and description of your blog:

[TODO screenshot]

Beaker will take you to the library page for your site:

[TODO screenshot]

By default, Beaker creates a new folder for you under the `~/Sites` directory. In this case, we want to pick our own folder, because we want to use the `./_sites` folder under our Jekyll blog. Use the “Change folder” tool to do this:

[TODO screenshot]

For my blog, I set the folder to `~/my-awesome-p2p-blog/_site`:

[TODO screenshot]

Now click “View site” to see the result!

[TODO screenshot]

Alright! This blog’s looking pretty good. If you want to start publishing posts or change the styles, I’ll refer you to the [Jekyll documentation](https://jekyllrb.com/docs/home/) (it’s very good!). One difference is this:

Any time the docs say, use `bundle exec jekyll serve`, instead just do: `jekyll build --watch`.

Why? Because Beaker is already serving your site! All you need to do is “View site” to see the changes.

There’s one last step before you can share your blog; you need to publish. In the library page for your blog, you should see something like this:

[TODO screenshot]

This is the staging area. It shows all the local changes that you’ve made, but haven’t yet published. Until you publish, only you will be able to see the changes.

All you need to do is click “Publish”, and the changes will be committed to your site. Now you can share the URL to anybody using Beaker, and keep your computer online, and they’ll be able to download the site.

[TODO screenshot]

One last tip: once you have `jekyll build --watch` running, Jekyll will automatically generate a new version of your site when you make updates. If you want Beaker to automatically reload the page too, you can turn on Live reloading, like this:

[TODO screenshot]