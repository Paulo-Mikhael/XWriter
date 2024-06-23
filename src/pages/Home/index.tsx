import Button from "../../components/Button"
import Title from "../../components/Title"
import { inputContainerStyles, sectionStyles, inputStyles } from "./styled"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IAccount } from "../../interfaces";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, specialCharacters } from "../../data";
import { itHas } from "../../util";

function Home() {
  const [userState, setUserState] = useState<"invalid" | "valid" | "loading" | "blank" | undefined>(undefined);
  const [passwordState, setPasswordState] = useState<"hidden" | "show">("hidden");
  const { handleSubmit, register, watch } = useForm<IAccount>();
  const navigate = useNavigate();
  const auth = firebaseAuth;

  const onSubmit = handleSubmit(() => {
    signInWithEmailAndPassword(auth, watch("email"), watch("senha"))
    .then(() => {
      setUserState("valid");
      navigate("/post", { replace: true });
    })
    .catch(() => {
      if (watch("email") === "" || watch("senha") === ""){
        setUserState("blank");
      }
      else{
        setUserState("invalid");
      }
    });
  });

  return (
    <section className={sectionStyles}>
      <Title>
        XWriter
      </Title>
      <form className={inputContainerStyles} onSubmit={onSubmit}>
        <input
          {...register("email")}
          className={`${inputStyles}`}
          type="email"
          placeholder="Email"
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
            {...register("senha")}
            className={inputStyles}
            type={passwordState === "hidden" ? "password" : "text"}
            placeholder="Senha"
            maxLength={40}
          />
        </div>
        <ul className="list-disc list-inside">
          <li className={`text-red-400 ${userState === "invalid" && userState !== undefined ? "initial" : "hidden"}`}>
            Email ou Senha incorretos
          </li>
          <li className={`text-red-400 ${userState === "blank" && userState !== undefined ? "initial" : "hidden"}`}>
            Os campos 'Email' e 'Senha' são obrigatórios
          </li>
        </ul>
        <Button
          disabled={userState === "loading" ? true : false}
          type="submit"
          onClick={() => {
            const afterEmail = watch("email").split("@");
            const scWithoutPoint = specialCharacters.filter(char => char !== ".");

            if (watch("email") !== ""){
              if (!watch("email").includes("@") || afterEmail[1] === "" || itHas(afterEmail[1], scWithoutPoint)){
                setUserState(undefined);
              }else{
                setUserState("loading");
              }
            }
            else{
              setUserState("loading");
            }
          }}
          childrenAnimation={userState === "loading" ? "animate-pulse" : ""}
        >
          {userState === "loading" ? "Carregando..." : "Acessar Plataforma"}
        </Button>
      </form>
      <p className="font-medium text-center">
        Não possui uma conta? <Link to="/session" replace={true} className="text-sky-400 cursor-pointer">Crie uma agora!</Link>
      </p>
    </section>
  )
}

export default Home