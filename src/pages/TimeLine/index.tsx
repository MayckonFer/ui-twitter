import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../../components/Header";
import { Separetor } from "../../components/Separetor";
import { Tweet } from "../../components/Tweet";
import "./TimeLine.css";

export function TimeLine() {
  const [newTweet, setNewTweet] = useState("");
  const [answers, setAnswers] = useState([
    "Meu primeiro tweet",
    "Tweet ?",
    "Testando o twitter !",
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
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/MayckonFer.png" alt="Mayckon" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewTweet(event.target.value)}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separetor />

      {answers.map((tweet, index) => {
        return <Tweet key={index} content={tweet} />;
      })}
    </main>
  );
}
