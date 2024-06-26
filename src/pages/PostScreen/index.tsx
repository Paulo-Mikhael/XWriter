import Header from "../../components/Header";
import TextareaPost from "../../components/TextareaPost";
import { twSectionStyles } from "./styled";

export default function PostScreen() {
  return (
    <div>
      <Header />
      <section className={`${twSectionStyles}`}>
        <div className="w-11/12">
          <TextareaPost />
        </div>
      </section>
    </div>
  );
}