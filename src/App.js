import { useState } from "react";
import "./styles.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  return (
    <div className="flashcards">
      {questions.map((element) => (
        <Card question={element}></Card>
      ))}
    </div>
  );
}

function Card({ question }) {
  let [side, setSide] = useState(false);

  function handleClick() {
    setSide(!side);
  }

  return (
    <div className={side ? "selected" : ""} onClick={handleClick}>
      {side ? question.answer : question.question}
    </div>
  );
}
