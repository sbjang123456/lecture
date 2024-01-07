'use client';
import { useState } from 'react';
import Categories from 'components/Categories';
import PostsGrid from 'components/PostsGrid';
import type { Post } from 'service/posts';

const ALL_POSTS = 'All Posts';

type Props = {
  posts: Post[];
  categories: string[];
};

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="m-4 flex">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
