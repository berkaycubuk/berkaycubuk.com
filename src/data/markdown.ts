// Markdown versions of pages for AI agents: append .md to a post, note or
// tool URL (e.g. /2026/10/30/some-post.md) to get its source as Markdown.

import { SITE } from './site';

// Images that sit next to a post (./photo.jpeg) are hashed into /_astro/ at
// build time, so map each one to its built URL.
const images = import.meta.glob<{ src: string }>('/src/content/**/*.{jpg,jpeg,png,webp,gif,svg}', {
  eager: true,
  import: 'default',
});

// URL of the Markdown version for a page path like /2026/10/30/some-post.
export function markdownPath(pagePath: string): string {
  return `${pagePath.replace(/\/$/, '')}.md`;
}

type Doc = {
  collection: string;
  // Entry id, e.g. "some-post/index.md"; used to resolve relative images.
  id: string;
  body: string;
  title: string;
  // Page path without trailing slash, e.g. /2026/10/30/some-post
  path: string;
  meta?: Record<string, unknown>;
};

export function renderMarkdown({ collection, id, body, title, path, meta = {} }: Doc): Response {
  const dir = `/src/content/${collection}/${id.includes('/') ? id.slice(0, id.lastIndexOf('/')) : ''}`.replace(/\/$/, '');

  const resolved = body.replace(/(!?\[[^\]]*\]\()(\.\/[^)\s]+|[^)\s:/]+\.(?:jpe?g|png|webp|gif|svg))/gi, (match, prefix, ref) => {
    const image = images[`${dir}/${ref.replace(/^\.\//, '')}`];
    return image ? `${prefix}${new URL(image.src, SITE.url).href}` : match;
  });

  const header = Object.entries({ url: `${SITE.url}${path}/`, author: SITE.nameAscii, ...meta })
    .filter(([, value]) => value != null && value !== '')
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join('\n');

  // Relative site links (/about) become absolute so they work outside the page.
  const content = resolved.replace(/\]\(\/(?!\/)/g, `](${SITE.url}/`);

  return new Response(`---\n${header}\n---\n\n# ${title}\n\n${content.trim()}\n`, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
