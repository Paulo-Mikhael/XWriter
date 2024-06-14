import Button from "../../components/Button"
import Input from "../../components/Input"
import Title from "../../components/Title"
import { inputContainerStyles, sectionStyles } from "./styled"

function Home() {
  return (
    <section className={sectionStyles}>
      <Title>
        XWriter
      </Title>
      <div className={inputContainerStyles}>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button>
          Acessar Plataforma
        </Button>
      </div>
      <p className="font-medium">
        Não possui uma conta? <b className="text-sky-400 cursor-pointer">Crie uma agora!</b>
      </p>
    </section>
  )
}

export default Home