---
layout: docs-intro
title: Documentation
order: 1
---

<h1>Documentation</h1>

<div class="docs-hero columns">
  <div class="cta col col-2-5">
    <p class="welcome">
      <i class="fas fa-heart"></i>
      <strong>Welcome to Beaker!</strong>
    </p>

    <p>
      Beaker is an experimental peer-to-peer browser with support for
      the <a class="link" href="https://datproject.org">dat:// protocol</a>.
    </p>

    <p>
      {% include take-a-tour-aside.html %}
    </p>
  </div>

  <div class="apis col col-3-5">
    <div class="example">
{% highlight javascript %}
var mySite = await DatArchive.create({title: 'My site'});
mySite.url // dat://1277b9...
await mySite.writeFile('index.html', 'Hello, world!');
{% endhighlight %}
    </div>

    <div class="links">
      <a href="/docs/apis">
        <span class="fa fa-code"></span>
        API reference
      </a>

      <a href="/docs/snippets" class="snippets">
        <span class="fa fa-cut"></span>
        Code snippets
      </a>
    </div>
  </div>
</div>

<div class="main-info grid grid-3 small-gap">
  <div class="col-2-3 whats-peer-to-peer-web">
    <h2>
      What's the p2p Web?
    </h2>

    <p>
      Learn more about how Beaker works, peer-to-peer websites, and building peer-to-peer applications
      with the Web you know and love.
    </p>

    <p>
      <a href="/docs/how-beaker-works" class="btn white">Learn more</a>
    </p>
  </div>

  <div class="col-1-3 external-links">
    <ul>
      <li class="install">
        <span class="icon fa fa-arrow-alt-circle-down fa-fw"></span>
        <a href="/install">
          Install Beaker
        </a>
      </li>

      <li class="view-source">
        <span class="fas fa-keyboard fa-fw"></span>
        <a href="https://github.com/beakerbrowser/beaker">
          Beaker on GitHub
        </a>
      </li>

      <li class="support">
        <span class="fas fa-heart fa-fw"></span>
        <a href="https://opencollective.com/beaker">
          Support Beaker
        </a>
      </li>

      <li class="chat">
        <span class="fas fa-comments fa-fw"></span>
          <a href="https://webchat.freenode.net/?channels=%23beakerbrowser">
          Talk to us
        </a>
      </li>
    </ul>
  </div>
</div>

<div class="highlights grid grid-3 small-gap">
   <a href="/docs/how-beaker-works/peer-to-peer-websites#keeping-a-peer-to-peer-website-online" class="highlight seeding">
    <h2>All about seeding</h2>

    <p>
      Seeding, hosting, pinning, say what? Learn about keeping
      files online in the p2p Web.
    </p>

    <img class="icon" src="/img/icon/seeding.svg" />
  </a>

  <a href="/docs/tour#view-source" class="highlight view-source">
    <h2>View (and edit!) Source</h2>

    <p>
      See how Beaker's View Source can help you learn from and remix projects you like.
    </p>

    <span class="icon fas fa-font"></span>
  </a>

  <a href="/docs/faq/#is-the-dat-network-anonymous" class="highlight privacy">
    <h2>Privacy and anonymity</h2>

    <p>
      dat:// is a powerful protocol for publishing and sharing, but it's
      <strong>not anonymous</strong>.
    </p>

    <span class="icon fas fa-eye"></span>
  </a>
</div>

<div class="columns">
  <div class="quick-links col-1-2">
    <h2>API Reference</h2>
    <ul>
      <li>
        <a href="/docs/apis/dat"><code>DatArchive</code></a>
      </li>

      <li>
        <a href="/docs/apis/manifest"><code>dat.json</code></a>
      </li>

      <li>
        <a href="/docs/apis#experimental-api-reference">
          Experimental APIs
        </a>
      </li>
    </ul>

    <h2>
      All about Dat
      <img class="dat-hexagon" src="/img/dat-hexagon.svg"/>
    </h2>

    <ul>
      <li>
        <a href="https://datprotocol.com">Dat protocol specs</a>
      </li>

      <li>
        <a href="https://datproject.org">Dat Project</a>
      </li>

      <li>
        <a href="https://codeforscience.org">Code for Science & Society</a>
      </li>
    </ul>

    <h2>
      <a href="/docs/all">
        All documentation
        <span class="fa fa-angle-double-right"></span>
      </a>
    </h2>

    {% include dns-aside.html %}
  </div>

  <div class="col-1-2">
    <h2 class="underline">
      Videos
    </h2>

    {% include docs-videos.html %}
  </div>
</div>

<div class="guides">
  <h2>Guides</h2>
  {% include guides-grid.html items=site.data.docs.guides.children featured=true %}

  <p>
    <a class="link" href="/docs/guides">
      All guides
      <span class="fa fa-angle-double-right"></span>
    </a>
  </p>
</div>

<div class="links-grid">
  <div class="link-icon">
    <span class="fa fa-link"></span>
    <span class="text">Links</span>
  </div>

  <div class="link changelog">
    <span class="icon changelog-icon body">
      <span class="fas fa-circle"></span>
      <span class="fas fa-circle"></span>
      <span class="fas fa-circle"></span>
    </span>

    <a href="/changelog" class="text">
      Changelog - see what's new
    </a>
  </div>

  <a class="link" href="/docs/guides/publish-a-peer-to-peer-website">
    <span class="icon dot-com">.com</span>
    <span class="text">
      Publish a p2p website!
    </span>
  </a>

  <a class="link" href="https://github.com/beakerbrowser/explore">
    <span class="icon fa fa-search"></span>
    <span class="text">
      Explore what others have built
    </span>
  </a>
</div>
