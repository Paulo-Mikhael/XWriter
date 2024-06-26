import { User, deleteUser, signOut } from "firebase/auth";
import { twPerfilCircleStyles, twPerfilContainerStyles, twPerfilDisabledStyles, twPerfilEnabledStyles, twPerfilImageContainerStyles } from "./styled";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";
import { ActualUser } from "../../../util";
import { useState } from "react";
import { firebaseAuth } from "../../../data";

export default function PerfilPhoto() {
  const auth = firebaseAuth;
  const navigate = useNavigate();
  const [perfilState, setPerfilState] = useState<"enabled" | "disabled">("disabled");

  function SignOut() {
    signOut(auth).then(() => {
      console.log("Sessão terminada");
      navigate("/", { replace: true });
    }).catch((error) => {
      console.log(error);
    });
  }
  function Delete(user: User){
    deleteUser(user).then(() => {
      navigate("/", { replace: true });
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <button onBlur={() => {
      setTimeout(() => {
        setPerfilState("disabled")
      }, 100);
    }}>
      <div
        className={`w-perfil-circle h-perfil-circle ${twPerfilCircleStyles} 
          ${perfilState === "enabled" ? twPerfilEnabledStyles : twPerfilDisabledStyles}`}
        onClick={() => {
          perfilState === "enabled" ? setPerfilState("disabled") : setPerfilState("enabled")
        }}
      >
        <p className="text-white text-xl font-bold">
          #
        </p>
      </div>
      <div className={`${twPerfilContainerStyles} ${perfilState === "enabled" ? "initial" : "hidden"}`}>
        <div className={twPerfilImageContainerStyles}>
          <div className={`w-14 h-14 ${twPerfilCircleStyles} ${twPerfilDisabledStyles} hover:border-none absolute -bottom-6 cursor-default`}>
            <p className="text-white text-3xl font-bold">
              #
            </p>
          </div>
          <p className="text-white text-center w-10/12 overflow-hidden text-sm absolute -bottom-14 cursor-text">
            {ActualUser(auth)}
          </p>
        </div>
        <Button
          background="bg-slate-700"
          width="w-10/12"
          onClick={() => SignOut()}
        >
          Encerrar sessão
        </Button>
        <div className="w-full p-2">
          <Button
            background="bg-red-500"
            onClick={() => auth.currentUser && Delete(auth.currentUser)}
          >
            Deletar Perfil
          </Button>
        </div>
      </div>
    </button>
  );
}