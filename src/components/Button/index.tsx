import { buttonStyles } from "./styled";

interface Props{
  children: React.ReactNode,
  type?: "button" | "reset" | "submit" | undefined,
  disabled?: boolean,
  disabledBackground?: string,
  background?: string,
  width?: string,
  onClick?: () => void,
  childrenAnimation?: string
}

export default function Button({ children, type, disabled, background, width, onClick, disabledBackground, childrenAnimation }: Props){
  return (
    <button 
      type={type ? type : "button"} 
      className={`
        ${buttonStyles} 
        ${disabled === true ? `bg-emerald-700 cursor-not-allowed ${disabledBackground ? disabledBackground : ""}` : ''}
        ${background ? background : ""}
        ${width ? width : ""}
      `}
      onClick={onClick}
    >
      <p className={childrenAnimation ? childrenAnimation : ""}>
        {children}
      </p>
    </button>
  );
}