import { assertion_check } from "../../verification/Verification";

const NOT_BONUS = 0;
const BONUS = 1;

const NONE = 0;

const SSA = 1;

const OTHER = 2;

const VOLUNTARY = 3;

const PUBLIC = 4;

const AUTONOMOUS_ARRAY = [
  [0, 5, 3, 5, 5],

  [0, 5, 3, 5, 5],

  [0, 2, 2, 3, 3],
];

const TOTAL_AUTONOMOUS = AUTONOMOUS_ARRAY.reduce(function (a, b) {
  return a.concat(b);
}).reduce(function (a, b) {
  return a + b;
});

const POINTS_ARRAY = [
  [0, 10, 10, 12, 12],

  [0, 3, 3, 3, 4],

  [0, 1, 2, 2, 1],

  [0, 12, 8, 15, 15],

  [0, 6, 5, 6, 6],

  [0, 1, 2, 3, 3],

  [0, 3, 1, 1, 2],

  [0, 4, 3, 4, 4],

  [0, 5, 5, 6, 6],

  [0, 3, 2, 3, 3],

  [0, 5, 5, 6, 6],

  [0, 5, 3, 5, 5],

  [0, 5, 3, 5, 5],

  [0, 2, 2, 3, 3],
];

const BONUS_POINT_ARRAY = [
  [0, 1, 4, 3, 3],

  [0, 1, 2, 3, 4],

  [0, 3, 3, 3, 4],

  [0, 1, 1, 2, 2],
];

const POSSIBLE_POINTS = POINTS_ARRAY.reduce(function (a, b) {
  return a.concat(b);
}).reduce(function (a, b) {
  return a + b;
});

const BONUS_POSSIBLE_POINTS = BONUS_POINT_ARRAY.reduce(function (a, b) {
  return a.concat(b);
}).reduce(function (a, b) {
  return a + b;
});

const data_sharing_score = (values) => {
  let result = [0, 0];

  for (let i = 0; i < Object.keys(values.question).length; i++) {
    result[NOT_BONUS] +=
      data_question_check(values.question[i], i, NOT_BONUS) *
      assertion_check(values.verif.question[i]);
  }

  for (let i = 0; i < Object.keys(values.bonus).length; i++) {
    result[BONUS] +=
      data_question_check(values.bonus[i], i, BONUS) *
      assertion_check(values.verif.bonus[i]);
  }

  if (values.autonomous === "yes") {
    result[NOT_BONUS] /= POSSIBLE_POINTS;
  } else result[NOT_BONUS] /= POSSIBLE_POINTS - TOTAL_AUTONOMOUS;

  result[BONUS] /= BONUS_POSSIBLE_POINTS;

  return result;
};

const data_question_check = (values, idx, bonus) => {
  let result = 0;

  let array = [];

  if (bonus === BONUS) array = BONUS_POINT_ARRAY;
  if (bonus === NOT_BONUS) array = POINTS_ARRAY;

  for (let i = 0; i < values.length; i++) {
    if (values[i] === "none") result += array[idx][NONE];
    if (values[i] === "ssa") result += array[idx][SSA];
    if (values[i] === "other") result += array[idx][OTHER];
    if (values[i] === "voluntary") result += array[idx][VOLUNTARY];
    if (values[i] === "public") result += array[idx][PUBLIC];
    else result += 0;
  }

  return result;
};

export default data_sharing_score;
