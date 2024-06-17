import Button from "../../components/Button"
import Title from "../../components/Title"
import { inputContainerStyles, sectionStyles, inputStyles } from "./styled"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IAccount } from "../../interfaces";
import { Users } from "../../data";
import { useEffect, useState } from "react";

function Home() {
  const [userState, setUserState] = useState<"invalid" | "valid" | undefined>(undefined);
  const { handleSubmit, register } = useForm<IAccount>();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    if (Users.find(item => item.email === data.email && item.senha === data.senha)){
      setUserState("valid");
    }else{
      setUserState("invalid");
    }
  });

  useEffect(() => {
    if (userState === "valid"){
      navigate("/post");
    }
  }, [userState]);

  
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
        <Button type="submit">
          Acessar Plataforma
        </Button>
      </form>
      <p className="font-medium text-center">
        Não possui uma conta? <Link to="/session" className="text-sky-400 cursor-pointer">Crie uma agora!</Link>
      </p>
    </section>
  )
}

export default Home