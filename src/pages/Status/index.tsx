import { PaperPlaneRight } from "phosphor-react";
import { useState, KeyboardEvent, FormEvent } from "react";
import { Header } from "../../components/Header";
import { Separetor } from "../../components/Separetor";
import { Tweet } from "../../components/Tweet";

import "./Status.css";

export function Status() {
  const [newTweet, setNewTweet] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Olha, faz sentido!",
    "Parabéns pelo progresso.",
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setAnswers([newTweet, ...answers]);
    setNewTweet("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if ((event.key === "Enter" && event.ctrlKey) || event.metaKey) {
      setAnswers([newTweet, ...answers]);
      setNewTweet("");
    }
  }
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem eius corporis accusamus, provident, et laborum sequi optio sapiente ex alias dolorem aspernatur facere ea explicabo minus qui, iusto assumenda." />

      <Separetor />

      <form onSubmit={createNewTweet} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/MayckonFer.png" alt="Mayckon " />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewTweet(event.target.value)}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer, index) => {
        return <Tweet key={index} content={answer} />;
      })}
    </main>
  );
}
