import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
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
  const auth = getAuth(app);

  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">{auth?.currentUser?.email}</div>
          <div className="profile__name">
            {auth?.currentUser?.displayName ?? ""}
          </div>
        </div>
      </div>
      <div role="presentation" className="profile__logout" onClick={onSingOut}>
        로그아웃
      </div>
    </div>
  );
}
