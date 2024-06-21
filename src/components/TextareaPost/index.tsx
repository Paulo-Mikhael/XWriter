import { useEffect, useState } from "react";
import { IPostCard } from "../../interfaces";
import Button from "../Button";
import PostCard from "../PostCard";
import { twPStyles, twTextareaStyles } from "./styled";
import { ActualUser } from "../../util";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { v4 as uuidV4 } from 'uuid';

export default function TextareaPost() {
  const credentials = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
  const app = initializeApp(credentials);
  const auth = getAuth(app);
  const database = getDatabase(app);
  const [postText, setPostText] = useState<string>("");
  const [cards, setCards] = useState<IPostCard[]>([]);

  function post(text: string) {
    if (text !== "") {
      const date = new Date();
      const isoDate = date.toISOString();
      const newPost: IPostCard = {
        id: uuidV4(),
        postText: postText,
        userEmail: ActualUser(auth),
        dateHour: new Date(isoDate)
      }
      writeUserData(newPost);
      setPostText("");
    }
  }
  function writeUserData(newPost: IPostCard) {
    set(ref(database, 'users/' + newPost.id), {
      postText: newPost.postText,
      userEmail: newPost.userEmail,
      dateHour: String(newPost.dateHour)
    });
  }
  function readUsersData() {
    onValue(ref(database, 'users/'), (snapshot) => {
      const users = snapshot.val();
      const updatedCards: IPostCard[] = []
      setCards([]);

      for (const userId in users) {
        const user: IPostCard = users[userId];
        const newPost: IPostCard = {
          id: userId,
          userEmail: user.userEmail,
          postText: user.postText,
          dateHour: new Date(user.dateHour)
        }
        
        if (!cards.find(post => post.id === newPost.id)) {
          updatedCards.push(newPost);
        }
      }

      setCards(posts => [...posts, ...updatedCards]);
    });
  }
  useEffect(() => {
    readUsersData();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <p className={twPStyles}>
        Poste algum momento interessante...
      </p>
      <textarea
        className={twTextareaStyles}
        name="textareaPost"
        id="textareaPost"
        maxLength={250}
        value={postText}
        onChange={(evt) => {
          setPostText(evt.target.value);
        }}
      ></textarea>
      <div className="flex justify-between">
        <p className={`${twPStyles} text-green-500 font-bold`}>
          Você ainda pode digitar {`${250 - postText.length}`} caracteres<br/><b className="text-black">{cards.length} Posts</b>
        </p>
        <div className="w-20">
          <Button
            disabledBackground="bg-sky-700"
            background="bg-sky-500"
            onClick={() => post(postText)}
            disabled={postText === "" ? true : false}
          >
            Postar
          </Button>
        </div>
      </div>
      <div className="w-full h-80 overflow-y-scroll flex flex-col gap-4">
        {cards.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}