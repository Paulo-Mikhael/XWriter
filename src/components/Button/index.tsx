import { buttonStyles } from "./styled";

interface Props{
  children: React.ReactNode,
  type?: "button" | "reset" | "submit" | undefined,
  disabled?: boolean,
  background?: string
}

export default function Button({ children, type, disabled, background }: Props){
  return (
    <button 
      type={type ? type : "button"} 
      className={`
        ${buttonStyles} 
        ${disabled === true ? 'bg-emerald-700 cursor-not-allowed' : ''}
        ${background ? background : ""}
      `}
    >
      {children}
    </button>
  );
}