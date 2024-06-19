import { buttonStyles } from "./styled";

interface Props{
  children: React.ReactNode,
  type?: "button" | "reset" | "submit" | undefined,
  disabled?: boolean,
  background?: string,
  width?: string,
  onClick?: () => void
}

export default function Button({ children, type, disabled, background, width, onClick }: Props){
  return (
    <button 
      type={type ? type : "button"} 
      className={`
        ${buttonStyles} 
        ${disabled === true ? 'bg-emerald-700 cursor-not-allowed' : ''}
        ${background ? background : ""}
        ${width ? width : ""}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}