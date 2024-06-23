import { ActualUser } from "../../util";
import Title from "../Title";
import { twHeaderStyles } from "./styled";
import { getAuth } from "firebase/auth";
import { initializeFirebase } from "../../data";
import PerfilPhoto from "../PerfilPhoto";

export default function Header() {
  const app = initializeFirebase;
  const auth = getAuth(app);

  return (
    <header className={twHeaderStyles}>
      <Title>
        <img src="icons/logo-v1.png" className="w-8 h-8" /> XWriter
      </Title>
      <div className="flex items-center gap-4">
        {ActualUser(auth) !== "not found" ? ActualUser(auth) : ""}
        <PerfilPhoto />
      </div>
    </header>
  );
}