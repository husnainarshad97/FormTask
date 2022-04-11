import React from "react";

const MissionTabs = ({ missionHandler }) => {
	return (
		<div>
			<button id="missionIndex" onClick={missionHandler}>
				Mission Index
			</button>
			<button id="collsionAvoidance" onClick={missionHandler}>
				collision Avoidance Capabilities
			</button>
			<button id="dataSharing" onClick={missionHandler}>
				Data Sharing
			</button>
			<button id="dit" onClick={missionHandler}>
				Detection Identification and Tracking (DIT)
			</button>
			<button id="ado" onClick={missionHandler}>
				Application of Design and Operation
			</button>
			<button id="extServices" onClick={missionHandler}>
				External Services
			</button>
		</div>
	);
};

export default MissionTabs;
