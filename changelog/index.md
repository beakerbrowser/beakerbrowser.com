---
title: Changelog
layout: changelog
---

See what's new in Beaker

<ul class="changelog-list">
{% for item in site.data.changelog %}
  <li class="change">
    <span class="{{ item.change }} fas fa-circle"></span>

    {% if item.href %}
      <a href="{{ item.href }}" class="change-title">{{ item.title }}</a>
    {% else %}
      <span class="change-title">{{ item.title }}</span>
    {% endif %}

    <div class="date">{{ item.date }}</div>

    {% if item.description %}
    <p class="change-description">
      {{ item.description }}
    </p>
    {% endif %}
  </li>
{% endfor %}
</ul>
