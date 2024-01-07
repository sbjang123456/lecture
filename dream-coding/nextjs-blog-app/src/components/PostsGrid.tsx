import PostCard from 'components/PostCard';
import type { Post } from 'service/posts';

type Props = {
  posts: Post[];
};
export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
