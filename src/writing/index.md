---
title: Writing Archive
layout: base.njk
---

<div style="margin-bottom: 2rem;">
  <span class="editorial-kicker">Archive</span>
  <h1 style="font-family: var(--font-sans); font-size: 2.5rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1.1;">All Articles</h1>
  <p class="editorial-support" style="margin-top: 0.5rem; font-size: 1.1rem;">
    Reflections on technical communication, Docs-as-Code setups, and career progression in tech.
  </p>
</div>

<div class="feed-list">
  {% for post in collections.writing %}
    <div class="feed-list-row">
      <div class="feed-list-date">{{ post.date | readableDate }}</div>
      <div class="feed-list-main">
        <a href="{{ post.url }}" class="feed-list-title">{{ post.data.title }}</a>
        {% if post.data.description %}
          <div class="feed-list-desc">{{ post.data.description }}</div>
        {% endif %}
      </div>
    </div>
  {% else %}
    <p class="editorial-support" style="padding: 1.5rem 0;">No articles written yet. Check back soon!</p>
  {% endfor %}
</div>