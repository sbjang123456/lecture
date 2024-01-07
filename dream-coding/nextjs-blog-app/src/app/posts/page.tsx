import type { Metadata } from 'next';
import React from 'react';
import FilterablePosts from 'components/FilterablePosts';
import { getAllPosts } from 'service/posts';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'FE 관련 블로그 글',
};

export default async function page() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
