// QuizContext.js
import React, { createContext, useState } from "react";
export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [quizState, setQuizState] = useState({});
  return (
    <QuizContext.Provider value={{ quizState, setQuizState }}>
      {children}
    </QuizContext.Provider>
  );
}