import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CATEGORIES, CategoryType, PostProps } from "components/PostList";

export default function PostForm() {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState<PostProps | null>(null);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<CategoryType | string>("");

  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const dataObj = { ...docSnap.data(), id: docSnap.id };
        setPost(dataObj as PostProps);
      }
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (post) {
        // firestore 데이터 수정
        const postRef = doc(db, "posts", post.id);
        await updateDoc(postRef, {
          title,
          summary,
          content,
          category,
          updatedAt: new Date().toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        });
        toast.success("게시글이 수정되었습니다.");
        navigate(`/posts/${post.id}`);
      } else {
        // firestore 데이터 생성
        await addDoc(collection(db, "posts"), {
          title,
          summary,
          content,
          category,
          createdAt: new Date().toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          email: user?.email,
          uid: user?.uid,
        });
        toast.success("게시글이 작성되었습니다.");
      }
      navigate("/");
    } catch (e: any) {
      toast.error("게시글 작성에 실패했습니다.");
    }
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "summary") {
      setSummary(value);
    }
    if (name === "content") {
      setContent(value);
    }
    if (name === "category") {
      setCategory(value);
    }
  };

  useEffect(() => {
    if (params?.id) {
      getPost(params.id);
    }
  }, [params?.id]);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setSummary(post.summary);
      setContent(post.content);
      setCategory(post.category);
    }
  }, [post]);

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="form__block">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={onChange}
          value={title}
        />
      </div>
      <div className="form__block">
        <label htmlFor="category">카테고리</label>
        {/* <input
          type="text"
          id="category"
          name="category"
          required
          onChange={onChange}
          value={category}
        /> */}
        <select
          name="category"
          id="category"
          onChange={onChange}
          defaultValue={category}
        >
          <option value="">카테고리를 선택해주세요</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="form__block">
        <label htmlFor="summary">요약</label>
        <input
          type="text"
          id="summary"
          name="summary"
          required
          onChange={onChange}
          value={summary}
        />
      </div>
      <div className="form__block">
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          name="content"
          required
          onChange={onChange}
          value={content}
        />
      </div>
      <div className="form__block">
        <input
          type="submit"
          value={post ? "수정" : "제출"}
          className="form__btn--submit"
        />
      </div>
    </form>
  );
}
