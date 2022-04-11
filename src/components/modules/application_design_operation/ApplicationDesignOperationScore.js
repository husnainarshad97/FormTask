import { assertion_check } from "../../verification/Verification";

//Score computation constants
const NO = 0;
const YES = 1;

//Consts to parse bonus + verif levels indexes
const COMPLIANCE_MANDATORY = 1;
const COMPLIANCE_VOLONTARY = 1;

const NOT_BONUS = 0;
const BONUS = 1;
const MAX_BONUS = 2;

const POINTS_OBTAINED = 2;
const TOTAL_POINTS = 3;

const NO_REENTRY = 1;
const NEAR_CONTROLLED_REENTRY = 2;

const EXPLOSION_THRESHOLD = 0.001;

const MAX_EXPLOSION = 1;
const MAX_REENTRY = 2;
const MAX_PASSIVATION = 2;
const MAX_COMPLIANCE = 1;
const MAX_GUIDELINES = 1;

const ado_score = (values) => {
  let result = [0, 0, 0];

  let max_points = 0;
  let max_bonus = 0;

  //We iterate through the compliance questions first

  for (let i = 0; i < Object.keys(values.question.compliance).length; i++) {
    if (values.question.compliance[i] === "none") {
      max_points += MAX_COMPLIANCE;
      // max_bonus += MAX_COMPLIANCE;
    } else if (values.question.compliance[i] === "mandatory") {
      result[NOT_BONUS] +=
        COMPLIANCE_MANDATORY *
        assertion_check(values.verif.question.compliance[i]);

      max_points += COMPLIANCE_MANDATORY;
    } else if (values.question.compliance[i] === "voluntary") {
      result[BONUS] +=
        COMPLIANCE_VOLONTARY *
        assertion_check(values.verif.question.compliance[i]);

      max_bonus += COMPLIANCE_VOLONTARY;

      result[NOT_BONUS] +=
        COMPLIANCE_MANDATORY *
        assertion_check(values.verif.question.compliance[i]);

      max_points += COMPLIANCE_MANDATORY;
    } else {
      max_points += MAX_COMPLIANCE;
    }
  }

  //We iterate through the passivation

  for (
    let i = 0;
    i < Object.keys(values.question.passivation.answer).length;
    i++
  ) {
    result[NOT_BONUS] +=
      ssr_guidelines_passivation_check(
        values.question.passivation.answer[i],
        values.question.passivation.ratio[i]
      ) * assertion_check(values.verif.question.passivation[i]);

    max_points += MAX_PASSIVATION;
  }

  //We iterate through the explosion

  for (
    let i = 0;
    i < Object.keys(values.question.explosion.answer).length;
    i++
  ) {
    result[NOT_BONUS] +=
      ssr_guidelines_explosion_check(
        values.question.explosion.answer[i],

        values.question.explosion.ratio[i]
      ) * assertion_check(values.verif.question.explosion[i]);

    max_points += MAX_EXPLOSION;
  }

  if (values.question.guidelines[0] === "no") {
    max_points += MAX_GUIDELINES;

    result[NOT_BONUS] += assertion_check(values.verif.question.guidelines[0]);
  } else {
    max_points += MAX_GUIDELINES;
  }

  if (values.question.guidelines[1] === "yes") {
    result[NOT_BONUS] += assertion_check(values.verif.question.guidelines[1]);
    max_points += MAX_GUIDELINES;
  } else {
    max_points += MAX_GUIDELINES;
  }

  if (max_points !== 0) {
    console.log("max: ", max_points);
    console.log("points", result[NOT_BONUS]);
    result[NOT_BONUS] /= max_points;
  }

  result[MAX_BONUS] = max_bonus;

  /*
  if (max_bonus !== 0) {
    result[BONUS]= max_bonus;
  }
*/
  return result;
};

const ssr_guidelines_passivation_check = (values, X_passivation) => {
  let result = 0;

  if (values === "no" || X_passivation === "undefined") return 0;
  else {
    if (values === "yes") result = X_passivation * NO_REENTRY;
    else if (values === "yes_reentry")
      result = X_passivation * NEAR_CONTROLLED_REENTRY;
    else result = 0;
  }
  return result;
};

const ssr_guidelines_explosion_check = (values, X_explosion) => {
  let result = 0.0;

  if (values === "no" || X_explosion === "undefined") return 0;
  else {
    if (parseFloat(X_explosion) < EXPLOSION_THRESHOLD) result = 1;
    else {
      result =
        1.0 -
        Math.pow(10, Math.min(0, Math.log10(parseFloat(X_explosion)) + 2.0));
    }
  }

  return result;
};
/*
const app_design_op_score = (values) => {
  let result = [0, 0];
  let curr = "";
  let verif = "";
  let curr_bonus = "";
  let verif_bonus = "";
  let points = 0;
  let verif_points = 0;

  let curr_reentry = 0;
  let verif_reentry = 0;

  let curr_explosion = 0;
  let verif_explosion = 0;

  let curr_compliance = 0;
  let verif_compliance = 0;

  let max_points_count = 0;
  let max_bonus_count = 0;

  for (let i = 1; i <= Object.keys(values).length; i++) {
    curr = MODULE_NAME + "_" + i;
    curr_compliance = MODULE_NAME + "_compliance_" + i;
    curr_reentry = MODULE_NAME + "_reentry_" + i;
    curr_explosion = MODULE_NAME + "_explosion_" + i;

    verif = "verif_" + MODULE_NAME + "_" + i;
    verif_reentry = "verif_" + MODULE_NAME + "_reentry_" + i;
    verif_explosion = "verif_" + MODULE_NAME + "_explosion_" + i;
    verif_compliance = "verif_" + MODULE_NAME + "_compliance_" + i;

    curr_bonus = "bonus_" + MODULE_NAME + "_" + i;
    verif_bonus = "verif_bonus_" + MODULE_NAME + "_" + i;

    if (typeof values[curr] !== "undefined") {
      max_points_count += YES;

      verif_points = assertion_check(values[verif]);

      if (values[curr] === "yes") points = YES;
      else if (values[curr] === "no") points = NO;
      else points = 0;

      result[NOT_BONUS] += points * verif_points;
    }

    if (typeof values[curr_explosion] !== "undefined") {
      max_points_count += MAX_EXPLOSION;

      points = ssr_guidelines_explosion_check(
        values[curr_explosion],
        values["X_explosion_" + i]
      );

      verif_points = assertion_check(values[verif_explosion]);

      //  console.log(points);
      result[NOT_BONUS] += points * verif_points;
    }

    if (typeof values[curr_reentry] !== "undefined") {
      // question_count++;
      max_points_count += MAX_REENTRY;
      points = ssr_guidelines_passivation_check(
        values[curr_reentry],
        values["X_passivation_" + i]
      );

      verif_points = assertion_check(values[verif_reentry]);
      //console.log(points);
      result[NOT_BONUS] += points * verif_points;
    }

    if (typeof values[curr_compliance] !== "undefined") {
      verif_points = assertion_check(values[verif_compliance]);

      if (values[curr_compliance] === "volontary") {
        result[BONUS] += COMPLIANCE_VOLONTARY * verif_points;
        result[NOT_BONUS] += COMPLIANCE_VOLONTARY * verif_points;
        max_bonus_count += MAX_COMPLIANCE;
        max_points_count += MAX_COMPLIANCE;
      } else if (values[curr_compliance] === "mandatory") {
        result[NOT_BONUS] += COMPLIANCE_MANDATORY * verif_points;
        max_points_count += MAX_COMPLIANCE;
      } else {
        max_points_count += MAX_COMPLIANCE;
        // max_bonus_count += MAX_COMPLIANCE;
      }
    }
  }

  //Adding the tailor

  if (typeof values["tailor"] !== "undefined") {
    console.log(values["tailor"]);
    result[NOT_BONUS] += values["tailor"];
  }
  // This should be removed

  if (max_points_count !== 0) {
    result[POINTS_OBTAINED] = result[NOT_BONUS];

    result[TOTAL_POINTS] = max_points_count;

    result[NOT_BONUS] /= max_points_count;
  }

  if (max_bonus_count !== 0) result[BONUS] /= max_bonus_count;

  return result;
};
*/
export default ado_score;
