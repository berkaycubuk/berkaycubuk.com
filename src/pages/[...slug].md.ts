import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import moment from 'moment';
import { renderMarkdown } from '../data/markdown';

export async function getStaticPaths() {
  const posts = await getCollection('writings');
  return posts.map((post) => ({
    params: { slug: `${moment(post.data.date).format('YYYY/MM/DD')}/${post.slug}` },
    props: post,
  }));
}

export const GET: APIRoute = ({ params, props: post }) =>
  renderMarkdown({
    collection: 'writings',
    id: post.id,
    body: post.body,
    title: post.data.title,
    path: `/${params.slug}`,
    meta: {
      description: post.data.description,
      date: moment(post.data.date).format('YYYY-MM-DD'),
      updated: post.data.date_updated && moment(post.data.date_updated).format('YYYY-MM-DD'),
    },
  });
