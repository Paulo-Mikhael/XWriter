import { useEffect, useState } from "react"
import Button from "../../components/Button"
import Title from "../../components/Title"
import { inputContainerStyles, sectionStyles, inputStyles } from "./styled"

function Home() {
  const [email, setEmail] = useState<string>("");
  const [emailSituation, setEmailSituation] = useState<"initial" | "valid" | "blank" | "invalid">("initial");
  const [password, setPassword] = useState<string>("");
  const [passwordSituation, setPasswordSituation] = 
    useState<"initial" | "safe" | "noSpecialCharacters" | "blank" | "noNumber" | "noUpperLetter">("initial");

  const emailDomains: string[] = [
    "@gmail.com",
    "@outlook.com",
    "@hotmail.com",
    "@yahoo.com",
    "@icloud.com",
    "@aol.com",
    "@protonmail.com",
    "@yandex.com",
    "@mail.com",
    "@gmx.com",
    "@zoho.com",
    "@live.com",
    "@rediffmail.com",
    "@inbox.com",
    "@mail.ru",
    "@ymail.com",
  ];
  const specialCharacters: string[] = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "\"", "'", "<", ">", ".",
     "?", "/", "~", "`",
  ];

  useEffect(() => {
    if (passwordSituation !== "initial" && password === ""){
      setPasswordSituation("blank");
    }
    else if (passwordSituation !== "initial" && itHas(password, specialCharacters) === false){
      setPasswordSituation("noSpecialCharacters");
    }
    else{
      setPasswordSituation("safe");
    }
    console.log(passwordSituation);
  }, [password]);
  
  useEffect(() => {
    if (emailSituation !== "initial" && email === ""){
      setEmailSituation("blank") 
    }
    else if (emailSituation !== "initial" && itHas(email, emailDomains) === false){
      setEmailSituation("invalid")
    }
    else{
      setEmailSituation("valid");
    }
  }, [email]);

  function itHas(text: string, stringArray: string[]){
    for (let i=0; i < stringArray.length; i++){
      if (text.includes(stringArray[i]) && text.replace(stringArray[i], "") !== ""){
        return true;
      }
    }
    
    return false;
  }

  return (
    <section className={sectionStyles}>
      <Title>
        XWriter
      </Title>
      <form className={inputContainerStyles}>
        <input 
          className={`${inputStyles} ${emailSituation !== "valid" ? "border-red-400 border-b-red-400 focus:border-red-400" : ""}`} 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
            itHas(evt.target.value, emailDomains);
          }}
          required
        />
        <input 
          className={`${inputStyles} ${passwordSituation !== "safe" ? "border-red-400 border-b-red-400 focus:border-red-400" : ""}`} 
          type="password" 
          placeholder="Senha" 
          value={password}
          onChange={(evt) => {
            setPassword(evt.target.value)
          }}
          required
        />
        <ul className="list-disc list-inside">
          <li className={`text-red-400 ${emailSituation === "blank" ? "initial" : "hidden"}`}>
            O campo 'Email' não pode ficar vazio
          </li>
          <li className={`text-red-400 ${emailSituation === "invalid" ? "initial" : "hidden"}`}>
            Email inválido
          </li>
          <li className={`text-red-400 ${passwordSituation === "noSpecialCharacters" ? "initial" : "hidden"}`}>
            A senha precisa ter ao menos um caractere especial
          </li>
          <li className={`text-red-400 ${passwordSituation === "blank" ? "initial" : "hidden"}`}>
            O campo 'Senha' não pode ficar vazio
          </li>
        </ul>
        <Button type="submit">
          Acessar Plataforma
        </Button>
      </form>
      <p className="font-medium">
        Não possui uma conta? <b className="text-sky-400 cursor-pointer">Crie uma agora!</b>
      </p>
    </section>
  )
}

export default Home