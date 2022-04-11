import "react-tabs/style/react-tabs.css";

import { Formik, Field, Form } from "formik";
//import { useFormik } from "formik";

import React, { useState } from "react";

import { Verification, assertion_check } from "../../verification/Verification";

const NOT_BONUS = 0;
const BONUS = 1;

const NONE = 0;
const LOW = 1;

const PRECISION = 2;

const MED = 2;

const BONUS_0 = 2;

const HIGH = 3;

const MAX_QUALITY = 6;
const MAX_BONUS = 4;

const mean_verif = (verif) => {
  let result = 0;

  for (let i = 0; i <= Object.keys(verif).length; i++) {
    if (verif[i] !== "qualitative") {
      result += assertion_check(verif[i]);
    }
  }

  if (Object.keys(verif).length !== 0) result /= Object.keys(verif).length - 1;

  return result;
};

const score = (
  verif,
  optical,
  radar,
  pass_duration,
  average_orbital_coverage,
  internal_duration,
  qualitative
) => {
  let detectability = ((optical + radar) * verif) / 2;

  let trackability =
    ((pass_duration + average_orbital_coverage + internal_duration) * verif) /
    3;

  return (detectability + trackability + qualitative) / 3;
};

const qualitative_score = (values) => {
  if (values.qualitative === "undefined") return 0;

  let result = 0;

  for (let i = 0; i < values.qualitative.length; i++) {
    if (values.qualitative[i] === "none") result += NONE;
    if (values.qualitative[i] === "low") result += LOW;
    if (values.qualitative[i] === "medium") result += MED;
    if (values.qualitative[i] === "high") result += HIGH;
  }

  result *= assertion_check(values.verif.qualitative);

  result /= MAX_QUALITY;

  return result;
};

const bonus_score = (values) => {
  let result = 0;

  for (let i = 0; i < values.bonus[0].length; i++) {
    if (values.bonus[0][i] === "none") result += NONE;
    else if (values.bonus[0][i] === "two" || "two_") result += BONUS_0;
    else result += 0;
  }

  result *= assertion_check(values.verif.bonus[0]);

  result /= Object.keys(values.bonus).length * MAX_BONUS;

  return result;
};

const dit_score = (values) => {
  let result = [0, 0];

  let qualitative = qualitative_score(values);

  let verif = mean_verif(values.verif.question); //mean verification

  result[NOT_BONUS] = score(
    verif,
    parseFloat(values.optical),
    parseFloat(values.radar),
    parseFloat(values.pass_duration),
    parseFloat(values.avg_orbital_coverage),
    parseFloat(values.internal_duration),
    qualitative
  );

  result[BONUS] = bonus_score(values);

  return result;
};

export default dit_score;
