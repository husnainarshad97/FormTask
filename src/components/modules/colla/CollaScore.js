import { assertion_check } from "../../verification/Verification";

const NONE = 0;
const LOW = 2;
const MED = 3;
const HIGH = 4;

const POSSIBLE_POINTS = NONE + LOW + MED + HIGH;

const SCORE = 0;
const BONUS = 1;

const colla_score = (values) => {
  let result = [0, 0];

  for (let i = 0; i < Object.keys(values.question).length; i++) {
    for (let j = 0; j < Object.keys(values.question[i]).length; j++) {
      if (values.question[i][j] === "none")
        result[SCORE] += NONE * assertion_check(values.verif.question[i]);
      else if (values.question[i][j] === "low")
        result[SCORE] += LOW * assertion_check(values.verif.question[i]);
      else if (values.question[i][j] === "medium")
        result[SCORE] += MED * assertion_check(values.verif.question[i]);
      else if (values.question[i][j] === "high")
        result[SCORE] += HIGH * assertion_check(values.verif.question[i]);
      else result[SCORE] += 0;
    }
  }
  for (let i = 0; i < Object.keys(values.bonus).length; i++) {
    for (let j = 0; j < Object.keys(values.bonus[i]).length; j++) {
      if (values.bonus[i][j] === "none")
        result[BONUS] += NONE * assertion_check(values.verif.bonus[i]);
      if (values.bonus[i][j] === "low")
        result[BONUS] += LOW * assertion_check(values.verif.bonus[i]);
      if (values.bonus[i][j] === "medium")
        result[BONUS] += MED * assertion_check(values.verif.bonus[i]);
      if (values.bonus[i][j] === "high")
        result[BONUS] += HIGH * assertion_check(values.verif.bonus[i]);
      else result[BONUS] += 0;
    }
  }

  result[SCORE] /= POSSIBLE_POINTS * Object.keys(values.question).length;

  result[BONUS] /= POSSIBLE_POINTS * Object.keys(values.bonus).length;

  return result;
};

export default colla_score;
