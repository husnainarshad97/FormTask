import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";

//import { Tab, Tabs } from "../components/tabs/tabs";

//import "../css/font_tabs.css";

import Colla from "../components/modules/colla/Colla";
import colla_score from "../components/modules/colla/CollaScore";

import DataSharing from "../components/modules/data_sharing/DataSharing";

import data_sharing_score from "../components/modules/data_sharing/DataSharingScore";

import ExternalServices from "../components/modules/external_services/ExternalServices";

import external_score from "../components/modules/external_services/ExternalServicesScore";

import ApplicationDesignOperation from "../components/modules/application_design_operation/ApplicationDesignOperation";

import ado_score from "../components/modules/application_design_operation/ApplicationDesignOperationScore";

import DetectionIdentificationTracking from "../components/modules/detection_identification_tracking/DetectionIdentificationTracking";

import dit_score from "../components/modules/detection_identification_tracking/ScoreDetectionIdentificationTracking";

import MissionIndex from "../components/modules/mission_index/MissionIndex";

import mission_index_score from "../components/modules/mission_index/ScoreMissionIndex";

import Summary from "./Summary";

import { InitialSchema, FormValidation } from "../components/tabsModule/FormComponents";

//This part will be put in a separate file that shall be imported !!

////////////////////////////////// END separate import file !

import React, { useEffect, useState } from "react";

import { useFormik, Formik, yupToFormErrors } from "formik";

import * as Yup from "yup";
import { render } from "@testing-library/react";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
//import { useAuth0 } from "@auth0/auth0-react";

const SCORE = 0;
const BONUS = 1;

const ABSOLUTE = 0;

const RELATIVE = 1;

const FINAL = 2;

const MAX_BONUS = 2;

const TabsModule = ({ values }) => {
	const navigate = useNavigate();

	const cookies = cookie.get("token");

	useEffect(() => {
		if (cookies === null || cookies === undefined) {
			navigate("/");
		}
	});

	//We define the formik object with validation for each module and submit
	//To remove these states for debugging only!

	const [state_mission_index, setState_mission_index] = useState([0, 0, 0]);

	const [state_colla, setState_colla] = useState([0, 0]);

	const [state_data, setState_data] = useState([0, 0]);

	const [state_ado, setState_ado] = useState([0, 0, 0]);

	const [state_external, setState_external] = useState(0);

	const [state_dit, setState_dit] = useState([0, 0]);

	//const { user, isAuthenticated, isLoading } = useAuth0();

	const [submitted, setSubmitted] = useState(false);

	const [schema, setSchema] = useState(null);

	const bonus_score = () => {};

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

	//Handler of the save button
	const handleSave = async () => {
		// console.log(external_score(formik.values.external));
		// console.log(formik.values.mission_index);
		// console.log(formik.values.colla);
		// console.log(formik.values.data_sharing);

		// await axios
		// 	.get("/ge")
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((err) => console.log(err));

		await axios
			.post(
				"/form/create",
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
				navigate("/dashboard");
			})
			.catch((err) => console.log(err));

		// console.log(mission_index_score(formik.values.mission_index));
		//console.log("I am saving");

		setSubmitted(true);
	};

	/*
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  isAuthenticated
  */

	const load = () => {
		//setSchema(formik.values);
		//formik.setFieldValue("mission_index.question.absolute", "1");
		// console.log(schema);
		console.log(formik.errors.data_sharing.autonomous);
	};

	const back = () => {
		setSchema(formik.values);
		setSubmitted(false);
	};

	return submitted ? (
		<div>
			<button onClick={() => back()}>Back</button>
			<div
				style={{
					textAlign: "center",
				}}
			>
				<button onClick={() => load()}> Validate my answers</button>
			</div>
			<Summary formik={formik} />;
		</div>
	) : (
		<form onSubmit={formik.handleSubmit}>
			<button type="submit">Submit</button>

			<button variant="contained" color="secondary" onClick={() => handleSave()}>
				Save
			</button>

			<button onClick={() => load()}> Load</button>

			<Tabs forceRenderTabPanel={true}>
				<TabList>
					<Tab>Mission Index</Tab>
					<Tab>Collision Avoidance Capabilities</Tab>
					<Tab>DataSharing</Tab>
					<Tab>Detection Identification and Tracking (DIT) </Tab>
					<Tab>Application of Design and Operation</Tab>
					<Tab>External Services</Tab>
				</TabList>

				<TabPanel>
					<MissionIndex formik={formik} />
					<div>
						<button
							variant="contained"
							color="secondary"
							onClick={() =>
								setState_mission_index(mission_index_score(formik.values.mission_index))
							}
						>
							Calculate
						</button>

						<h1> RESULT </h1>
						<h2>The final score is : {state_mission_index[FINAL]}</h2>

						<h2>Absolute score is: {state_mission_index[ABSOLUTE]}</h2>

						<h2>Relative score is: {state_mission_index[RELATIVE]}</h2>
					</div>
				</TabPanel>

				<TabPanel>
					<Colla formik={formik} />

					<div>
						<button
							variant="contained"
							color="secondary"
							onClick={() => setState_colla(colla_score(formik.values.colla))}
						>
							Calculate
						</button>

						<h1> RESULT </h1>
						<h2>The score is : {state_colla[SCORE]}</h2>

						<h2>Bonus score is: {state_colla[BONUS]}</h2>
					</div>
				</TabPanel>

				<TabPanel>
					<DataSharing formik={formik} />

					<div>
						<button
							variant="contained"
							color="secondary"
							onClick={() => setState_data(data_sharing_score(formik.values.data_sharing))}
						>
							Calculate
						</button>

						<h1> RESULT </h1>
						<h2>The score is : {state_data[SCORE]}</h2>

						<h2>Bonus score is: {state_data[BONUS]}</h2>
					</div>
				</TabPanel>

				<TabPanel>
					<DetectionIdentificationTracking formik={formik} />

					<div>
						<button
							variant="contained"
							color="secondary"
							onClick={() => setState_dit(dit_score(formik.values.dit))}
						>
							Calculate
						</button>

						<h1> RESULT </h1>
						<h2>The score is : {state_dit[SCORE]}</h2>

						<h2>Bonus score is: {state_dit[BONUS]}</h2>
					</div>
				</TabPanel>

				<TabPanel>
					<ApplicationDesignOperation formik={formik} />{" "}
					<div>
						<button
							variant="contained"
							color="secondary"
							onClick={() => setState_ado(ado_score(formik.values.ado))}
						>
							Calculate
						</button>

						<h1> RESULT </h1>
						<h2>The score is : {state_ado[SCORE]}</h2>

						<h2>Bonus score is: {state_ado[BONUS]}</h2>

						<h2>Max bonus: {state_ado[MAX_BONUS]}</h2>
					</div>
				</TabPanel>

				<TabPanel>
					<ExternalServices formik={formik} />

					<div>
						<button
							variant="contained"
							color="secondary"
							onClick={() => setState_external(external_score(formik.values.external))}
						>
							Calculate
						</button>

						<h1> RESULT </h1>

						<h2>Bonus score is: {state_external}</h2>
					</div>
				</TabPanel>
			</Tabs>
		</form>
	);

	/*
  return !submitted ? (
    <Form />
  ) : (
    <div>
      <button onClick={() => back()}>Back</button>
      <Summary formik={formik} />;
    </div>
  );
  */
};

export default TabsModule;

/*
  return submitted ? (
    <div>
      <button onClick={() => back()}>Back</button>
      <Summary formik={formik} />;
    </div>
  ) : () ;
  */

/*
    ValidationSchema: Yup.object().shape({
      external: Yup.boolean().required().oneOf([0, 1], "Mandatory field"),
    }),



*/

/*
      dit: Yup.object({
        value: Yup.string()
          .required("This field is required")
          .min(0, "Min value 0")
          .max(1, "Max value 1"),
      }),
      */

/*
        <Tabs forceRenderTabPanel={true}>
          <TabList>
            <Tab>Mission Index</Tab>
            <Tab>Collision Avoidance Capabilities</Tab>
            <Tab>Data Sharing</Tab>
            <Tab>Detection Identification and Tracking (DIT) </Tab>
            <Tab>Application of Design and Operation</Tab>
            <Tab>External Services</Tab>
          </TabList>

          <TabPanel>
            <MissionIndex/>
          </TabPanel>
        

          <TabPanel>
            <ExternalServices/>
          </TabPanel>

          
        </Tabs>

    
  );

*/
