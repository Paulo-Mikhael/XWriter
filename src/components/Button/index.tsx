import { buttonStyles } from "./styled";

interface Props{
  children: React.ReactNode,
  type?: "button" | "reset" | "submit" | undefined,
  disabled?: boolean,
  disabledBackground?: string,
  background?: string,
  width?: string,
  onClick?: () => void
}

export default function Button({ children, type, disabled, background, width, onClick, disabledBackground }: Props){
  return (
    <button 
      type={type ? type : "button"} 
      className={`
        ${buttonStyles} 
        ${disabled === true ? 'bg-emerald-700 cursor-not-allowed' : ''}
        ${disabled === true && disabledBackground ? `${disabledBackground} cursor-not-allowed` : ''}
        ${background ? background : ""}
        ${width ? width : ""}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}