import MultiCarousel from 'components/MultiCarousel';
import PostCard from 'components/PostCard';
import { getNonFeaturedPosts } from 'service/posts';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className="my-4">
      <h2 className="my-2 text-2xl font-bold">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
