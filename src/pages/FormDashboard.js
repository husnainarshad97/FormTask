import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import jsCookie from "js-cookie";
import MissionTabs from "../components/tabs/MissionTabs";
import MissionForm from "../components/tabs/MissionForm";
import CollisionForm from "../components/tabs/CollisionForm";

const FormDashboard = () => {
	const [mission, setMission] = React.useState("missionIndex");
	const [data, setData] = React.useState([]);

	const feedbackRef = React.useRef();

	const location = useLocation();
	// console.log(location.search);
	let queryId = location.search;
	queryId = queryId.replace("?formId=", "");
	// console.log(queryId);

	const missionHandler = (e) => {
		console.log(e.target.id);
		setMission(e.target.id);
	};

	return (
		<div>
			<MissionTabs missionHandler={(e) => missionHandler(e)} />

			{mission === "missionIndex" && <MissionForm queryId={queryId} />}
			{mission === "collsionAvoidance" && <CollisionForm />}
		</div>
	);
};

export default FormDashboard;
