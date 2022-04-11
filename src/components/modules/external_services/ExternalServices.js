import "react-tabs/style/react-tabs.css";

import React, { useState, useEffect } from "react";

import { Verification } from "../../verification/Verification";

const EXTERNAL_QUESTIONS = {
  bonus_0: {
    id: "external.bonus.0",
    verif: "external.verif.bonus.0",
    question: "On-orbit servicing features ?",
    type: "bonus",
  },

  bonus_1: {
    id: "external.bonus.1",
    verif: "external.verif.bonus.1",
    question: "Standardized interfaces?",
    type: "bonus",
  },

  bonus_2: {
    id: "external.bonus.2",
    verif: "external.verif.bonus.2",
    question:
      "Life extension services (non-contact support,inspection, refuelling, upgradability, orbit modification and maintenance) ?",
    type: "bonus",
  },

  bonus_3: {
    id: "external.bonus.3",
    verif: "external.verif.bonus.3",
    question: "External Active debris removal services ?",
    type: "bonus",
  },
};

const ExternalContent = ({ formik, list_question, data }) => {
  const [check, setCheck] = useState(true);

  let arr = [];
  let list_Question;

  Object.values(EXTERNAL_QUESTIONS).map((question, i) => {
    arr.push({
      question: question.question,
      id: question.id,
      answer: "",
      verif: question.verif,
      verifValue: "",
    });
  });

  data &&
    Object.values(data?.bonus).map((val, i) => {
      arr[i].answer = val;
      formik.values.external.bonus[i] = val;
    });

  data &&
    Object.values(data?.verif?.bonus).map((val, i) => {
      if (val === "") {
        arr[i].verifValue = "";
      } else {
        arr[i].verifValue = val;
        // formik.values.external.verif.bonus[i] = val;
      }
    });

  formik.values.external.verif.bonus = data?.verif?.bonus;

  // formik.values.external.bonus[i] = question.answer;

  list_Question = arr;

  // console.log(list_Question);
  // const listQuestion = Object.values(list_question).map((question, i) => {

  const listQuestion =
    list_Question &&
    list_Question.map((question, i) => {
      console.log(check);
      // formik.values.external.bonus[i] = question.answer;
      // console.log(question.answer);
      return (
        <div>
          <b> {question.question} </b>
          <br></br>
          <input
            name={question.id}
            type="radio"
            value="yes"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            checked={
              // formik.values.external.bonus[i] === "yes" ||
              // (formik.values.external.bonus[i] === question.answer) === "yes"

              // formik.values.external.bonus[i] === question.answer
              // formik.values.external.bonus[i] === "yes" ||
              // question.answer === "yes"
              //   ? true
              //   : formik.values.external.bonus[i] === "yes"

              true
              // formik.values.external.bonus[i] === "yes"
              // : formik.values.external.bonus[i] === "yes"
            }
            onClick={() => {
              formik.values.external.verif.bonus[i] = "";
            }}
          />
          <label>Yes</label>

          <input
            type="radio"
            name={question.id}
            value="no"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            checked={
              // formik.values.external.bonus[i] === "no"
              // ||
              // (formik.values.external.bonus[i] =
              //   question.answer === "no" ? "no" : "")
              // formik.values.external.bonus[i] === "no" ||
              // question.answer === "no"

              // formik.values.external.bonus[i] === "no"

              check
              // ? formik.values.external.bonus[i] === "no"
              // : formik.values.external.bonus[i] === "no"
            }
            onClick={() => {
              formik.values.external.verif.bonus[i] = "none";
            }}
          />
          <label>No</label>
          {/* {console.log(formik.values.external)} */}
          <Verification
            formik={formik}
            name={question.verif}
            value={
              // question.verif
              //   ? question.verif
              //   :
              // question.verif
              // (formik.values.external.verif.bonus[i] = question.verif)
              // || formik.values.external.verif.bonus[i])
              // formik.values.external.verif.bonus[i]
              // (formik.values.external.verif.bonus[i]
              //   ===
              // ( formik.values.external.verif.bonus[i] = question.verif )

              // (formik.values.external.verif.bonus[i] =
              //   formik.values.external.verif.bonus[i] !== question.verifValue ||
              //   formik.values.external.verif.bonus[i])

              // formik.values.external.verif.bonus[i]
              question.verifValue
            }
            disabled={formik.values.external.bonus[i] === "no"}
          />

          {formik.errors.external &&
            formik.errors.external.hasOwnProperty("verif") && (
              <div style={{ color: "red" }}>
                <small>{formik.errors.external.verif.bonus[i]}</small>
              </div>
            )}

          {formik.errors.external &&
            formik.errors.external.hasOwnProperty("bonus") && (
              <div style={{ color: "red" }}>
                <small>{formik.errors.external.bonus[i]}</small>
              </div>
            )}

          <br></br>
        </div>
      );
    });
  console.log(formik.values.external.verif.bonus);
  console.log(data);
  // console.log(formik.values.external.bonus);
  // console.log(formik.values.external.verif.bonus);

  return <div>{listQuestion}</div>;
};

const ExternalServices = ({ formik, data }) => {
  const Data = data?.externalServices;
  const [obj, setObj] = useState(Data);

  // useEffect(() => {
  //   setObj(data?.externalServices);
  // }, []);

  return (
    <div id="wrapper">
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-6 col-lg-6">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <div
                      class="react-tabs__tab-panel react-tabs__tab-panel--selected"
                      role="tabpanel"
                      id="react-tabs-9"
                      aria-labelledby="react-tabs-8"
                    >
                      <ExternalContent
                        formik={formik}
                        list_question={EXTERNAL_QUESTIONS}
                        data={Data}
                      />
                      <pre>
                        {JSON.stringify(formik.values.external, null, 2)}
                      </pre>
                    </div>
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

export default ExternalServices;
