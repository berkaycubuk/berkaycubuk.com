import { getCollection } from 'astro:content';
import moment from 'moment';
import { SITE } from '../data/site';

// llms.txt per https://llmstxt.org — a curated entry point for AI assistants.
export async function GET() {
  const posts = (await getCollection('writings')).sort(
    (a, b) => moment(b.data.date).valueOf() - moment(a.data.date).valueOf()
  );
  const tools = await getCollection('tools');

  const postLine = (post: (typeof posts)[number]) => {
    const url = `${SITE.url}/${moment(post.data.date).format('YYYY/MM/DD')}/${post.slug}/`;
    const desc = post.data.description ? `: ${post.data.description}` : '';
    return `- [${post.data.title}](${url})${desc}`;
  };

  const body = `# ${SITE.nameAscii}

> ${SITE.description}

Independent software engineer. Projects are fixed-price, scoped on a free
20-minute call, delivered in two weeks, and handed off documented so they keep
running without ongoing involvement.

## Key pages

- [Home](${SITE.url}/): services, process, selected work, client FAQ
- [About](${SITE.url}/about/): background and ways of working
- [Projects](${SITE.url}/projects/): things I've built
- [Writings](${SITE.url}/writings/): all posts
- [RSS feed](${SITE.url}/rss.xml)

## Tools

${tools.map((t) => `- [${t.data.title}](${SITE.url}/tools/${t.slug}/)${t.data.description ? `: ${t.data.description}` : ''}`).join('\n')}

## Recent writings

${posts.slice(0, 12).map(postLine).join('\n')}

## Contact

- Email: berkay@berkaycubuk.com
- GitHub: https://github.com/berkaycubuk
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
