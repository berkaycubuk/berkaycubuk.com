import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderMarkdown } from '../../data/markdown';

export async function getStaticPaths() {
  const tools = await getCollection('tools');
  return tools.map((tool) => ({
    params: { slug: tool.slug },
    props: tool,
  }));
}

export const GET: APIRoute = ({ props: tool }) =>
  renderMarkdown({
    collection: 'tools',
    id: tool.id,
    body: tool.body,
    title: tool.data.title,
    path: `/tools/${tool.slug}`,
    meta: {
      description: tool.data.description,
      version: tool.data.version,
    },
  });
