import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import moment from 'moment';
import { notePath, noteFallbackTitle } from '../../data/site';
import { renderMarkdown } from '../../data/markdown';

export async function getStaticPaths() {
  const notes = await getCollection('notes');
  return notes.map((note) => ({
    params: { slug: notePath(note.data.date, note.slug).replace(/^\/notes\//, '') },
    props: note,
  }));
}

export const GET: APIRoute = ({ props: note }) =>
  renderMarkdown({
    collection: 'notes',
    id: note.id,
    body: note.body || '',
    title: note.data.title || noteFallbackTitle(note.data.date),
    path: notePath(note.data.date, note.slug),
    meta: {
      date: moment(note.data.date).utcOffset('+03:00').format(),
      link: note.data.link,
      source_author: note.data.author,
      via: note.data.via,
    },
  });
