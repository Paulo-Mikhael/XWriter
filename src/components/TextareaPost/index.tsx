import { IPostCard } from "../../interfaces";
import Button from "../Button";
import PostCard from "../PostCard";
import { twPStyles, twTextareaStyles } from "./styled";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function TextareaPost() {
  const card: IPostCard = {
    postText: "#7DOC React",
    userEmail: "test@gmail.com",
    dateHour: new Date("2022-01-15T12:40")
  }

  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyATQwKCJCDpWVW0R_BTnVgYBnIO3tnKCgU",
    authDomain: "xwriter-132.firebaseapp.com",
    projectId: "xwriter-132",
    storageBucket: "xwriter-132.appspot.com",
    messagingSenderId: "196993488467",
    appId: "1:196993488467:web:34ec4bb0935891d727d8a6",
    measurementId: "G-7XDR1CCR30"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  console.log(auth);
  console.log(analytics);

  function Auth() {
    signInWithEmailAndPassword(auth, "paulomiguelbentes@gmail.com", "firebase123")
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Usuário logado:", user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("Erro de autenticação:", errorCode, errorMessage);
      });
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
        <div className="w-20">
          <Button background="bg-sky-500" onClick={() => Auth()}>
            Postar
          </Button>
        </div>
      </div>
      <PostCard {...card} />
    </div>
  );
}