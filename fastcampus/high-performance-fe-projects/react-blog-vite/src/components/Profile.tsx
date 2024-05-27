import AuthContext from "context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { useContext } from "react";
import { toast } from "react-toastify";

const onSingOut = async () => {
  try {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success("로그아웃 되었습니다.");
  } catch (e: any) {
    console.log(e);
    toast.error(e?.code);
  }
};

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">{user?.email}</div>
          <div className="profile__name">{user?.displayName ?? ""}</div>
        </div>
      </div>
      <div role="presentation" className="profile__logout" onClick={onSingOut}>
        로그아웃
      </div>
    </div>
  );
}
