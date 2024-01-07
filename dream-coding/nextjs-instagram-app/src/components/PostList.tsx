'use client';
import React from 'react';
import useSWR from 'swr';
import PostListCard from 'components/PostListCard';
import GridSpinner from 'components/ui/GridSpinner';
import type { SimplePost } from 'model/post';

export default function PostList() {
  const {
    data: posts,
    isLoading: loading,
    isError,
  } = useSWR<SimplePost[]>('/api/posts');

  return (
    <section>
      {loading && (
        <div className="mt-32 text-center">
          <GridSpinner color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className="mb-4">
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
