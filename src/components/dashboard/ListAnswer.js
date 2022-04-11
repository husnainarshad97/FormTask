import Answer from "./Answer";
import { useState } from "react";

const ListAnswer = ({ question, answer, verification, size }) => {
  return (
    <div class="row">
      {question.map((question, i) => {
        return (
          <Answer
            question={question}
            answer={answer[i]}
            verification={verification[i]}
            size={size}
          />
        );
      })}
    </div>
  );
};

export default ListAnswer;
/*

     answer={answer[i]}
            verification={verification[i]}


*/
