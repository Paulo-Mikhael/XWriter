import { inputStyles } from "./styled";

export default function Input({ placeholder }: { placeholder: string }) {
  return (
    <>
      <input
        type="text"
        className={inputStyles}
        placeholder={placeholder}
      />  
    </>
  );
}