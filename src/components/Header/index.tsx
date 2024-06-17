import Button from "../Button";
import Title from "../Title";
import { twHeaderStyles } from "./styled";

export default function Header() {
  return (
    <header className={twHeaderStyles}>
      <Title>
        xwriter
      </Title>
      <div className="flex items-center gap-4">
        test@gmail.com
        <Button background="bg-red-500" width="w-12">
          Sair
        </Button>
      </div>
    </header>
  );
}