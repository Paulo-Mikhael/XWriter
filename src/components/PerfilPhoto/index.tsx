import { getAuth, signOut } from "firebase/auth";
import { initializeFirebase } from "../../data";
import { twPerfilCircleStyles, twPerfilContainerStyles, twPerfilImageContainerStyles } from "./styled";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { ActualUser } from "../../util";
import { useState } from "react";

export default function PerfilPhoto() {
  const app = initializeFirebase;
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [perfilState, setPerfilState] = useState<"enabled" | "disabled">("disabled");

  function SignOut() {
    signOut(auth).then(() => {
      console.log("Sessão terminada");
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <button>
      <input type="file" id="file-input" className="hidden"/>
      <div
        className={`${perfilState === "enabled" ? `${twPerfilCircleStyles} bg-green-600 border-4 shadow-green-600/50` : twPerfilCircleStyles}`}
        onClick={() => {
          perfilState === "enabled" ? setPerfilState("disabled") : setPerfilState("enabled")
        }}
      >
        <p className="text-white text-xl font-bold">
          G
        </p>
      </div>
      <div className={`${twPerfilContainerStyles} ${perfilState === "enabled" ? "initial" : "hidden"}`}>
        <div className={twPerfilImageContainerStyles}>
          <div className={`${twPerfilCircleStyles} w-16 h-16 hover:border-none absolute -bottom-6 cursor-default`}>
            <p className="text-white text-3xl font-bold">
              G
            </p>
          </div>
          <p className="text-white text-sm absolute -bottom-14 cursor-text">
            {ActualUser(auth)}
          </p>
        </div>
        <Button
          background="bg-slate-700"
          width="w-10/12"
          onClick={() => {
            const fileInput = document.querySelector("#file-input") as HTMLInputElement;
            
            if (fileInput){
              fileInput.click();
            } 
          }}
        >
          Personalizar Perfil
        </Button>
        <div className="w-full p-2">
          <Button
            background="bg-red-500"
            onClick={() => SignOut()}
          >
            Encerrar Sessão
          </Button>
        </div>
      </div>
    </button>
  );
}