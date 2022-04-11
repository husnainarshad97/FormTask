import React, { useState } from "react";

import { Verification } from "../../verification/Verification";

const CONTENT_COMPLIANCE = {
  q0: {
    id: "ado.question.compliance.0",
    verif: "ado.verif.question.compliance.0",
    question: "Space debris mitigation guidelines (UNCOPUOS or IADC)",
    type: "question",
  },

  q1: {
    id: "ado.question.compliance.1",
    verif: "ado.verif.question.compliance.1",
    question: "Long-term sustainability guidelines (UNCOPUOS)",
    type: "question",
  },

  q2: {
    id: "ado.question.compliance.2",
    verif: "ado.verif.question.compliance.2",
    question:
      "Space debris mitigation standards or verifiable laws (ISO, FSOA, NASA)",
    type: "question",
  },

  q3: {
    id: "ado.question.compliance.3",
    verif: "ado.verif.question.compliance.3",
    question: "Standardized operational products (CCSDS)",
    type: "question",
  },

  q4: {
    id: "ado.question.compliance.4",
    verif: "ado.verif.question.compliance.4",
    question: "ITU regulations on spectrum use",
    type: "question",
  },
};

const CONTENT_CONFERS = {
  0: {
    id: "ado.question.compliance.5",
    verif: "ado.verif.question.compliance.5",
    question:
      "Safety standards in case of close proximity or rendezvous operations (CONFERS, human-graded standards)",
    type: "question",
  },
};

const CONTENT_EXPLOSION = {
  q0: {
    id: "ado.question.explosion.answer.0",

    ratio: "ado.question.explosion.ratio.0",

    verif: "ado.verif.question.explosion.0",
    question:
      "Level of minimization of the probability of explosion as part of the operational lifetime",

    text: "X explosion satellite",
  },
};

const CONTENT_PASSIVATION = {
  q0: {
    id: "ado.question.passivation.answer.0",
    verif: "ado.verif.question.passivation.0",
    question: "Spacecraft passivated after its operational lifetime",
    passivation: "ado.question.passivation.ratio.0",
    text: "Please provide the passivation success ratio of your satellite (value between 0 and 1). In case of constellations, please provide a mean value",
  },

  q1: {
    id: "ado.question.passivation.answer.1",
    verif: "ado.verif.question.passivation.1",
    question: "Launch vehicle passivated after its operational lifetime",
    passivation: "ado.question.passivation.ratio.1",
    text: "Please provide the passivation success ratio of your launcher (value between 0 and 1). In case of constellations, please provide a mean value",
  },

  q2: {
    id: "ado.question.passivation.answer.2",
    verif: "ado.verif.question.passivation.2",
    question:
      "The spacecraft uses a disposal orbit after its operational lifetime",
    passivation: "ado.question.passivation.ratio.2",
    text: "Please provide the PMD success ratio of your satellite (value between 0 and 1).In case of constellations, please provide a mean value",
  },

  q3: {
    id: "ado.question.passivation.answer.3",
    verif: "ado.verif.question.passivation.3",

    passivation: "ado.question.passivation.ratio.3",

    question:
      "The launch vehicle uses a disposal orbit after its operational lifetime",
    text: "Please provide the PMD success ratio of your launcer (value between 0 and 1).In case of constellations, please provide a mean value",
  },
};

const Compliance = ({ formik, list_question }) => {
  const listQuestion = Object.values(list_question).map((question, i) => {
    return (
      <div>
        <b> {question.question} </b>

        <br></br>
        <input
          name={question.id}
          type="radio"
          value="none"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={formik.values.ado.question.compliance[i] === "none"}
          onClick={() => {
            formik.values.ado.verif.question.compliance[i] = "none";
          }}
        />
        <label>No Compliance</label>
        <br></br>

        <input
          type="radio"
          name={question.id}
          value="mandatory"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={formik.values.ado.question.compliance[i] === "mandatory"}
          onClick={() => {
            formik.values.ado.verif.question.compliance[i] = "";
          }}
        />
        <label> Compliant, mandatory adopted</label>

        <br></br>

        <input
          type="radio"
          name={question.id}
          value="voluntary"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={formik.values.ado.question.compliance[i] === "voluntary"}
          onClick={() => {
            formik.values.ado.verif.question.compliance[i] = "";
          }}
        />
        <label> Compliant, voluntary adopted</label>
        <br></br>

        <Verification
          formik={formik}
          name={question.verif}
          value={formik.values.ado.verif.question.compliance[i]}
          disabled={formik.values.ado.question.compliance[i] === "none"}
        />

        {formik.errors.ado &&
          formik.errors.ado.hasOwnProperty("question") &&
          formik.errors.ado.question.hasOwnProperty("compliance") && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.ado.question.compliance[i]}</small>
            </div>
          )}

        {formik.errors.ado &&
          formik.errors.ado.hasOwnProperty("verif") &&
          formik.errors.ado.verif.hasOwnProperty("question") &&
          formik.errors.ado.verif.question.hasOwnProperty("compliance") && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.ado.verif.question.compliance[i]}</small>
            </div>
          )}

        <br></br>
        <br></br>
      </div>
    );
  });

  return <div>{listQuestion}</div>;
};

const Passivation = ({ formik, list_question }) => {
  const listQuestion = Object.values(list_question).map((question, i) => {
    return (
      <div>
        <b>{question.question}</b>
        <br></br>
        <label>
          <input
            name={question.id}
            type="radio"
            value="no"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            checked={formik.values.ado.question.passivation.answer[i] === "no"}
            onClick={() => {
              formik.values.ado.question.passivation.ratio[i] = 0;
              formik.values.ado.verif.question.passivation[i] = "none";
            }}
          />
          No
        </label>

        <br></br>

        <label>
          <input
            type="radio"
            name={question.id}
            value="yes"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            checked={formik.values.ado.question.passivation.answer[i] === "yes"}
            onClick={() => {
              formik.values.ado.question.passivation.ratio[i] = "";
              formik.values.ado.verif.question.passivation[i] = "";
            }}
          />
          Yes
        </label>

        <br></br>

        <label>
          <input
            type="radio"
            name={question.id}
            value="yes_reentry"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            checked={
              formik.values.ado.question.passivation.answer[i] === "yes_reentry"
            }
            onClick={() => {
              formik.values.ado.question.passivation.ratio[i] = "";
              formik.values.ado.verif.question.passivation[i] = "";
            }}
          />
          Yes, with a near-controlled reentry
        </label>

        <br></br>

        <label>
          {!(formik.values.ado.question.passivation.answer[i] === "no") &&
            question.text}
          <br></br>
          <input
            type="text"
            name={question.passivation}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.ado.question.passivation.ratio[i]}
            hidden={formik.values.ado.question.passivation.answer[i] === "no"}
          />
        </label>

        <br></br>

        <Verification
          formik={formik}
          name={question.verif}
          value={formik.values.ado.verif.question.passivation[i]}
          disabled={formik.values.ado.question.passivation.answer[i] === "no"}
        />

        {formik.errors.ado &&
          formik.errors.ado.hasOwnProperty("question") &&
          formik.errors.ado.question.hasOwnProperty("passivation") &&
          formik.errors.ado.question.passivation.hasOwnProperty("answer") && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.ado.question.passivation.answer[i]}</small>
            </div>
          )}

        {formik.errors.ado &&
          formik.errors.ado.hasOwnProperty("question") &&
          formik.errors.ado.question.hasOwnProperty("passivation") &&
          formik.errors.ado.question.passivation.hasOwnProperty("ratio") && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.ado.question.passivation.ratio[i]}</small>
            </div>
          )}

        {formik.errors.ado &&
          formik.errors.ado.hasOwnProperty("verif") &&
          formik.errors.ado.verif.hasOwnProperty("question") &&
          formik.errors.ado.verif.question.hasOwnProperty("passivation") && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.ado.verif.question.passivation[i]}</small>
            </div>
          )}

        <br></br>
        <br></br>
      </div>
    );
  });

  return <div>{listQuestion}</div>;
};

const Explosion = ({ formik, list_question }) => {
  const listQuestion = Object.values(list_question).map((question, i) => {
    return (
      <div>
        <b>{question.question}</b>
        <br></br>

        <label>
          <input
            type="radio"
            name={question.id}
            value="no"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            checked={formik.values.ado.question.explosion.answer[i] === "no"}
            onClick={() => {
              formik.values.ado.question.explosion.ratio[i] = 0;
              formik.values.ado.verif.question.explosion[i] = "none";
            }}
          />
          No action or analysis
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            name={question.id}
            value="yes"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            checked={formik.values.ado.question.explosion.answer[i] === "yes"}
            onClick={() => {
              formik.values.ado.question.explosion.ratio[i] = "";
              formik.values.ado.verif.question.explosion[i] = "";
            }}
          />
          Yes, please enter a value of explosion probability{" "}
        </label>
        <br></br>

        <label>
          {!(formik.values.ado.question.explosion.answer[i] === "no") &&
            question.text}
          <br></br>
          <input
            type="text"
            name={question.ratio}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            hidden={formik.values.ado.question.explosion.answer[i] === "no"}
            value={formik.values.ado.question.explosion.ratio[i]}
          />
        </label>

        <br></br>

        <Verification
          formik={formik}
          name={question.verif}
          value={formik.values.ado.verif.question.explosion[i]}
          disabled={formik.values.ado.question.explosion.answer[i] === "no"}
        />

        {formik.errors.ado &&
          formik.errors.ado.hasOwnProperty("question") &&
          formik.errors.ado.question.hasOwnProperty("explosion") &&
          formik.errors.ado.question.explosion.hasOwnProperty("answer") && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.ado.question.explosion.answer[i]}</small>
            </div>
          )}

        {formik.errors.ado &&
          formik.errors.ado.hasOwnProperty("question") &&
          formik.errors.ado.question.hasOwnProperty("explosion") &&
          formik.errors.ado.question.explosion.hasOwnProperty("ratio") && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.ado.question.explosion.ratio[i]}</small>
            </div>
          )}

        {formik.errors.ado &&
          formik.errors.ado.hasOwnProperty("verif") &&
          formik.errors.ado.verif.hasOwnProperty("question") &&
          formik.errors.ado.verif.question.hasOwnProperty("explosion") && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.ado.verif.question.explosion[i]}</small>
            </div>
          )}

        <br></br>

        <br></br>
      </div>
    );
  });

  return <div>{listQuestion}</div>;
};

export {
  CONTENT_COMPLIANCE,
  CONTENT_PASSIVATION,
  CONTENT_EXPLOSION,
  CONTENT_CONFERS,
  Compliance,
  Passivation,
  Explosion,
};
