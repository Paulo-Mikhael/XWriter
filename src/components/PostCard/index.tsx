import { IPostCard } from "../../interfaces";
import { ActualUser } from "../../util";
import { getAuth } from "firebase/auth";
import { initializeFirebase } from "../../data";

export default function PostCard({ postText, userEmail, dateHour }: IPostCard) {
  const app = initializeFirebase;
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