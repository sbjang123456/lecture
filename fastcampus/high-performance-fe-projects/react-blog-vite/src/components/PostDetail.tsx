export default function PostDetail() {
  return (
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">posttitle</div>
      </div>
      <div className="post__profile-box">
        <div className="post__profile" />
        <div className="post__author-name">author</div>
        <div className="post__date">date</div>
      </div>
      <div className="post__utils-box">
        <div className="post__delete">삭제</div>
        <div className="post__edit">수정</div>
      </div>
      <div className="post__text">contents</div>
    </div>
  );
}
