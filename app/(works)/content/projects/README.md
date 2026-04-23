# Project Articles (MDX)

Each project lives in its own folder:

`content/projects/<slug>/index.mdx`

Example:

```mdx
---
title: My Project
subtitle: One-line card description
category: uiux
year: 2026
month: 3
coverImage: /works/my-project/cover.png
liveUrl: https://example.com
---

## Context

Write your article here.
```

## Required Frontmatter

- `title`
- `subtitle`
- `category` (`uiux` or `automotive`)
- `year`
- `month`
- `coverImage` (public path)

## Image Organization

- Keep images in `public/works/<slug>/...`
- Reference them in MDX with absolute public paths, for example:
  `![Alt text](/works/my-project/process/screen-1.png)`

## Auto-Generated Works Cards

Any valid `content/projects/<slug>/index.mdx` file is automatically:

- shown on `/works`,
- linked to `/works/<slug>`,
- ordered by newest (`year` + `month`).
