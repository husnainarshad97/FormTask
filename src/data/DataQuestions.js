export const MISSION_INDEX = [
  "Number of satellites",
  "Mass [kg]",

  "Cross-sectional area / Cross-Section Area in Randomly Tumbling Motion [m2]",

  "Deployment duration (years) ",

  "Operational mean altitude [km] ",

  "Operational inclination [deg] ",
  "Target end of life apogee [km] ",

  "Target end of life perigee [km] ",

  "Expected post mission disposal success rate  ",

  "Mitigated collision risk",
];

export const COLLA = [
  "Orbital state knowledge",
  "Availability to coordinate",
  "Capability to coordinate",
  //"Maneuver Capability",
];

export const BONUS_COLLA = [
  "[BONUS] Maintaining orbital state knowledge after the end of normal operations",
];

export const DATA_SHARING = [
  "Publish and update collision avoidance contact information",

  "Publish and update collision avoidance contact time zone/hours of operation",

  "Publish and update COLA contact/coordination request response time guarantees",

  "Publish and update satellite ephemeris",

  "Publish and update covariance information",

  "Publish and update covariance characterization/validation",
  "Publish and update launch vehicle timing/trajectories",

  "Publish and update satellite mass",

  "Publish and update satellite maneuverability",

  "Publish and update satellite maneuverability capability",
  "Publish and update satellite operational status",
];

export const BONUS_DATA_SHARING = [
  "Radio-frequency information (interference avoidance/mitigation/geolocation)	",
  "Spacecraft anomaly information	",
  "Datasets to support government or academic research	",
  "API or other means for automatic access to above information	",
];

export const AUTONOMOUS_DATA_SHARING = [
  "Radio-frequency information (interference avoidance/mitigation/geolocation)",
  "Spacecraft anomaly information",
  "Datasets to support government or academic research",

  "API or other means for automatic access to above information",
];

export const DIT_QUESTION = [
  "Geometric Approximation and Dimensions",

  "Dimension approximation (please enter the dimensions for each type of satellite in the mission )",

  "Apogee Altitude (km)",
  "Perigee altitude (km)",
  "Inclination (°)",

  "Right Ascension of the ascending node (°)",
  "Argument of perigee (°)",
];

export const DIT_QUALITATIVE = [
  "Do you track the resident space objects you operate? Select all that apply. Resident space object is tracked:",
];

export const DIT_BONUS = [
  "Have you provided the following characterisation data on the satellite to the SSR evaluator?",
];

export const ADO = {
  compliance: [
    "Space debris mitigation guidelines (UNCOPUOS or IADC)",

    "Long-term sustainability guidelines (UNCOPUOS)",

    "Space debris mitigation standards or verifiable laws (ISO, FSOA, NASA)",

    "Standardized operational products (CCSDS)  ",

    "ITU regulations on spectrum use  ",

    //    "Safety standards in case of close proximity or rendezvous operations (CONFERS, human-graded standards)",
  ],

  guidelines: [
    "Does your spacecraft release debris in orbit?  ",

    "Is your payload registered by your launching state?  ",
  ],

  explosion: [
    "Level of minimization of the probability of explosion as part of the operational lifetime  ",
  ],

  passivation: [
    "Spacecraft passivated after its operational lifetime  ",
    "Launch vehicle passivated after its operational lifetime ",

    "The spacecraft uses a disposal orbit after its operational lifetime  ",

    "The launch vehicle uses a disposal orbit after its operational lifetime  ",
  ],
};

export const EXTERNAL = [
  "On-orbit servicing features ?",

  "Standardized Interface ?",

  "Life extension services (non-contact support, inspection, refuelling, upgradability, orbit modification and maintenance)",

  "External Active debris removal services",
];

//OPTIONAL INPUTS

export const AUTONOMOUS = [
  "Criteria triggering a maneuver",

  "Where and frequency AM are reflected in shared SSA informationWhere and frequency AM are reflected in shared SSA information",

  "If emergency stop procedures exist",
];

// Add another optional input which is in ADO
