import { h1Styles } from "./styled";

export default function Title({ children }: { children: React.ReactNode }){
  return (
    <h1 className={h1Styles}>
      {children}
    </h1>
  );
}