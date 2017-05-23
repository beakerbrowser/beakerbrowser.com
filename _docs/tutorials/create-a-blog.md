---
title: Create a peer-to-peer blog
section: tutorials
sectionTitle: Tutorials
order: 1
---

Creating a blog on Beaker is extremely easy with site generators. In this tutorial, we’ll use [Jekyll](https://jekyllrb.com/). Start by following their instructions to create your blog:

<figcaption class="code">bash</figcaption>
```bash
~$ gem install jekyll bundler
~$ jekyll new my-awesome-p2p-blog
~$ cd my-awesome-p2p-blog
```

My blog is located at `~/my-awesome-p2p-blog`, which means that the site it generates is located at `~/my-awesome-p2p-blog/_site`.

Update your `_config.yml` file to have the settings you want.

<figcaption class="code">_config.yml</figcaption>
```yaml
# Blog settings
title: My Awesome P2P Blog
email: "pfrazee@foo.com"
description: Software, decentralization, and peer-to-peer systems.
twitter_username: pfrazee
github_username:  pfrazee

# Build settings
markdown: kramdown
theme: minima
gems:
  - jekyll-feed
exclude:
  - Gemfile
  - Gemfile.lock
```

Run `jekyll build` and your site will be generated.

<figcaption class="code">bash</figcaption>
```bash
~/my-awesome-p2p-blog$ jekyll build

Configuration file: /Users/paulfrazee/my-awesome-p2p-blog/_config.yml
            Source: /Users/paulfrazee/my-awesome-p2p-blog
       Destination: /Users/paulfrazee/my-awesome-p2p-blog/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.854 seconds.
 Auto-regeneration: disabled. Use --watch to enable.
```

Now, let’s create the site in Beaker. Open the dropdown menu in Beaker, and select “New site”:

<figure>
<img src="/img/docs/tut-create-a-blog/new-site.png" >
<figcaption>Click "New site" in the dropdown menu</figcaption>
</figure>

Fill in the title and description of your blog:

<figure>
<img src="/img/docs/tut-create-a-blog/site-details.png" >
<figcaption>Set the title and description</figcaption>
</figure>

Click "Create site" and Beaker will take you to the library page for your site:

<figure>
<img src="/img/docs/tut-create-a-blog/library-page.png" >
<figcaption>Your new site in the library</figcaption>
</figure>

By default, Beaker creates a new folder for you under the `~/Sites` directory. In this case, we want to pick our own folder, because we want to use the `./_sites` folder under our Jekyll blog. Use the “Change folder” tool to do this:

<figure>
<img src="/img/docs/tut-create-a-blog/change-folder.png" >
<figcaption>Select "Change folder" in the library dropdown</figcaption>
</figure>

For my blog, I set the folder to `~/my-awesome-p2p-blog/_site`:

<figure>
<img src="/img/docs/tut-create-a-blog/select-folder.png" >
<figcaption>Choose ~/my-awesome-p2p-blog/_site</figcaption>
</figure>

You'll see Beaker's staging area fill with the new changes immediately.

<figure>
<img src="/img/docs/tut-create-a-blog/staging-area.png" >
<figcaption>The staging area shows unpublished changes</figcaption>
</figure>

We'll publish in a moment. First, let's click “View site” to see what we've got.

<figure>
<img src="/img/docs/tut-create-a-blog/view-site.png">
<figcaption>The unpublished site</figcaption>
</figure>

Alright! This blog’s looking pretty good. Check out the [Jekyll documentation](https://jekyllrb.com/docs/home/) to learn how to author content and change the styles. 

Instead of `bundle exec jekyll serve`, just do: `jekyll build --watch`.

<figcaption class="code">bash</figcaption>
```bash
~/my-awesome-p2p-blog$ jekyll build --watch
```

Beaker serves your site for you, so you only need Jekyll to build.

There’s one last step before you can share your blog; you need to publish. Back in the library page for your blog, you should see still see this:

<figure>
<img src="/img/docs/tut-create-a-blog/staging-area.png" >
<figcaption>The staging area shows unpublished changes</figcaption>
</figure>

This is the staging area. It shows all the local changes that you’ve made, but haven’t yet published. Until you publish, only you will be able to see the changes.

Click “Publish,” and the changes will be committed to your site.

<figure>
<img src="/img/docs/tut-create-a-blog/published.png" >
<figcaption>Click “Publish” and the site is ready</figcaption>
</figure>

Now you can share the URL to anybody using Beaker, and keep your computer online, and they’ll be able to download the site.

One last tip: once you have `jekyll build --watch` running, Jekyll will automatically generate a new version of your site when you make updates. If you want Beaker to automatically reload the page too, you can turn on Live reloading, like this:

<figure>
<img src="/img/docs/tut-create-a-blog/live-reloading.png" >
<figcaption>Turn on live reloading</figcaption>
</figure>

Navigate to the site, click the dropdown menu in the top right, then click “Turn on live reloading.” You'll see a lightning symbol in the URL bar. Now, any time you make a change, the site will auto-refresh.