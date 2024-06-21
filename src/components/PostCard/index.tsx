import { IPostCard } from "../../interfaces";

export default function PostCard({ postText, userEmail, dateHour }: IPostCard) {
  return (
    <div className="bg-white p-6">
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