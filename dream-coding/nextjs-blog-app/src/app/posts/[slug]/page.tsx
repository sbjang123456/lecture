import Image from 'next/image';
import AdjacentPostCard from 'components/AdjacentPostCard';
import PostContent from 'components/PostContent';
import { getAllPosts, getPostData } from 'service/posts';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function page({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;
  return (
    <article className="m-4 overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
      <Image
        className="h-1/5 max-h-[500px] w-full"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.path }));
}
