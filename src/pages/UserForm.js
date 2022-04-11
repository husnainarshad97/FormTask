import React, { useState, useEffect } from "react";
import MissionIndex from "../components/modules/mission_index/MissionIndex";
import Colla from "../components/modules/colla/Colla";
import DataSharing from "../components/modules/data_sharing/DataSharing";
import DetectionIdentificationTracking from "../components/modules/detection_identification_tracking/DetectionIdentificationTracking";
import ApplicationDesignOperation from "../components/modules/application_design_operation/ApplicationDesignOperation";
import ExternalServices from "../components/modules/external_services/ExternalServices";
import { useFormik, Formik, yupToFormErrors } from "formik";
import {
  InitialSchema,
  FormValidation,
} from "../components/tabsModule/FormComponents";
import { useLocation, useNavigate } from "react-router-dom";
import jsCookie from "js-cookie";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import external_score from "../components/modules/external_services/ExternalServicesScore";

const UserForm = () => {
  const [schema, setSchema] = useState(null);
  const [data, setData] = useState({});
  const location = useLocation();
  const cookies = jsCookie.get("token");
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: schema || InitialSchema,

    //FormikSchema,
    validationSchema: FormValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(external_score(values.external), null, 2));
      //post request;
    },
  });

  let id = location.pathname;
  id = id.replace("/dashboard/form/", "");
  console.log(id);

  const getData = async () => {
    console.log("in get data");
    await axios
      .get(`/form/${id}`, {
        headers: {
          Authorization: cookies,
        },
      })
      .then((res) => {
        console.log("Form data is", res.data);
        setData(res.data.form);
        // setForms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSave = async () => {
    // console.log(external_score(formik.values.external));

    console.log("updated mission index", formik.values.mission_index);
    console.log("updated detection and tracking", formik.values.dit);

    // console.log(formik.values.colla);
    // console.log(formik.values.data_sharing);

    await axios
      .put(
        `/form/${id}`,
        {
          missionIndex: formik.values.mission_index,

          collisionAvoidanceCapabilities: formik.values.colla,

          dataSharing: formik.values.data_sharing,

          detectionIdentificationTracking: formik.values.dit,

          nationalInternationalGuidlines: formik.values.ado,

          externalServices: formik.values.external,
        },
        {
          headers: {
            Authorization: cookies,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          getData();
        }
      })
      .catch((err) => console.log(err));

    // console.log(mission_index_score(formik.values.mission_index));
    //console.log("I am saving");

    // setSubmitted(true);
  };

  const handleSubmit = async () => {
    console.log(formik.values.mission_index);

    await axios
      .put(
        `/form/submit/${id}`,
        {
          missionIndex: formik.values.mission_index,
          collisionAvoidanceCapabilities: formik.values.colla,
          dataSharing: formik.values.data_sharing,
          detectionIdentificationTracking: formik.values.dit,
          nationalInternationalGuidlines: formik.values.ado,
          externalServices: formik.values.external,
        },
        {
          headers: {
            Authorization: cookies,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const load = () => {
    //setSchema(formik.values);
    //formik.setFieldValue("mission_index.question.absolute", "1");
    // console.log(schema);
    // console.log(formik.errors.data_sharing.autonomous);
  };

  // const back = () => {
  // setSchema(formik.values);
  // setSubmitted(false);
  // };

  return (
    <form onSubmit={formik.handleSubmit}>
      <button type="submit" onClick={() => handleSubmit()}>
        Submit
      </button>
      <button
        variant="contained"
        color="secondary"
        onClick={() => handleSave()}
      >
        Save
      </button>
      <button onClick={() => load()}> Load</button>

      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab name="mission">Mission Index</Tab>
          <Tab>Collision Avoidance Capabilities</Tab>
          <Tab>DataSharing</Tab>
          <Tab>Detection Identification and Tracking (DIT) </Tab>
          <Tab>Application of Design and Operation</Tab>
          <Tab>External Services</Tab>
        </TabList>

        <TabPanel>
          <MissionIndex formik={formik} data={data} />
          <div>
            <button
              variant="contained"
              color="secondary"
              // onClick={() =>
              // 	setState_mission_index(mission_index_score(formik.values.mission_index))
              // }
            >
              Calculate
            </button>

            <h1> RESULT </h1>
            {/* <h2>The final score is : {state_mission_index[FINAL]}</h2>

						<h2>Absolute score is: {state_mission_index[ABSOLUTE]}</h2>

						<h2>Relative score is: {state_mission_index[RELATIVE]}</h2> */}
          </div>
        </TabPanel>

        <TabPanel>
          <Colla formik={formik} data={data} />

          <div>
            <button
              variant="contained"
              color="secondary"
              // onClick={() => setState_colla(colla_score(formik.values.colla))}
            >
              Calculate
            </button>

            <h1> RESULT </h1>
            {/* <h2>The score is : {state_colla[SCORE]}</h2>

						<h2>Bonus score is: {state_colla[BONUS]}</h2> */}
          </div>
        </TabPanel>

        <TabPanel>
          <DataSharing formik={formik} />

          <div>
            <button
              variant="contained"
              color="secondary"
              // onClick={() => setState_data(data_sharing_score(formik.values.data_sharing))}
            >
              Calculate
            </button>

            <h1> RESULT </h1>
            {/* <h2>The score is : {state_data[SCORE]}</h2>

						<h2>Bonus score is: {state_data[BONUS]}</h2> */}
          </div>
        </TabPanel>

        <TabPanel>
          <DetectionIdentificationTracking formik={formik} data={data} />

          <div>
            <button
              variant="contained"
              color="secondary"
              // onClick={() => setState_dit(dit_score(formik.values.dit))}
            >
              Calculate
            </button>

            <h1> RESULT </h1>
            {/* <h2>The score is : {state_dit[SCORE]}</h2>

						<h2>Bonus score is: {state_dit[BONUS]}</h2> */}
          </div>
        </TabPanel>

        <TabPanel>
          <ApplicationDesignOperation formik={formik} />
          <div>
            <button
              variant="contained"
              color="secondary"
              // onClick={() => setState_ado(ado_score(formik.values.ado))}
            >
              Calculate
            </button>

            <h1> RESULT </h1>
            {/* <h2>The score is : {state_ado[SCORE]}</h2>

						<h2>Bonus score is: {state_ado[BONUS]}</h2>

						<h2>Max bonus: {state_ado[MAX_BONUS]}</h2> */}
          </div>
        </TabPanel>

        <TabPanel>
          {/* <ExternalServices formik={formik} data={data} /> */}

          <div>
            <button
              variant="contained"
              color="secondary"
              // onClick={() => setState_external(external_score(formik.values.external))}
            >
              Calculate
            </button>

            <h1> RESULT </h1>

            {/* <h2>Bonus score is: {state_external}</h2> */}
          </div>
        </TabPanel>
      </Tabs>
    </form>
    // <div>
    // 	<MissionIndex formik={formik} data={data} />
    // </div>
  );
};

export default UserForm;
