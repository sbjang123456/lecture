import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = true }: PostListProps) {
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div className="post__navigation--active">전체</div>
          <div>나의 글</div>
        </div>
      )}
      <div className="post__list">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="post__box">
            <Link to={`/posts/${i}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">author</div>
                <div className="post__date">date</div>
              </div>
              <div className="post__title">title</div>
              <div className="post__text">contents</div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
