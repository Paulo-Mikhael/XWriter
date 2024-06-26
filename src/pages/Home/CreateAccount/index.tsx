import Button from "../../../components/Button";
import Title from "../../../components/Title";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { inputContainerStyles, inputStyles, sectionStyles } from "../styled";
import { upperLetters, numerals, specialCharacters, emailDomains, firebaseAuth } from "../../../data";
import { itHas } from "../../../util";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function CreateAccount() {
  const [buttonState, setButtonState] = useState<"loading" | "initial">("initial");
  const [passwordState, setPasswordState] = useState<"hidden" | "show">("hidden");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailSituation, setEmailSituation] = useState<"initial" | "valid" | "blank" | "invalid" | "alredy-in-use">("initial");
  const [passwordSituation, setPasswordSituation] =
    useState<"initial" | "safe" | "noSpecialCharacters" | "blank" | "noNumber" | "noUpperLetter">("initial");
  const navigate = useNavigate();
  const auth = firebaseAuth;

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

  function Conect() {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/post", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("Erro de autenticação:", errorCode, errorMessage);
      });
  }
  function Auth() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Conect();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/email-already-in-use"){
          setEmailSituation("alredy-in-use");
          setButtonState("initial");
          return;
        }

        console.log("Erro de autenticação:", errorCode, "Mensagem", errorMessage);
      });
  }

  return (
    <section className={sectionStyles}>
      <Title>
        Boas Vindas ao XWriter!
      </Title>
      <form className={inputContainerStyles}>
        <input
          className={`${inputStyles} ${emailSituation !== "valid" ? "border-red-400 border-b-red-400 focus:border-red-400" : ""}`}
          type="email"
          placeholder="email@gmail.com"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
          required
        />
        <div className="relative">
          <img
            src={`icons/${passwordState === "hidden" ? "show" : "hide"}-password.png`}
            className={`w-8 cursor-pointer absolute top-3 right-3 ${passwordState === "hidden" ? "h-5" : "h-6"}`}
            onClick={() => {
              passwordState === "hidden" ? setPasswordState("show") : setPasswordState("hidden")
            }}
          />
          <input
            className={`${inputStyles} ${passwordSituation !== "safe" ? "border-red-400 border-b-red-400 focus:border-red-400" : ""}`}
            type={passwordState === "hidden" ? "password" : "text"}
            placeholder="senha"
            value={password}
            onChange={(evt) => {
              setPassword(evt.target.value)
            }}
            required
          />
        </div>
        <ul className="list-disc list-inside">
          <li className={`text-red-400 ${emailSituation === "blank" ? "initial" : "hidden"}`}>
            O campo 'Email' não pode ficar vazio
          </li>
          <li className={`text-red-400 ${emailSituation === "invalid" ? "initial" : "hidden"}`}>
            Email inválido
          </li>
          <li className={`text-red-400 ${emailSituation === "alredy-in-use" ? "initial" : "hidden"}`}>
            Esse email já está sendo utilizado
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
          onClick={() => {
            Auth();
            if (email === ""){
              setEmailSituation("blank");
            }
            else if (password === ""){
              setPasswordSituation("blank");
            }
            else if (emailSituation === "valid" && passwordSituation === "safe"){
              setButtonState("loading");
            }
          }}
          disabled={emailSituation === "valid" && passwordSituation === "safe" && buttonState === "initial" ? false : true}
        >
          {buttonState === "loading" ? "Carregando..." : "Criar Conta"}
        </Button>
      </form>
      <p className="font-medium text-center">
        Já possui uma conta? <Link to="/" replace={true} className="text-sky-400 cursor-pointer">Acesse agora!</Link>
      </p>
    </section>
  );
}