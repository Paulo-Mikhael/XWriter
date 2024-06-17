import { IPostCard } from "../../interfaces";
import Button from "../Button";
import PostCard from "../PostCard";
import { twPStyles, twTextareaStyles } from "./styled";

export default function TextareaPost() {
  const card: IPostCard = {
    postText: "#7DOC React",
    userEmail: "test@gmail.com",
    dateHour: new Date("2022-01-15T12:40")
  }

  return (
    <div className="flex flex-col gap-3">
      <p className={twPStyles}>
        Poste algum momento interessante...
      </p>
      <textarea className={twTextareaStyles} name="textareaPost" id="textareaPost"></textarea>
      <div className="flex justify-between">
        <p className={`${twPStyles} text-green-500 font-bold`}>
          Você ainda pode digitar 255 caracteres
        </p>
        <Button background="bg-sky-500" width="w-20">
          Postar
        </Button>
      </div>
      <PostCard {...card} />
    </div>
  );
}