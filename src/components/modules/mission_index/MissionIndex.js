import React from "react";
import { Verification } from "../../verification/Verification";

export const MOCK_DATA = {
  absolute: {
    question: "Mock data mission index absolute",
    id: "mission_index.question.absolute",
  },

  relative: {
    question: "Mock data mission index relative",
    id: "mission_index.question.relative",
  },
};

export const FORM_DATA = {
  0: {
    question: "Number of satellites",
    id: "mission_index.question.0",
    verif: "mission_index.verif.question.0",
  },

  1: {
    question: "Mass [kg]",
    id: "mission_index.question.1",
    verif: "mission_index.verif.question.1",
  },

  2: {
    question:
      "Cross-sectional area / Cross-Section Area in Randomly Tumbling Motion [m2]",
    id: "mission_index.question.2",
    verif: "mission_index.verif.question.2",
  },

  3: {
    question: "Deployment duration (years)",
    id: "mission_index.question.3",
    verif: "mission_index.verif.question.3",
  },

  4: {
    question: "Operational mean altitude [km]",
    id: "mission_index.question.4",
    verif: "mission_index.verif.question.4",
  },
  5: {
    question: "Operational inclination [deg] ",
    id: "mission_index.question.5",
    verif: "mission_index.verif.question.5",
  },
  6: {
    question: "Target end of life apogee [km]  ",
    id: "mission_index.question.6",
    verif: "mission_index.verif.question.6",
  },
  7: {
    question: "Target end of life perigee [km]  ",
    id: "mission_index.question.7",
    verif: "mission_index.verif.question.7",
  },
  8: {
    question: "Expected post mission disposal success rate",
    id: "mission_index.question.8",
    verif: "mission_index.verif.question.8",
  },
  9: {
    question: "Mitigated collision risk",
    id: "mission_index.question.9",
    verif: "mission_index.verif.question.9",
  },
};

const TextQuestion = ({ formik, list_question, verif, values }) => {
  let arr = [];
  // console.log(
  //   "Husnain checking in MI",
  //   "formik is : ",
  //   formik,
  //   "list question are is : ",
  //   list_question,
  //   " veridf is: ",
  //   verif,
  //   " values are : ",
  //   values
  // );

  Object.values(list_question).map((key, index) => {
    // console.log(key);
    arr.push({
      question: key.question,
      id: key.id,
      value: "",
    });
  });

  values &&
    Object.values(values)
      .splice(0, 10)
      .map((key, index) => {
        // console.log(key);
        arr[index].value = key;
      });

  // console.log(arr);

  const listQuestion = Object.values(list_question).map((question, i) => {
    return (
      <div>
        <b> {question.question} </b>
        <label>
          <input
            name={question.id}
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.mission_index.question[i] || arr[i].value}
          />
        </label>

        {verif && (
          <Verification
            formik={formik}
            name={question.verif}
            value={formik.values.mission_index.verif.question[i]}
          />
        )}

        {formik.errors.mission_index &&
          formik.errors.mission_index.hasOwnProperty("question") && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.mission_index.question[i]}</small>
            </div>
          )}

        {formik.errors.mission_index &&
          formik.errors.mission_index.hasOwnProperty("verif") && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.mission_index.verif.question[i]}</small>
            </div>
          )}

        <br></br>
      </div>
    );
  });

  return <div>{listQuestion}</div>;
};
// const HandleHusnainMethod = () => {
//   data?.missionIndex?.question?.absolute= 101;

//   formik.values.mission_index.question.absolute =
//     data?.missionIndex?.question?.absolute;
//     return(formik.values.mission_index.question.absolute)
// };
const MissionIndex = ({ formik, data }) => {
  // console.log(data?.missionIndex);
  return (
    <div>
      <div>
        <h3>Mock Data</h3>
        <br></br>
        <div>
          <b> {MOCK_DATA.absolute.question} </b>
          <label>
            <input
              name={MOCK_DATA.absolute.id}
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={(formik.values.mission_index.question.absolute) 
                || (data && data?.missionIndex?.question?.absolute)
              }
              // value={data?.missionIndex?.question?.absolute}
            />
          </label>
          <br></br>
        </div>

        <div>
          <b> {MOCK_DATA.relative.question}</b>
          <label>
            <input
              name={MOCK_DATA.relative.id}
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              // value={formik.values.mission_index.question.relative}
              value={
                // formik.values.mission_index.question.relative ||
                data && data?.missionIndex?.question?.relative
              }
            />
          </label>
          <br></br>
        </div>

        <h3>Form</h3>
        <TextQuestion
          formik={formik}
          list_question={FORM_DATA}
          values={data && data?.missionIndex?.question}
          verif={true}
        />
      </div>
      {/* run time pe ho ra */}
      <pre>
        RunTime Data{JSON.stringify(formik.values.mission_index, null, 2)}
      </pre>
      {/* database se aa ra hai */}
      <pre>DataBase{JSON.stringify(data && data?.missionIndex, null, 2)}</pre>
    </div>
  );
};

export default MissionIndex;

/*


import "react-tabs/style/react-tabs.css";

import { Formik, Field, Form } from "formik";
import { useFormik } from "formik";

import React, { useState } from "react";

import { Verification, assertion_check } from "../verification/Verification";

const SCORE = 0;

//Verif level average

//Index (absolute) and relative

//Compute all scores

const MODULE_NAME = "mission_index";

const MEAN_VERIF = 2;

const mission_index_score = (values) => {
  let result = [0, 0, 0];

  let num_verif = 0;

  let mean_verif = 0;

  for (let i = 1; i <= Object.keys(values).length; i++) {
    const verif = "verif_" + MODULE_NAME + "_" + i;

    if (typeof values[verif] !== "undefined" && values[verif] !== "") {
      num_verif++;

      //result[MEAN_VERIF] += assertion_check(values[verif]);

      mean_verif += assertion_check(values[verif]);
    }
  }

  //if (num_verif !== 0) result[MEAN_VERIF] /= num_verif;
  //num_verif = 0;

  if (num_verif !== 0) mean_verif /= num_verif;
  num_verif = 0;

  result = score(
    values["absolute"],
    values["relative"],
    values["deployment_duration"],
    mean_verif
  );

  return result;
};

const ABSOLUTE = 0;

const RELATIVE = 1;

const FINAL = 2;


//deployment_duration

const MissionIndex = (props) => {
  const [score, setScore] = useState(0);

  // const [mean_verif, setMeanVerif] = useState(0);

  const [absolute, setAbsolute] = useState(0);

  const [relative, setRelative] = useState(0);

  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          let result = [0, 0, 0];

          result = mission_index_score(values);

          //setMeanVerif(result[MEAN_VERIF]);

          //result[SCORE] = values.mission_index_0;

          setAbsolute(result[ABSOLUTE]);

          setRelative(result[RELATIVE]);

          setScore(result[FINAL]);

          props.getScore(result[FINAL]);

          alert(JSON.stringify(values, null, 2));
        }}
      >
        {() => (
          <Form>
            <b> Mock data mission index absolute</b>
            <Field name="absolute" />

            <br></br>

            <br></br>

            <b> Mock data mission index relative</b>
            <Field name="relative" />

            <br></br>

            <br></br>

            <b> Number of satellites </b>
            <Field name="mission_index_1" />
            <br></br>
            <Verification values={"verif_mission_index_1"} />
            <br></br>

            <b> Mass [kg] </b>
            <Field name="mission_index_2" />
            <br></br>
            <Verification values={"verif_mission_index_2"} />
            <br></br>

            <b>
              {" "}
              Cross-sectional area / Cross-Section Area in Randomly Tumbling
              Motion [m2]{" "}
            </b>
            <Field name="mission_index_3" />
            <br></br>
            <Verification values={"verif_mission_index_3"} />
            <br></br>

            <b> Deployment duration (years) </b>
            <Field name="deployment_duration" />
            <br></br>
            <Verification values={"verif_mission_index_4"} />
            <br></br>

            <b> Operational mean altitude [km] </b>
            <Field name="mission_index_5" />
            <br></br>
            <Verification values={"verif_mission_index_5"} />
            <br></br>

            <b> Operational inclination [deg] </b>
            <Field name="mission_index_6" />
            <br></br>
            <Verification values={"verif_mission_index_6"} />
            <br></br>

            <b> Target end of life apogee [km]</b>
            <Field name="mission_index_7" />
            <br></br>
            <Verification values={"verif_mission_index_7"} />
            <br></br>

            <b> Target end of life perigee [km]</b>
            <Field name="mission_index_8" />
            <br></br>
            <Verification values={"verif_mission_index_8"} />
            <br></br>

            <b> Expected post mission disposal success rate</b>
            <Field name="mission_index_9" />
            <br></br>
            <Verification values={"verif_mission_index_9"} />
            <br></br>

            <b> Mitigated collision risk</b>
            <Field name="mission_index_10" />
            <br></br>
            <Verification values={"verif_mission_index_10"} />
            <br></br>

            <button type="submit">Calculate</button>
          </Form>
        )}
      </Formik>

      <div>
        <h1> RESULT </h1>

        <h2>The final score is : {score}</h2>

        <h2>The absolute score is : {absolute}</h2>
        <h2>The relative score is : {relative}</h2>
      </div>
    </div>
  );
};

export default MissionIndex;


        <h2> The average of verification is : {mean_verif} </h2>

*/
