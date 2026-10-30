import { getCollection } from 'astro:content';
import moment from 'moment';
import { SITE, notePath, noteFallbackTitle } from '../data/site';

// llms.txt per https://llmstxt.org — a curated entry point for AI assistants.
export async function GET() {
  const posts = (await getCollection('writings')).sort(
    (a, b) => moment(b.data.date).valueOf() - moment(a.data.date).valueOf()
  );
  const tools = await getCollection('tools');
  const notes = (await getCollection('notes')).sort(
    (a, b) => moment(b.data.date).valueOf() - moment(a.data.date).valueOf()
  );

  const postLine = (post: (typeof posts)[number]) => {
    const url = `${SITE.url}/${moment(post.data.date).format('YYYY/MM/DD')}/${post.slug}/`;
    const desc = post.data.description ? `: ${post.data.description}` : '';
    return `- [${post.data.title}](${url})${desc}`;
  };

  const body = `# ${SITE.nameAscii}

> ${SITE.description}

Independent AI engineer based in Istanbul, working worldwide, with 5+ years of
software experience. Builds AI agents and LLM automations that run in
production, with guardrails enforced in code: confirmation before payments,
bookings or messages, allow-listed sites, and web content treated as data.
Most recently AI Engineer at Paribu, a crypto exchange. Own work includes Tamo
(a personal assistant with its own browser and terminal) and Fabrika (multi-agent
coding orchestration with review gates). Contact is by email.

Every writing, note and tool page has a Markdown version: replace the
trailing slash with .md (e.g. /2026/10/30/some-post/ -> /2026/10/30/some-post.md).

## Key pages

- [Home](${SITE.url}/): principles, case studies, process, client quotes
- [Work](${SITE.url}/work/): AI and client case studies
- [About](${SITE.url}/about/): background and ways of working
- [Projects](${SITE.url}/projects/): things I've built
- [Writings](${SITE.url}/writings/): all posts
- [Notes](${SITE.url}/notes/): short link posts with commentary
- [RSS feed](${SITE.url}/rss.xml)

## Tools

${tools.map((t) => `- [${t.data.title}](${SITE.url}/tools/${t.slug}/)${t.data.description ? `: ${t.data.description}` : ''}`).join('\n')}

## Recent writings

${posts.slice(0, 12).map(postLine).join('\n')}

## Recent notes

${notes.slice(0, 12).map((n) => `- [${n.data.title || noteFallbackTitle(n.data.date)}](${SITE.url}${notePath(n.data.date, n.slug)}/)`).join('\n')}

## Contact

- Email: berkay@berkaycubuk.com
- GitHub: https://github.com/berkaycubuk
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
