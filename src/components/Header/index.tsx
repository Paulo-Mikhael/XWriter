import { ActualUser } from "../../util";
import Button from "../Button";
import Title from "../Title";
import { twHeaderStyles } from "./styled";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { initializeFirebase } from "../../data";

export default function Header() {
  const app = initializeFirebase;
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
        <img src="icons/logo-v1.png" className="w-8 h-8" />XWriter
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