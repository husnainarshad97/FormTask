import "react-tabs/style/react-tabs.css";

//import React, { useState } from "react";

import { Verification } from "../../verification/Verification";

const COLLA_CONTENT = {
  0: {
    id: "colla.question.0",
    verif: "colla.verif.question.0",
    question: "Orbital state knowledge ",
    answers: {
      0: {
        value: "none",
        content:
          "Rely on third party public SSA providers for state information",
      },
      1: {
        value: "low",
        content: "Orbital state knowledge is maintained",
      },
      2: {
        value: "medium", //` `
        content: (
          <>
            Comply with all the following{" "}
            <ul>
              <li>
                {" "}
                Orbital state knowledge maintained within 10km (in any
                directions)
              </li>{" "}
              <li>
                Orbit determination updated in case of a maneuver or another
                event
              </li>
              <li>Covariance characterized and validated"</li>
            </ul>
          </>
        ),
      },
      3: {
        value: "high",
        content: (
          <>
            Comply with all the following:{" "}
            <ul>
              <li>
                Orbital state knowledge maintained within 1km (in any
                directions)
              </li>
              <li>
                Orbit determination updated in case of a maneuver or another
                event
              </li>
              <li>Covariance characterized and validated</li>
            </ul>
          </>
        ),
      },
    },
  },

  1: {
    id: "colla.question.1",
    verif: "colla.verif.question.1",
    question: "Availability to coordinate",
    answers: {
      0: {
        value: "none",
        content: <>Not able to coordinate</>,
      },

      1: {
        value: "low",
        content: <>Able to coordinate in response of an emergency</>,
      },

      2: {
        value: "medium",
        content: <>Able to coordinate during set hours per day</>,
      },
      3: {
        value: "high",
        content: (
          <>
            Has a system routine conjunction assessment and capabilities 24/24
            (human or computer) leading to a near immediate coordination and
            reaction
          </>
        ),
      },
    },
  },
  2: {
    id: "colla.question.2",
    verif: "colla.verif.question.2",
    question: "Capability to coordinate",

    answers: {
      0: { value: "none", content: <>Has no dedicated process</> },
      1: {
        value: "low",
        content: (
          <>
            Comply with all the following:
            <ul>
              <li>
                Has the capability to be contacted in case of close approach or
                emergency
              </li>

              <li>
                Regularly screens obit and planned maneuvers from SSA sharing
                organizations and/or third-party SSA providers
              </li>
            </ul>
          </>
        ),
      },
      2: {
        value: "medium",
        content: (
          <>
            Comply with all the following:{" "}
            <ul>
              <li>
                Is capable of interpreting conjunction data messages to
                generate/screen mitigating maneuvers
              </li>

              <li>Has a system for automated routine conjunction assessment</li>
            </ul>{" "}
          </>
        ),
      },
      3: {
        value: "high",
        content: (
          <>
            {" "}
            Comply with all the following:
            <ul>
              <li>
                {" "}
                Has documented procedures for collision screening, assessment,
                and mitigation{" "}
              </li>

              <li>
                Regularly screens operational spacecraft and planned maneuvers
                against SSA organization catalogue
              </li>
            </ul>{" "}
          </>
        ),
      },
    },
  },
};

const BONUS_COLLA_CONTENT = {
  0: {
    id: "colla.bonus.0",
    verif: "colla.verif.bonus.0",
    question:
      "[BONUS] Maintaining orbital state knowledge after the end of normal operations",
    answers: {
      0: {
        value: "none",
        content: <>No orbital state knowledge after the end of operations</>,
      },
      1: {
        value: "low",
        content: (
          <>
            Orbital state knowledge is maintained until atmospheric reentry, or
            disposal to a graveyard orbit
          </>
        ),
      },
      2: {
        value: "medium",
        content: (
          <>
            Orbital state knowledge is maintained within 10km (in any
            directions) until atmospheric reentry, or disposal to a graveyard
            orbit
          </>
        ),
      },
      3: {
        value: "high",
        content: (
          <>
            Orbital state knowledge is maintained within 1km (in any directions)
            until atmospheric reentry, or disposal to a graveyard orbit
          </>
        ),
      },
    },
  },
};

const CollaQuestion = ({ formik, list_question, bonus, values }) => {
  // console.log(values);
  let arr = [];
  const listQuestion = Object.values(list_question).map((question, i) => {
    // console.log(question.answers.map((data) => console.log(data)));
    return (
      <div>
        <b> {question.question} </b>
        <br></br>
        {Object.values(question.answers).map((answer, j) => {
          // answer[i].selected = values;
          arr.push(answer);
          return (
            <div>
              <label>
                <input
                  name={question.id} //"colla.question.0"
                  type="checkbox"
                  value={answer.value}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  checked={
                    bonus
                      ? formik.values.colla.bonus[i].includes(answer.value)
                      : formik.values.colla.question[i].includes(answer.value)
                  }
                  disabled={
                    answer.value !== "none" &&
                    (bonus
                      ? formik.values.colla.bonus[i].includes("none")
                      : formik.values.colla.question[i].includes("none"))
                  }
                  onClick={() => {
                    if (answer.value === "none") {
                      if (
                        bonus
                          ? formik.values.colla.bonus[i].includes(answer.value)
                          : formik.values.colla.question[i].includes(
                              answer.value
                            )
                      ) {
                        bonus
                          ? (formik.values.colla.verif.bonus[i] = "")
                          : (formik.values.colla.verif.question[i] = "");
                      } else {
                        bonus
                          ? (formik.values.colla.verif.bonus[i] = "none")
                          : (formik.values.colla.verif.question[i] = "none");
                      }

                      bonus
                        ? (formik.values.colla.bonus[i] = "none")
                        : (formik.values.colla.question[i] = "none");
                    }
                  }}
                />
                {answer.content}{" "}
              </label>
            </div>
          );
        })}
        {/* {console.log(arr)}; */}
        <Verification
          formik={formik}
          name={question.verif}
          value={
            bonus
              ? formik.values.colla.verif.bonus[i]
              : formik.values.colla.verif.question[i]
          }
          disabled={
            bonus
              ? formik.values.colla.bonus[i].includes("none")
              : formik.values.colla.question[i].includes("none")
          }
        />
        {formik.errors.colla &&
          (bonus
            ? formik.errors.colla.hasOwnProperty("bonus")
            : formik.errors.colla.hasOwnProperty("question")) && (
            <div style={{ color: "red" }}>
              <small>
                {bonus
                  ? formik.errors.colla.bonus[i]
                  : formik.errors.colla.question[i]}
              </small>
            </div>
          )}
        {formik.errors.colla &&
          formik.errors.colla.hasOwnProperty("verif") &&
          (bonus
            ? formik.errors.colla.verif.hasOwnProperty("bonus")
            : formik.errors.colla.verif.hasOwnProperty("question")) && (
            <div style={{ color: "red" }}>
              <small>
                {bonus
                  ? formik.errors.colla.verif.bonus[i]
                  : formik.errors.colla.verif.question[i]}
              </small>
            </div>
          )}
      </div>
    );
  });

  return <div>{listQuestion}</div>;
};

const Colla = ({ formik, data }) => {
  // console.log(data?.collisionAvoidanceCapabilities);
  return (
    <div id="wrapper">
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-12 col-lg-12">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <CollaQuestion
                      formik={formik}
                      list_question={COLLA_CONTENT}
                      bonus={false}
                      values={data?.collisionAvoidanceCapabilities?.question}
                    />

                    <CollaQuestion
                      formik={formik}
                      list_question={BONUS_COLLA_CONTENT}
                      bonus={true}
                    />
                    <pre>
                      {JSON.stringify(formik.values.colla.question[0], null, 2)}
                    </pre>

                    <pre>{JSON.stringify(formik.errors.colla, null, 2)}</pre>
                    <pre>{JSON.stringify(formik.values.colla, null, 2)}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colla;
