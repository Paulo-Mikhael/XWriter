import { initializeApp } from "firebase/app";
import { ActualUser } from "../../util";
import Button from "../Button";
import Title from "../Title";
import { twHeaderStyles } from "./styled";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const credentials = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
  const app = initializeApp(credentials);
  const auth = getAuth(app);
  const navigate = useNavigate();

  function SignOut() {
    signOut(auth).then(() => {
      console.log("Sessão terminada");
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <header className={twHeaderStyles}>
      <Title>
        xwriter
      </Title>
      <div className="flex items-center gap-4">
        {ActualUser(auth) !== "not found" ? ActualUser(auth) : ""}
        <Button background="bg-red-500" width="w-12" onClick={() => SignOut()}>
          Sair
        </Button>
      </div>
    </header>
  );
}