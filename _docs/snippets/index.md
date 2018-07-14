---
title: Snippets
subtitle: A collection of handy snippets for building p2p websites and apps in Beaker
layout: snippets
---

<div class="snippets-container">
{% for item in site.data.snippets %}
  <div class="snippet">
    <div class="snippet-heading">
      <a href="/docs/snippets/{{ item.slug }}" class="snippet-title">
       {{ item.title }}
      </a>

      <button class="btn plain copy-snippet" tooltip="Copy snippet">
        <span class="fa fa-paste"></span>
      </button>
   </div>

   {% if item.description %}
    <p class="snippet-description">
      {{ item.description }}
    </p>
    {% endif %}

{% highlight javascript %}
{{ item.code }}
{% endhighlight %}
  </div>
{% endfor %}
</div>