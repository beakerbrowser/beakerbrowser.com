---
title: All documentation
layout: docs-all
---

{% for i in site.data.docs %}
  {% assign section = i[1] %}
  <h2><a href="{{ section.url }}">{{ section.title }}</a></h2>
  <ul>
    {% for doc in section.children %}
      <li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
