import "react-tabs/style/react-tabs.css";

import { Formik, Field, Form } from "formik";
//import { useFormik } from "formik";

import React, { useState } from "react";

//import { Verification, assertion_check } from "../verification/Verification";

import { Verification, assertion_check } from "../../verification/Verification";
import { FormValidation } from "../../tabsModule/FormComponents";

var get_id = /\d+/g;

const MOCK_DATA = {
  0: {
    question: "Optical: ",
    id: "dit.optical",
  },
  1: {
    question: "Radar: ",
    id: "dit.radar",
  },
  2: {
    question: "Pass duration :",
    id: "dit.pass_duration",
  },

  3: {
    question: "Average Orbital Coverage: ",
    id: "dit.avg_orbital_coverage",
  },

  4: {
    question: "Internal Duration: ",
    id: "dit.internal_duration",
  },
};

const GEOMETRIC = {
  /*
  0: {
    question:
      "CAD Model provided (optional) [Upload document (not implemented yet])",
    id: "dit.question.0",
    verif: "dit.verif.question.0",
  },
  */

  0: {
    question:
      "Dimension approximation (please enter the dimensions for each type of satellite in the mission )",
    id: "dit.question.1",
    verif: "dit.verif.question.1",
  },
};

const OP_PARAMTERS = {
  0: {
    question: "Apogee Altitude (km)",
    id: "dit.question.2",
    verif: "dit.verif.question.2",
  },

  1: {
    question: "Perigee altitude (km) ",
    id: "dit.question.3",
    verif: "dit.verif.question.3",
  },

  2: {
    question: "Inclination (°) ",
    id: "dit.question.4",
    verif: "dit.verif.question.4",
  },

  3: {
    question: "Right Ascension of the ascending node (°)",
    id: "dit.question.5",
    verif: "dit.verif.question.5",
  },

  4: {
    question: "Argument of perigee (°)",
    id: "dit.question.6",
    verif: "dit.verif.question.6",
  },
};

const TextQuestion = ({ formik, list_question, verif, values, opt }) => {
  // console.log("Husnain checking dit","formik is: ",formik, "list question is: ",list_question, "verif is :",verif, "values are : ", values, "opt is : ", opt);

  let mockArr = [];
  let geoArr = [];
  let operationalArr = [];
  const mockData = [];
  const geoData = [];
  const operationalData = [];

  let list_Question;

  if (opt === "mockdata") {
    // console.log("Mock Data");
    mockData.push(values && values?.optical);
    mockData.push(values && values?.radar);
    mockData.push(values && values?.pass_duration);
    mockData.push(values && values?.avg_orbital_coverage);
    mockData.push(values && values?.internal_duration);

    Object.values(MOCK_DATA).map((question, i) => {
      mockArr.push({
        question: question.question,
        id: question.id,
        answer: "",
        verif: question.verif,
      });
    });

    mockData.map((val, i) => (mockArr[i].answer = val));
    list_Question = mockArr;
  }
  if (opt === "geometery") {
    // console.log("Geometery");

    geoData.push(values && values?.question[1]);

    Object.values(GEOMETRIC).map((question, i) => {
      geoArr.push({
        question: question.question,
        id: question.id,
        answer: "",
        verif: question.verif,
      });
    });

    // operationalArr[0].answer = geoData;
    values &&
      Object.values(values?.verif?.question)
        ?.slice(1, 2)
        .map((val, i) => (geoArr[i].verif = val));

    geoData.map((val, i) => (geoArr[i].answer = val));
    list_Question = geoArr;
  }
  if (opt === "operational") {
    // console.log("operational");

    values &&
      Object.values(values?.question)
        ?.slice(2, 7)
        .map((val) => operationalData.push(val));

    Object.values(OP_PARAMTERS).map((question, i) => {
      operationalArr.push({
        question: question.question,
        id: question.id,
        answer: "",
        verif: question.verif,
      });
    });

    values &&
      Object.values(values?.verif?.question)
        ?.slice(2, 7)
        .map((val, i) => (operationalArr[i].verif = val));

    operationalData.map((val, i) => (operationalArr[i].answer = val));
    list_Question = operationalArr;
  }
  // console.log(mockArr);
  // console.log(geoArr);
  // console.log(operationalArr);

  // const listQuestion = Object.values(list_question).map((question, i) => {
  const listQuestion =
    list_Question &&
    list_Question.map((question, i) => {
      // console.log(question, i);
      return (
        <div>
          <b> {question.question}chechhh </b>
          <label>
            <input
              name={question.id}
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={
                question.answer
                  ? question.answer
                  : formik.values.dit.question[question.id.match(get_id)]
              }
            />
          </label>
          {verif && (
            <Verification
              formik={formik}
              name={question.verif}
              value={
                question.verif
                  ? question.verif
                  : formik.values.dit.verif.question[question.id.match(get_id)]
              }
            />
          )}

          {formik.errors.dit && formik.errors.dit.hasOwnProperty("question") && (
            <div style={{ color: "red" }}>
              <small>
                {formik.errors.dit.question[question.id.match(get_id)]}
              </small>
            </div>
          )}

          {formik.errors.dit &&
            formik.errors.dit.hasOwnProperty("verif") &&
            formik.errors.dit.verif.hasOwnProperty("question") && (
              <div style={{ color: "red" }}>
                <small>
                  {formik.errors.dit.verif.question[question.id.match(get_id)]}
                </small>
              </div>
            )}
        </div>
      );
    });
  // console.log(arr);

  return <div>{listQuestion}</div>;
};

const DetectionIdentificationTracking = ({ formik, data }) => {
  //const [score, setScore] = useState(0);
  // console.log(data?.detectionIdentificationTracking);
  // console.log(data);
  const dit = data?.detectionIdentificationTracking;
  console.log("dit check is: ", dit);
  const shapeValue = dit?.question[0];
  // const qualitative = ["low", "medium", "high"];
  // const qualitative = [...dit?.qualitative];
  const bonus = dit?.bonus[0];
  // console.log(...dit?.bonus[0]);

  return (
    <div>
      <h3>Mock data</h3>
      <TextQuestion
        formik={formik}
        list_question={MOCK_DATA}
        verif={false}
        values={dit}
        opt={"mockdata"}
      />
      <br></br>
      <br></br>
      <h3>Geometric Inputs</h3>
      <br></br>
      <b> Geometric Approximation and Dimensions</b>
      <select
        name="dit.question.0"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.dit.question[0]}
      >
        <option
          value={shapeValue ? shapeValue : ""}
          label={shapeValue || "Select a shape"}
        />
        <option value="rectangular_prism">Rectangular prism</option>
        <option value="cylinder">Cylinder</option>
        <option value="Sphere">Sphere </option>
      </select>
      {formik.errors.dit && formik.errors.dit.hasOwnProperty("question") && (
        <div style={{ color: "red" }}>
          <small>{formik.errors.dit.question[0]}</small>
        </div>
      )}
      <br></br>
      <TextQuestion
        formik={formik}
        list_question={GEOMETRIC}
        verif={true}
        values={dit}
        opt="geometery"
      />
      <br></br>
      <br></br>
      <h3>Operational orbit parameters</h3>
      <TextQuestion
        formik={formik}
        list_question={OP_PARAMTERS}
        verif={true}
        values={dit}
        opt="operational"
      />
      <br></br>
      <br></br>
      <h3>Qualitative Score</h3>{" "}
      <b>
        Do you track the resident space objects you operate? Select all that
        apply. Resident space object is tracked:
      </b>{" "}
      <br></br>
      <label>
        <input
          name="dit.qualitative"
          type="checkbox"
          value="low"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={
            dit?.qualitative.includes("low")
              ? true
              : formik.values.dit.qualitative.includes("low")
          }
        />
        Rely on Space-track or other third party public SSA providers
      </label>
      <br></br>
      <label>
        <input
          name="dit.qualitative"
          type="checkbox"
          value="medium"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={
            dit?.qualitative.includes("medium")
              ? true
              : formik.values.dit.qualitative.includes("medium")
          }
        />
        Custody of operated satellites maintained within 14 days of deployment
        and thereafter
      </label>
      <br></br>
      <label>
        <input
          name="dit.qualitative"
          type="checkbox"
          value="high"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={
            (dit?.qualitative.includes("high") ? true : false) ||
            formik.values.dit.qualitative.includes("high")
          }
        />
        Custody of operated satellites maintained within 1 day of deployment and
        thereafter
      </label>
      <br></br>
      <Verification
        formik={formik}
        name={"dit.verif.qualitative"}
        value={
          dit?.verif?.qualitative
            ? dit?.verif?.qualitative
            : formik.values.dit.verif.qualitative
        }
      />
      {formik.errors.dit && formik.errors.dit.hasOwnProperty("qualitative") && (
        <div style={{ color: "red" }}>
          <small>{formik.errors.dit.qualitative}</small>
        </div>
      )}
      {formik.errors.dit &&
        formik.errors.dit.hasOwnProperty("verif") &&
        formik.errors.dit.verif.hasOwnProperty("qualitative") && (
          <div style={{ color: "red" }}>
            <small>{formik.errors.dit.verif.qualitative}</small>
          </div>
        )}
      <br></br>
      <br></br>
      <h3>Bonus</h3>{" "}
      <b>
        Have you provided the following characterisation data on the satellite
        to the SSR evaluator?
      </b>
      <br></br>
      <label>
        <input
          name="dit.bonus.0"
          type="checkbox"
          value="none"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={
            bonus && bonus.includes("none")
              ? true
              : formik.values.dit.bonus[0].includes("none")
          }
        ></input>
        No additional information provided
      </label>
      <br></br>
      <label>
        <input
          name="dit.bonus.0"
          type="checkbox"
          value="two"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={
            bonus && bonus.includes("two")
              ? true
              : formik.values.dit.bonus[0].includes("two")
          }
        ></input>
        Radiometric Data (average/max/min RCS)
      </label>
      <br></br>
      <label>
        <input
          name="dit.bonus.0"
          type="checkbox"
          value="two_"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          checked={
            // bonus.includes("two_")
            //   ? true
            //   :
            formik.values.dit.bonus[0].includes("two_") ||
            (bonus && bonus.includes("two_"))
          }
        ></input>
        Photometric Data (average/max/min Visual Magnitude) Select a
        verification level
      </label>
      <br></br>
      <Verification
        formik={formik}
        name={"dit.verif.bonus.0"}
        value={
          dit?.verif?.bonus[0]
            ? dit?.verif?.bonus[0]
            : formik.values.dit.verif.bonus[0]
        }
      />
      {formik.errors.dit && formik.errors.dit.hasOwnProperty("bonus") && (
        <div style={{ color: "red" }}>
          <small>{formik.errors.dit.bonus[0]}</small>
        </div>
      )}
      {formik.errors.dit &&
        formik.errors.dit.hasOwnProperty("verif") &&
        formik.errors.dit.verif.hasOwnProperty("bonus") && (
          <div style={{ color: "red" }}>
            <small>{formik.errors.dit.verif.bonus[0]}</small>
          </div>
        )}
      {/*  */}
      {/* <pre>{JSON.stringify(formik.values.dit, null, 2)}</pre> */}
      {/*  */}
      <pre>Runtime DATA{JSON.stringify(formik.values.dit, null, 2)}</pre>
      <pre>
        DataBase data
        {JSON.stringify(data?.DetectionIdentificationTracking, null, 2)}c
      </pre>
      {/* <pre>{JSON.stringify(formik.errors.dit, null, 2)}</pre> */}
    </div>
  );
};

export default DetectionIdentificationTracking;
