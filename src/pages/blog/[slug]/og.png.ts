import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';

interface Props {
  params: { slug: string };
  props: { post: CollectionEntry<'blog'> };
}

export async function GET({ props }: Props) {
  const { post } = props

  const PoppinsBold = fs.readFileSync(path.resolve('./src/fonts/Poppins-Bold.ttf'))
  const PoppinsRegular = fs.readFileSync(path.resolve('./src/fonts/Poppins-Regular.ttf'))

  const html = {
    type: 'div',
    props: {
      children: [
        {
          type: 'div',
          props: {
            style: {
              fontFamily: 'Poppins Bold',
            },
            children: post.data.title,
            tw: 'text-6xl font-bold shrink p-20 leading-tight',
          },
        },
        {
          type: 'div',
          props: {
            style: {
              fontFamily: 'Poppins Regular',
            },
            children: 'berkaycubuk.com',
            tw: 'absolute bottom-4 text-2xl text-blue-600',
          },
        },
      ],
      tw: 'w-full h-full flex flex-col items-center justify-center bg-white',
    },
  }

  return new ImageResponse(
    html,
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'Poppins Bold',
          data: PoppinsBold.buffer,
          style: 'normal',
        },
        {
          name: 'Poppins Regular',
          data: PoppinsRegular.buffer,
          style: 'normal',
        },
      ],
    }
  );
}

// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
  const blogPosts = await getCollection('blog');
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
