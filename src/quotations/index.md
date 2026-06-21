---
title: Curated Quotations
layout: base.njk
---

<div style="margin-bottom: 2rem;">
  <span class="editorial-kicker">Quotes</span>
  <h1 style="font-family: var(--font-sans); font-size: 2.5rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1.1;">Curated Thoughts</h1>
  <p class="editorial-support" style="margin-top: 0.5rem; font-size: 1.1rem;">
    A collections of industry wisdom, design philosophies, and principles that guide my work.
  </p>
</div>

<!-- Dynamic Filter Buttons (injected via JS) -->
<div id="filter-bar" style="display: flex; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap;">
  <button class="tag tag-interactive active-filter" data-filter="all" style="cursor: pointer; border-color: var(--accent-color); color: var(--accent-color);">All</button>
</div>

<div id="quotes-list" style="display: flex; flex-direction: column; gap: 1.5rem;">
  {% for q in quotes %}
    <div class="quote-item surface" data-theme="{{ q.theme | lower }}">
      <span class="editorial-kicker">{{ q.theme }}</span>
      <blockquote style="border-left: 2px solid var(--accent-color); padding-left: 1rem; font-style: italic; font-size: 1.15rem; margin: 0.5rem 0 0.8rem;">
        "{{ q.text }}"
      </blockquote>
      <cite style="font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; display: block; color: rgb(115, 115, 115); letter-spacing: 0.05em; font-style: normal;">
        &mdash; {{ q.author }} {% if q.date %}({{ q.date | readableDate }}){% endif %}
      </cite>
    </div>
  {% else %}
    <p class="editorial-support">No quotes available.</p>
  {% endfor %}
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const quotesList = document.getElementById('quotes-list');
    const quoteItems = document.querySelectorAll('.quote-item');
    const filterBar = document.getElementById('filter-bar');
    
    // Collect unique themes from rendered items
    const themes = new Set();
    quoteItems.forEach(item => {
      const theme = item.getAttribute('data-theme');
      if (theme) {
        themes.add(theme);
      }
    });

    // Dynamically build filter buttons
    themes.forEach(theme => {
      const btn = document.createElement('button');
      btn.className = 'tag tag-interactive';
      btn.style.cursor = 'pointer';
      btn.setAttribute('data-filter', theme);
      // Capitalize first letter for display
      btn.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
      filterBar.appendChild(btn);
    });

    // Set up filter click events
    const buttons = filterBar.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Reset active state for all buttons
        buttons.forEach(b => {
          b.style.borderColor = '';
          b.style.color = '';
        });

        // Set active style for clicked button
        btn.style.borderColor = 'var(--accent-color)';
        btn.style.color = 'var(--accent-color)';

        const filter = btn.getAttribute('data-filter');

        // Filter list items
        quoteItems.forEach(item => {
          const itemTheme = item.getAttribute('data-theme');
          if (filter === 'all' || itemTheme === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
</script>
