import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import moment from 'moment';

export async function GET(context: any) {
  const posts = await getCollection('writings');
  const sortedPosts = posts.sort(
    (a, b) => moment(b.data.date).valueOf() - moment(a.data.date).valueOf()
  );

  return rss({
    title: "Berkay's Space on the Internet",
    description: "Hi, I'm Berkay and this is my space on the internet. I write, tinker and build things.",
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description || '',
      link: `/${moment(post.data.date).format('YYYY/MM/DD')}/${post.slug}/`,
    })),
  });
}
