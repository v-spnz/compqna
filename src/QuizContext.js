// QuizContext.js
import React, { createContext, useState } from "react";
import initialQuestions from './data/questions.json';

export const QuizContext = createContext();

function shuffleArray(arr) {
  const array = arr.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function QuizProvider({ children }) {
  // Store both answers and questions in context
  const [quizState, setQuizState] = useState({});
  const [questions, setQuestions] = useState(() => shuffleArray(initialQuestions));

  return (
    <QuizContext.Provider value={{ quizState, setQuizState, questions, setQuestions }}>
      {children}
    </QuizContext.Provider>
  );
}