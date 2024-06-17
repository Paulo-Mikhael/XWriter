interface Props{
  postText: string,
  userEmail: string,
  dateHour: Date
}

export default function PostCard({ postText, userEmail, dateHour }: Props) {
  return (
    <div className="bg-white mt-10 p-6">
      <h1 className="text-xl font-semibold">
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