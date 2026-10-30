import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  const publishedPosts = posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Đặng Danh | Portfolio & Tech Blog',
    description: 'Chia sẻ chuyên sâu về AI Engineering, Modern Web Architecture và Kỹ thuật Phần mềm.',
    site: context.site || 'https://dangdanh090106.github.io',
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>vi-VN</language>`,
  });
}
