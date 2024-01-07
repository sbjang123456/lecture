import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import FollowingBar from 'components/FollowingBar';
import PostList from 'components/PostList';
import SideBar from 'components/SideBar';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin');
  }

  const user = session.user;

  return (
    <section className="flex w-full max-w-[850px] flex-col p-4 md:flex-row">
      <div className="w-full basis-3/4">
        <FollowingBar />
        <PostList />
      </div>
      <div className="ml-8 basis-1/4">
        <SideBar user={user} />
      </div>
    </section>
  );
}
