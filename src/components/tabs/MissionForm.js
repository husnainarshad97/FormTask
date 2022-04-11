import React, { useEffect } from "react";
import axios from "axios";
import jsCookie from "js-cookie";

const MissionForm = ({ queryId }) => {
  const [data, setData] = React.useState([]);
  const [formData, setFormData] = React.useState([]);
  const [relative, setRelative] = React.useState("");
  const [absolute, setAbsolute] = React.useState("");

  const feedbackRef = React.useRef();

  const getFormData = async () => {
    await axios
      .get(`/form/${queryId}`)
      .then((res) => {
        console.log(res.data);
        setFormData(res.data);
        convertObjectArray(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const convertObjectArray = (obj) => {
    let getObject = obj;
    setAbsolute(getObject?.form?.missionIndex?.question?.absolute);
    setRelative(getObject?.form?.missionIndex?.question?.relative);

    let arr = [
      {
        question: "Number of satellites",
        value: "",
        opt: "",
      },
      {
        question: "Mass [kg]",
        value: "",
        opt: "",
      },
      {
        question:
          "Cross-sectional area / Cross-Section Area in Randomly Tumbling Motion [m2]",
        value: "",
        opt: "",
      },
      {
        question: "Deployment duration (years)",
        value: "",
        opt: "",
      },
      {
        question: "Operational mean altitude [km]",
        value: "",
        opt: "",
      },
      {
        question: "Operational inclination [deg]",
        value: "",
        opt: "",
      },
      {
        question: "Target end of life apogee [km]",
        value: "",
        opt: "",
      },
      {
        question: "Target end of life perigee [km]",
        value: "",
        opt: "",
      },
      {
        question: "Expected post mission disposal success rate",
        value: "",
        opt: "",
      },
      {
        question: "Mitigated collision risk",
        value: "",
        opt: "",
      },
    ];

    Object.values(getObject?.form?.missionIndex?.question)
      .slice(0, 10)
      .map((key, index) => {
        console.log(key);
        arr[index].value = key;
      });
    Object.values(getObject?.form?.missionIndex?.verif?.question).map(
      (key, index) => {
        console.log(key);
        arr[index].opt = key;
      }
    );
    console.log(arr);

    setData(arr);
  };

  useEffect(() => getFormData(), []);

  const submit = async (e) => {
    e.preventDefault();
    const feedback = feedbackRef.current.value;

    if (!feedback) {
      return;
    } else {
      await axios
        .put(
          `/form/response/${queryId}`,
          {
            response: feedback,
          },
          {
            headers: {
              Authorization: jsCookie.get("token"),
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          feedbackRef.current.value = "";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <h1>Mission Index</h1>
      <section>
        <h2>Mock Data</h2>
        <div>
          <p>Mock data mission index absolute : {absolute}</p>
          <p>Mock data mission index relative :{relative}</p>
        </div>
      </section>
      <section>
        <h2>Form</h2>
        <div>
          {data &&
            data.map((data) => (
              <div key={data.question}>
                <p>Question : {data.question}</p>
                <p>value : {data.value}</p>
                <p>selected Option : {data.opt}</p>
              </div>
            ))}
        </div>

        <form onSubmit={submit}>
          <div>
            <label style={{ display: "block" }}>Enter your feedback</label>
            <textarea
              ref={feedbackRef}
              placeholder="Enter your feedback here..."
              rows={10}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default MissionForm;
