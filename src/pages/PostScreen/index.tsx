import TextareaPost from "../../components/TextareaPost";
import Title from "../../components/Title";
import { twHeaderStyles, twSectionStyles } from "./styled";

export default function PostScreen() {
  return (
    <div className="bg-slate-200">
      <header className={twHeaderStyles}>
        <Title>
          xwriter
        </Title>
      </header>
      <section className={twSectionStyles}>
        <div className="w-11/12">
          <TextareaPost />
        </div>
      </section>
    </div>
  );
}