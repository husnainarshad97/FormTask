import { assertion_check } from "../../verification/Verification";

import * as constId from "../../../utils/constants";

const ABSOLUTE = 0;

const RELATIVE = 1;

const FINAL = 2;

const score = (index_abs, index_rel, deployment_duration, mean_verif) => {
  const NORMALIZATION = 0.017;
  const WEIGHT_ABS = 0.8;

  const WEIGHT_REL = 0.2;

  let result = [0, 0, 0];

  const undnv = index_abs / (NORMALIZATION * deployment_duration * mean_verif);

  let iferror = 0;
  try {
    iferror = Math.log10(undnv);
  } catch (err) {
    iferror = -10;
  }

  const index_abs_res = Math.min(0.5 - 0.1 * iferror - (undnv - 1) / 50, 1);

  const index_rel_res = mean_verif * Math.max(1 - Math.pow(index_rel, 3), 0);

  result[ABSOLUTE] = index_abs_res;
  result[RELATIVE] = index_rel_res;

  result[FINAL] = WEIGHT_ABS * index_abs_res + WEIGHT_REL * index_rel_res;

  return result;
};

const mean_verif = (verif) => {
  let result = 0;

  for (let i = 0; i <= Object.keys(verif).length; i++) {
    result += assertion_check(verif[i]);
  }

  if (Object.keys(verif).length !== 0) result /= Object.keys(verif).length;

  return result;
};

const mission_index_score = (values) => {
  let result = [0, 0, 0];

  let verif = mean_verif(values.verif.question); //mean verification

  result = score(
    values.question.absolute,
    values.question.relative,
    values.question[constId.DEPLOYMENT_DURATION],
    verif
  );

  return result;
};

export default mission_index_score;
