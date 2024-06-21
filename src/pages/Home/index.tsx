import Button from "../../components/Button"
import Title from "../../components/Title"
import { inputContainerStyles, sectionStyles, inputStyles } from "./styled"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IAccount } from "../../interfaces";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

function Home() {
  const [userState, setUserState] = useState<"invalid" | "valid" | "loading" | undefined>(undefined);
  const { handleSubmit, register, watch } = useForm<IAccount>();
  const navigate = useNavigate();
  const credentials = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
  const app = initializeApp(credentials);
  const auth = getAuth(app);

  const onSubmit = handleSubmit(() => {
    Conect();
  });

  function Conect() {
    signInWithEmailAndPassword(auth, watch("email"), watch("senha"))
      .then(() => {
        setUserState("valid");
        navigate("/post");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log("Erro de autenticação:", errorCode, errorMessage);
        setUserState("invalid");
      });
  }
  
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
          required
        />
        <input 
          {...register("senha")}
          className={inputStyles} 
          type="password" 
          placeholder="Senha" 
          required
        />
        <ul className="list-disc list-inside">
          <li className={`text-red-400 ${userState === "invalid" && userState !== undefined ? "initial" : "hidden"}`}>
            Usuário não cadastrado
          </li>
        </ul>
        <Button 
          disabled={userState === "loading" ? true : false} 
          type="submit"
          onClick={() => setUserState("loading")}
        >
          {userState === "loading" ? "Carregando..." : "Acessar Plataforma"}
        </Button>
      </form>
      <p className="font-medium text-center">
        Não possui uma conta? <Link to="/session" className="text-sky-400 cursor-pointer">Crie uma agora!</Link>
      </p>
    </section>
  )
}

export default Home