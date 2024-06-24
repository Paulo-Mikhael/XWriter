import Title from "../Title";
import { twHeaderStyles } from "./styled";
import PerfilPhoto from "./PerfilPhoto";

export default function Header() {
  return (
    <header className={twHeaderStyles}>
      <Title>
        <img src="icons/logo-v1.png" className="w-8 h-8" /> XWriter
      </Title>
      <div className="flex items-center gap-4">
        <PerfilPhoto />
      </div>
    </header>
  );
}