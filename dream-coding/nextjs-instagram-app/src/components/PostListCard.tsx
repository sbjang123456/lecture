'use client';
import Image from 'next/image';
import { useState } from 'react';
import ActionBar from 'components/ActionBar';
import CommentForm from 'components/CommentForm';
import PostDetail from 'components/PostDetail';
import PostModal from 'components/PostModal';
import PostUserAvatar from 'components/PostUserAvatar';
import ModalPortal from 'components/ui/ModalPortal';
import type { SimplePost } from 'model/post';

type Props = {
  post: SimplePost;
  priority?: boolean;
};
export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <article className="rounded-lg border border-gray-200 shadow-md">
      <PostUserAvatar image={userImage} username={username} />
      <Image
        className="aspect-square w-full object-cover"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}
