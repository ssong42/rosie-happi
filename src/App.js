import "./App.css";
import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Cards from "./components/Cards";
import Info from "./components/Info";
import Load from './components/Loading'
import Answer from "./components/Answer";

import { CALCULATING, FINISHED, NEW } from "./components/constants";

function App() {
  let questions = [
    {
      question: "How many hours of sleep did Rosie get?",
      factor: 4,
      unit: "hours",
      type: "number",
    },
    {
      question: "How many cups of coffee did Rosie drink today?",
      factor: 8,
      unit: "cups",
      type: "number",
    },
    {
      question: "How many hours of homework does Rosie have?",
      factor: -1,
      exponential: 2,
      unit: "hours",
      type: "number",
    },
    {
      question: "How full is Rosie's stomach?",
      factor: 1,
      unit: "%",
      type: "number",
    },
    {
      question: "How many hugs did Rosie get from Steven?",
      factor: 400,
      unit: "hugs",
      type: "number",
    },
  ];
  
  const [answers, setAnswers] = useState(Array(questions.length).fill("0"));
  const [totalHappiness, setTotalHappiness] = useState(0);
  const [state, setState] = useState(NEW);

  useEffect(() => {
    if (state === CALCULATING){
      setTimeout(() => {
        let temp = 0;
        answers.map((answer, index) => {
          if (questions[index].exponential)
            temp += (answer ** questions[index].exponential * questions[index].factor)
          else
            temp += answer * questions[index].factor;
        })

        setTotalHappiness(temp)
        setState(FINISHED);
      }, 5000)
    }
  }, [state])

  let handleInputChange = (index) => (event) => {
    let value = event.target.value
    
    let temp = [...answers];
    temp[index] = value;

    setAnswers(temp)
  }

  let onSubmitClick = () => {
    setState(CALCULATING);
  }

  let onBackClick = () => {
    setAnswers(Array(questions.length).fill("0"));
    setState(NEW);
  }

  return (
    <div>
      <Header />
      <Info />
      { state === NEW && <Cards questions={questions} answers={answers} onChange={handleInputChange} onSubmitClick={onSubmitClick}/>}
      { state === CALCULATING && <Load />}
      { state === FINISHED && <Answer totalHappiness={totalHappiness} onBackClick={onBackClick}/>}
    </div>
  );
}

export default App;
