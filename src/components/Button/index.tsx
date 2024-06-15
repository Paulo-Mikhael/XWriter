import { buttonStyles } from "./styled";

interface Props{
  children: React.ReactNode,
  type?: "button" | "reset" | "submit" | undefined
}

export default function Button({ children, type }: Props){
  return (
    <button type={type ? type : "button"} className={buttonStyles}>
      {children}
    </button>
  );
}