# zikunw.github.io

Personal website and blog of Zikun Wang, served at
[zikunw.github.io](https://zikunw.github.io) via GitHub Pages.

Built with [Jekyll](https://jekyllrb.com/). Styling uses [Tailwind CSS](https://tailwindcss.com/)
loaded through the Play CDN, so no build step beyond Jekyll's own is required:
GitHub Pages builds and deploys the site automatically on push to `master`.

## Structure

- `index.html`: homepage (bio, publications, posters, teaching, links).
- `_layouts/default.html`: base layout: `<head>`, header, and footer.
- `_layouts/post.html`: blog post layout.
- `_posts/`: blog posts, one Markdown file per post.
- Root assets (`me.jpg`, `power.png`, `Resume.pdf`, `posters/`, favicons) are
  referenced by absolute path (e.g. `/me.jpg`).

## Local development

```sh
bundle exec jekyll serve
# or, without a Gemfile:
jekyll serve
```

## Adding a blog post

Create `_posts/YYYY-MM-DD-title.markdown` with front matter:

```yaml
---
layout: post
title: My post title
description: A one-line description.
date: YYYY-MM-DD
---
```

Posts are listed automatically on the homepage under "Blog".

This site was migrated from an earlier [Astro](https://astro.build/) version.
