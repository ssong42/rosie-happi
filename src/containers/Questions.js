import React, { Fragment, useState } from "react";

import Info from "../components/Info";
import Cards from "../components/Cards";
import Load from "../components/Loading";
import Answer from "../components/Answer";

import { CALCULATING, FINISHED, NEW } from "../components/constants";
import { backendURI, questions, scale } from "../constants";
import axios from "axios";

function Question() {
  const [answers, setAnswers] = useState(Array(questions.length).fill("0"));
  const [totalHappiness, setTotalHappiness] = useState(0);
  const [verse, setVerse] = useState("");
  const [state, setState] = useState(NEW);

  let handleInputChange = (index) => (event) => {
    let value = event.target.value;

    let temp = [...answers];
    temp[index] = value;

    setAnswers(temp);
  };

  let onSubmitClick = () => {
    setState(CALCULATING);

    //calculate total happiness
    let temp = 0;
    answers.map((answer, index) => {
      if (questions[index].exponential)
        temp +=
          answer ** questions[index].exponential * questions[index].factor;
      else temp += answer * questions[index].factor;
    });
    setTotalHappiness(temp);

    //find the verse amongst the scale
    let foundAnswer = scale.filter((each) => {
      if (totalHappiness >= each.lower && totalHappiness <= each.upper)
        return true;
      return false;
    });
    setVerse(foundAnswer[0].text);

    //set timer for backend
    setTimeout(() => {
      setState(FINISHED);
    }, 5000);

    //call to backend and add new record
    axios
      .post(backendURI + "/happy", {
        totalHappiness: temp,
        text: foundAnswer[0].text,
      })
      .then((res) => {
        console.log("FINISHED REQUEST");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let onBackClick = () => {
    setAnswers(Array(questions.length).fill("0"));
    setState(NEW);
  };

  return (
    <Fragment>
      <Info />
      {state === NEW && (
        <Cards
          questions={questions}
          answers={answers}
          onChange={handleInputChange}
          onSubmitClick={onSubmitClick}
        />
      )}
      {state === CALCULATING && <Load />}
      {state === FINISHED && (
        <Answer
          totalHappiness={totalHappiness}
          onBackClick={onBackClick}
          foundAnswer={verse}
        />
      )}
    </Fragment>
  );
}

export default Question;
