import { useEffect, useState } from "react"
import Button from "../../components/Button"
import Title from "../../components/Title"
import { inputContainerStyles, sectionStyles, inputStyles, ulStyles } from "./styled"

function Home() {
  const [email, setEmail] = useState<string>("");
  const [emailSituation, setEmailSituation] = useState<null | "valid" | "blank" | "invalid">(null);
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

  useEffect(() => {
    if (emailSituation && email === ""){
      setEmailSituation("blank") 
    }
    else if (emailSituation && validEmail(email) === false){
      setEmailSituation("invalid")
    }
    else{
      setEmailSituation("valid");
    }
  }, [email]);

  function validEmail(inputEmail: string){
    for (let i=0; i < emailDomains.length; i++){
      if (inputEmail.includes(emailDomains[i]) && inputEmail.replace(emailDomains[i], "") !== ""){
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
            validEmail(evt.target.value);
          }}
          required
        />
        <input 
          className={inputStyles} 
          type="password" 
          placeholder="Senha" 
          required
        />
        <ul className={`${ulStyles} ${emailSituation === "valid" ? "hidden" : "block"}`}>
          <li className={`text-red-400 ${emailSituation === "blank" ? "block" : "hidden"}`}>
            O campo 'Email' não pode ficar vazio
          </li>
          <li className={`text-red-400 ${emailSituation === "invalid" ? "block" : "hidden"}`}>
            Email inválido
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