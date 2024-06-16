import { buttonStyles } from "./styled";

interface Props{
  children: React.ReactNode,
  type?: "button" | "reset" | "submit" | undefined,
  disabled?: boolean
}

export default function Button({ children, type, disabled }: Props){
  return (
    <button type={type ? type : "button"} className={`${buttonStyles} ${disabled === true ? 'bg-emerald-700 cursor-not-allowed' : ''}`}>
      {children}
    </button>
  );
}