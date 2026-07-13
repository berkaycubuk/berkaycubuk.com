import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import moment from 'moment';
import { SITE, notePath, noteFallbackTitle } from '../data/site';

export async function GET(context: any) {
  const posts = [
    ...(await getCollection('writings')),
    ...(await getCollection('notes')),
  ].sort((a, b) => moment(b.data.date).valueOf() - moment(a.data.date).valueOf());

  const site = (context.site?.toString() || SITE.url).replace(/\/$/, '');
  const container = await AstroContainer.create();

  const items = await Promise.all(
    posts.map(async (post) => {
      const { Content } = await post.render();
      let content = await container.renderToString(Content);
      // Rewrite root-relative URLs (images, links) to absolute so readers can resolve them.
      content = content.replace(/(href|src)="\/(?!\/)/g, `$1="${site}/`);

      const link =
        post.collection === 'notes'
          ? `${notePath(post.data.date, post.slug)}/`
          : `/${moment(post.data.date).format('YYYY/MM/DD')}/${post.slug}/`;

      return {
        title: post.data.title || noteFallbackTitle(post.data.date),
        pubDate: new Date(post.data.date),
        description: post.data.description || '',
        content,
        link,
      };
    })
  );

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items,
  });
}
