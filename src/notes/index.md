---
title: Notes Archive
layout: base.njk
---

<div style="margin-bottom: 2rem;">
  <span class="editorial-kicker">Timeline</span>
  <h1 style="font-family: var(--font-sans); font-size: 2.5rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1.1;">Notes &amp; Thoughts</h1>
  <p class="editorial-support" style="margin-top: 0.5rem; font-size: 1.1rem;">
    Short-form reflections, configuration snippets, and technical bookmarks recorded as they happen.
  </p>
</div>

<div class="timeline">
  {% for note in collections.notes %}
    <div class="timeline-item">
      <div class="timeline-date">{{ note.date | readableDate }}</div>
      <div class="timeline-content">
        <h2 class="editorial-title" style="font-size: 1.3rem; margin: 0.2rem 0 0.5rem;">
          <a href="{{ note.url }}" class="editorial-title-link">{{ note.data.title }}</a>
        </h2>
        <div class="prose" style="font-size: 0.98rem; line-height: 1.55;">
          {{ note.templateContent | safe }}
        </div>
      </div>
    </div>
  {% else %}
    <p class="editorial-support">No notes recorded yet.</p>
  {% endfor %}
</div>
