import { ActualUser } from "../../util";
import Title from "../Title";
import { twHeaderStyles } from "./styled";
import PerfilPhoto from "../PerfilPhoto";
import { firebaseAuth } from "../../data";

export default function Header() {
  const auth = firebaseAuth;

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