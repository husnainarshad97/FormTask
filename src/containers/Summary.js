import React, { useEffect, useState } from "react";

import "../css/style.css";

import ListAnswer from "../components/dashboard/ListAnswer";

import * as constID from "../utils/constants";

import {
  MISSION_INDEX,
  DATA_SHARING,
  BONUS_DATA_SHARING,
  BONUS_COLLA,
  COLLA,
  AUTONOMOUS_DATA_SHARING,
  ADO,
  EXTERNAL,
  DIT_BONUS,
  DIT_QUALITATIVE,
  DIT_QUESTION,
} from "../data/DataQuestions.js";
import Answer from "../components/dashboard/Answer";

const FOUR_COL = "col-xl-3 col-lg-3";
const TWO_COL = "col-xl-6 col-lg-6";
const ONE_COL = "col-xl-12 col-lg-12";
const THREE_COL = "col-xl-4 col-lg-4";

const Summary = ({ formik }) => {
  return (
    <div id="wrapper">
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <div class="container-fluid">
            <div
              style={{
                backgroundColor: "rgb(200, 200, 203)",
                textAlign: "center",
              }}
            >
              <h1> Mission Index </h1>
            </div>

            <ListAnswer
              question={MISSION_INDEX}
              answer={formik.values.mission_index.question}
              verification={formik.values.mission_index.verif.question}
              size={TWO_COL}
            />

            <br></br>
            <br></br>

            <div
              style={{
                backgroundColor: "rgb(200, 200, 203)",
                textAlign: "center",
              }}
            >
              <h1> Collision Avoidance Capabilites </h1>
            </div>

            {!formik.errors.colla && (
              <div class="row">
                {COLLA.map((colla, i) => (
                  <>
                    <Answer
                      question={[colla]}
                      answer={
                        <div>
                          {formik.values.colla.question[i].map((value) => (
                            <>
                              {constID.COLLA_CONTENT[i][value]}
                              <br></br>
                              <br></br>
                            </>
                          ))}
                        </div>
                      }
                      verification={formik.values.colla.verif.question[i]}
                      size={ONE_COL}
                    />
                  </>
                ))}

                {BONUS_COLLA.map((bonus_colla, i) => (
                  <>
                    <Answer
                      question={[bonus_colla]}
                      answer={
                        <div>
                          {formik.values.colla.bonus[i].map((value) => (
                            <>
                              {constID.COLLA_BONUS_CONTENT[i][value]}
                              <br></br>
                              <br></br>
                            </>
                          ))}
                        </div>
                      }
                      verification={formik.values.colla.verif.bonus[i]}
                      size={ONE_COL}
                    />
                  </>
                ))}
              </div>
            )}
            <br></br>
            <br></br>

            <div
              style={{
                backgroundColor: "rgb(200, 200, 203)",
                textAlign: "center",
              }}
            >
              <h1> Data Sharing </h1>
            </div>

            {!formik.errors.data_sharing && (
              <div class="row">
                {DATA_SHARING.map((question, i) => (
                  <>
                    <Answer
                      question={question}
                      answer={
                        <>
                          {formik.values.data_sharing.question[i].map(
                            (value) => (
                              <>{value} // </>
                            )
                          )}
                        </>
                      }
                      verification={
                        formik.values.data_sharing.verif.question[i]
                      }
                      size={THREE_COL}
                    />
                  </>
                ))}

                <Answer
                  question={
                    "Does your spacecraft use autonomous systems (systems whithout a human in the loop )?"
                  }
                  answer={formik.values.data_sharing.autonomous}
                  no_verif={true}
                  size={THREE_COL}
                />
                {formik.values.data_sharing.autonomous === "yes" && (
                  <>
                    {constID.AUTONOMOUS.map((q_id, i) => (
                      <>
                        <Answer
                          question={AUTONOMOUS_DATA_SHARING[i]}
                          answer={formik.values.data_sharing.question[q_id]}
                          verification={
                            formik.values.data_sharing.verif.question[
                              constID.AUTONOMOUS_0
                            ]
                          }
                          size={THREE_COL}
                        />
                      </>
                    ))}
                  </>
                )}

                {BONUS_DATA_SHARING.map((question, i) => (
                  <>
                    <Answer
                      question={question}
                      answer={
                        <>
                          {formik.values.data_sharing.bonus[i].map((value) => (
                            <>{value} // </>
                          ))}
                        </>
                      }
                      verification={formik.values.data_sharing.verif.bonus[i]}
                      size={THREE_COL}
                    />
                  </>
                ))}
              </div>
            )}
            <br></br>
            <br></br>

            <div
              style={{
                backgroundColor: "rgb(200, 200, 203)",
                textAlign: "center",
              }}
            >
              <h1>Detection Identification and Tracking </h1>
            </div>

            <div class="row">
              <Answer
                question={DIT_QUESTION[0]}
                answer={formik.values.dit.question[0]}
                no_verif={true}
                size={THREE_COL}
              />

              <Answer
                question={DIT_QUESTION[1]}
                answer={formik.values.dit.question[1]}
                verification={formik.values.dit.verif.question[1]}
                size={THREE_COL}
              />

              {/* <Answer
                question={
                  "Do you track the resident space objects you operate? Select all that apply. Resident space object is tracked:"
                }
                answer={
                  <>
                    {formik.values.dit.qualitative.map((value) => (
                      <>{constID.QUALITATIVE_ANSWERS[value]} // </>
                    ))}
                  </>
                }
                verification={formik.values.dit.verif.qualitative}
                size={ONE_COL}
              /> */}

              <Answer
                question={
                  "Have you provided the following characterisation data on the satellite to the SSR evaluator?                "
                }
                answer={formik.values.dit.bonus[0]}
                verification={formik.values.dit.verif.bonus[0]}
                size={ONE_COL}
              />
            </div>

            <div
              style={{
                backgroundColor: "rgb(200, 200, 203)",
                textAlign: "center",
              }}
            >
              <h1> Application of Design and Operation </h1>
            </div>

            <div class="row">
              {ADO.compliance.map((question, i) => (
                <>
                  <Answer
                    question={question}
                    answer={formik.values.ado.question.compliance[i]}
                    verification={
                      formik.values.ado.verif.question.compliance[i]
                    }
                    size={FOUR_COL}
                  />
                </>
              ))}

              <Answer
                question={
                  "Does your mission include close proximity or rendez vous operations?"
                }
                no_verif={true}
                answer={formik.values.ado.confers}
                size={FOUR_COL}
              />

              {formik.values.ado.confers === "yes" && (
                <Answer
                  question={
                    "Safety standards in case of close proximity or rendezvous operations (CONFERS, human-graded standards)"
                  }
                  answer={
                    formik.values.ado.question.compliance[constID.CONFERS]
                  }
                  verification={
                    formik.values.ado.verif.question.compliance[constID.CONFERS]
                  }
                  size={FOUR_COL}
                />
              )}

              {ADO.guidelines.map((question, i) => (
                <>
                  <Answer
                    question={question}
                    answer={formik.values.ado.question.guidelines[i]}
                    verification={
                      formik.values.ado.verif.question.guidelines[i]
                    }
                    size={FOUR_COL}
                  />
                </>
              ))}

              {ADO.explosion.map((question, i) => (
                <>
                  <Answer
                    question={question}
                    answer={formik.values.ado.question.explosion.answer[i]}
                    ratio={formik.values.ado.question.explosion.ratio[i]}
                    verification={formik.values.ado.verif.question.explosion[i]}
                    size={FOUR_COL}
                    ratio_bool={true}
                  />
                </>
              ))}

              {ADO.passivation.map((question, i) => (
                <>
                  <Answer
                    question={question}
                    answer={formik.values.ado.question.passivation.answer[i]}
                    ratio={formik.values.ado.question.passivation.ratio[i]}
                    verification={
                      formik.values.ado.verif.question.passivation[i]
                    }
                    size={FOUR_COL}
                    ratio_bool={true}
                  />
                </>
              ))}
            </div>

            <div
              style={{
                backgroundColor: "rgb(200, 200, 203)",
                textAlign: "center",
              }}
            >
              <h1> External services </h1>
            </div>

            <ListAnswer
              question={EXTERNAL}
              answer={formik.values.external.bonus}
              verification={formik.values.external.verif.bonus}
              size={TWO_COL}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
