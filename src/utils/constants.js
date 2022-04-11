//Mission index CONST:

export const DEPLOYMENT_DURATION = 3;

// DIT CONST IDS:

export const QUALITATIVE = 7;

export const QUALITATIVE_ANSWERS = {
  low: "Rely on Space-track or other third party public SSA providers",
  medium:
    "Custody of operated satellites maintained within 14 days of deployment and thereafter",
  high: "Custody of operated satellites maintained within 1 day of deployment and thereafter",
};

export const BONUS_ANSWERS = {
  0: {
    low: "No additional information provided",
    medium: "Radiometric Data (average/max/min RCS)",
    high: "Photometric Data (average/max/min Visual Magnitude) Select a verification level",
  },
};

//DATA SHARING CONST IDS
export const AUTONOMOUS_0 = 11;
export const AUTONOMOUS_1 = 12;
export const AUTONOMOUS_2 = 13;

export const AUTONOMOUS = [AUTONOMOUS_0, AUTONOMOUS_1, AUTONOMOUS_2];

//ADO CONST IDS
export const CONFERS = 5;

//Colla CONST :

export const COLLA_CONTENT = {
  0: {
    none: "Rely on third party public SSA providers for state information",
    low: "Orbital state knowledge is maintained",
    medium: (
      <>
        Comply with all the following{" "}
        <ul>
          <li>
            {" "}
            Orbital state knowledge maintained within 10km (in any directions)
          </li>{" "}
          <li>
            Orbit determination updated in case of a maneuver or another event
          </li>
          <li>Covariance characterized and validated"</li>
        </ul>
      </>
    ),
    high: (
      <>
        Comply with all the following:{" "}
        <ul>
          <li>
            Orbital state knowledge maintained within 1km (in any directions)
          </li>
          <li>
            Orbit determination updated in case of a maneuver or another event
          </li>
          <li>Covariance characterized and validated</li>
        </ul>
      </>
    ),
  },

  1: {
    none: "Not able to coordinate",
    low: "Able to coordinate in response of an emergency",
    medium: "Able to coordinate during set hours per day",
    high: "Has a system routine conjunction assessment and capabilities 24/24 (human or computer) leading to a near immediate coordination and reaction",
  },

  2: {
    none: "Has no dedicated process",
    low: (
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
    medium: (
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
    high: (
      <>
        {" "}
        Comply with all the following:
        <ul>
          <li>
            {" "}
            Has documented procedures for collision screening, assessment, and
            mitigation{" "}
          </li>

          <li>
            Regularly screens operational spacecraft and planned maneuvers
            against SSA organization catalogue
          </li>
        </ul>{" "}
      </>
    ),
  },
};

export const COLLA_BONUS_CONTENT = {
  0: {
    none: "No orbital state knowledge after the end of operations",
    low: "Orbital state knowledge is maintained until atmospheric reentry, or disposal to a graveyard orbit",
    medium:
      "Orbital state knowledge is maintained within 10km (in any directions) until atmospheric reentry, or disposal to a graveyard orbit",
    high: "Orbital state knowledge is maintained within 1km (in any directions) until atmospheric reentry, or disposal to a graveyard orbit",
  },
};
