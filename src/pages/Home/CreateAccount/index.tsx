import Button from "../../../components/Button";
import Title from "../../../components/Title";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { inputContainerStyles, inputStyles, sectionStyles } from "../styled";
import { upperLetters, numerals, specialCharacters, emailDomains, Users } from "../../../data";
import { itHas } from "../../../util";
import { Account } from "../../../interfaces/account";

export default function CreateAccount() {
  const [email, setEmail] = useState<string>("");
  const [emailSituation, setEmailSituation] = useState<"initial" | "valid" | "blank" | "invalid">("initial");
  const [password, setPassword] = useState<string>("");
  const [passwordSituation, setPasswordSituation] =
    useState<"initial" | "safe" | "noSpecialCharacters" | "blank" | "noNumber" | "noUpperLetter">("initial");
  const navigate = useNavigate();

  useEffect(() => {
    if (passwordSituation !== "initial" && password === "") {
      setPasswordSituation("blank");
    }
    else if (passwordSituation !== "initial" && itHas(password, upperLetters) === false) {
      setPasswordSituation("noUpperLetter");
    }
    else if (passwordSituation !== "initial" && itHas(password, numerals) === false) {
      setPasswordSituation("noNumber");
    }
    else if (passwordSituation !== "initial" && itHas(password, specialCharacters) === false) {
      setPasswordSituation("noSpecialCharacters");
    }
    else {
      setPasswordSituation("safe");
    }
  }, [password]);

  useEffect(() => {
    if (emailSituation !== "initial" && email === "") {
      setEmailSituation("blank")
    }
    else if (emailSituation !== "initial" && itHas(email, emailDomains) === false) {
      setEmailSituation("invalid")
    }
    else {
      setEmailSituation("valid");
    }
  }, [email]);
  function addUser(account: Account){
    Users.push(account);
    navigate("/");
  }

  return (
    <section className={sectionStyles}>
      <Title>
        Boas Vindas ao XWriter!
      </Title>
      <form className={inputContainerStyles} onSubmit={() => addUser({ email: email, senha: password })}>
        <input
          className={`${inputStyles} ${emailSituation !== "valid" ? "border-red-400 border-b-red-400 focus:border-red-400" : ""}`}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
          required
        />
        <input
          className={`${inputStyles} ${passwordSituation !== "safe" ? "border-red-400 border-b-red-400 focus:border-red-400" : ""}`}
          type="text"
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
          <li className={`text-red-400 ${passwordSituation === "noUpperLetter" ? "initial" : "hidden"}`}>
            A senha precisa ter ao menos uma letra maiúscula
          </li>
          <li className={`text-red-400 ${passwordSituation === "blank" ? "initial" : "hidden"}`}>
            O campo 'Senha' não pode ficar vazio
          </li>
          <li className={`text-red-400 ${passwordSituation === "noNumber" ? "initial" : "hidden"}`}>
            A senha precisa ter ao menos um número
          </li>
        </ul>
        <Button 
          type="submit" 
          disabled={emailSituation === "valid" && passwordSituation === "safe" ? false : true}
        >
          Criar Conta
        </Button>
      </form>
      <p className="font-medium">
        Já possui uma conta? <Link to="/" className="text-sky-400 cursor-pointer">Acesse agora!</Link>
      </p>
    </section>
  );
}