'use client';

import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Avatar from 'components/Avatar';
import ScrollableBar from 'components/ui/ScrollableBar';
import type { DetailUser } from 'model/user';

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;
  //   const users = undefined;

  return (
    <section className="relative z-0 mb-4 flex min-h-[90px] w-full items-center justify-center overflow-x-auto rounded-lg p-4 shadow-sm shadow-neutral-300">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className="flex w-20 flex-col items-center"
              href={`/user/${username}`}
            >
              <Avatar image={image} highlight />
              <p className="w-full overflow-hidden text-ellipsis text-center text-sm">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
