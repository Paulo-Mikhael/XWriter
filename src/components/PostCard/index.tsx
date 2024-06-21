import { initializeApp } from "firebase/app";
import { IPostCard } from "../../interfaces";
import { ActualUser } from "../../util";
import { getAuth } from "firebase/auth";

export default function PostCard({ postText, userEmail, dateHour }: IPostCard) {
  const credentials = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
  const app = initializeApp(credentials);
  const auth = getAuth(app);
  return (
    <div className={`${userEmail === ActualUser(auth) ? "bg-sky-200" : "bg-white"} p-6 rounded-md`}>
      <h1 className="text-xl font-semibold overflow-hidden text-ellipsis">
        {postText}
      </h1>
      <div className="w-full flex h-5 mt-7 items-center justify-between">
        <h2 className="text-lg text-sky-500">
          {userEmail}
        </h2>
        <h3>
          {`${dateHour.toLocaleString()} ${dateHour.getHours() > 12 ? "PM" : "AM"}`}
        </h3>
      </div>
    </div>
  );
}