import { buttonStyles } from "./styled";

interface Props{
  children: React.ReactNode
}

export default function Button({ children }: Props){
  return (
    <button className={buttonStyles}>
      {children}
    </button>
  );
}