// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const FormSchema = new Schema({
//   user: {
//     type: mongoose.Types.ObjectId,
//     ref: 'user',
//   },
//   form: {
//     missionIndex: {
//       mockData: {
//         mockIndexAbsolute: {
//           type: String,
//         },
//         mockIndexRelative: {
//           type: String,
//         },
//       },
//       formData: {
//         numberOfSatellites: {
//           value: String,
//           option: String,
//         },
//         mass: {
//           value: String,
//           option: String,
//         },
//         crossSectionalArea: {
//           value: String,
//           option: String,
//         },
//         deployDuration: {
//           value: String,
//           option: String,
//         },
//         operationalMeanAltitude: {
//           value: String,
//           option: String,
//         },
//         operationalInclination: {
//           value: String,
//           option: String,
//         },
//         targetApogee: {
//           value: String,
//           option: String,
//         },
//         targetPerigee: {
//           value: String,
//           option: String,
//         },
//         exptectedPostMissionDisposalSuccessRate: {
//           value: String,
//           option: String,
//         },
//         mitigatedCollisionRisk: {
//           value: String,
//           option: String,
//         },
//       },
//     },
//     collisionAvoidanceCapabilities: {
//       orbitalStateKnowledge: {
//         value: {
//           type: String,
//         },
//         options: [],
//       },
//       availabilityToCoordinate: {
//         value: {
//           type: String,
//         },
//         options: [],
//       },
//       capabilityToCoordinate: {
//         value: {
//           type: String,
//         },
//         options: [],
//       },
//       maintainStateKnoledgeAfterOperations: {
//         value: {
//           type: String,
//         },
//         options: [],
//       },
//     },
//     dataSharing: {
//       Q1: {
//         value: String,
//         options: [],
//       },
//       Q2: {
//         value: String,
//         options: [],
//       },
//       Q3: {
//         value: String,
//         options: [],
//       },
//       Q4: {
//         value: String,
//         options: [],
//       },
//       Q5: {
//         value: String,
//         options: [],
//       },
//       Q6: {
//         value: String,
//         options: [],
//       },
//       Q7: {
//         value: String,
//         options: [],
//       },
//       Q8: {
//         value: String,
//         options: [],
//       },
//       Q9: {
//         value: String,
//         options: [],
//       },
//       Q10: {
//         value: String,
//         options: [],
//       },
//       Q11: {
//         value: String,
//         options: [],
//       },
//       Q12: {
//         value: Boolean,
//       },
//       Q13: {
//         value: String,
//         options: [],
//       },
//       Q14: {
//         value: String,
//         options: [],
//       },
//       Q15: {
//         value: String,
//         options: [],
//       },
//       Q16: {
//         value: String,
//         options: [],
//       },
//     },
//     detectionIdentificationTracking: {
//       mockData: {
//         optical: { String },
//         radat: { String },
//         passDuration: { String },
//         avgOrbitalCoverage: { String },
//         internalDuration: { String },
//       },
//       geometricInputs: {
//         approximationDimension: { String },
//         dimApproximation: {
//           value: {
//             type: String,
//           },
//           options: {
//             type: String,
//           },
//         },
//       },
//       operationalOrbitParameters: {
//         apogeeAltitude: {
//           value: {
//             type: String,
//           },
//           options: {
//             type: String,
//           },
//         },
//         perigeeAltitude: {
//           value: {
//             type: String,
//           },
//           options: {
//             type: String,
//           },
//         },
//         inclination: {
//           value: {
//             type: String,
//           },
//           options: {
//             type: String,
//           },
//         },
//         rightAscensionNode: {
//           value: {
//             type: String,
//           },
//           options: {
//             type: String,
//           },
//         },
//         argumentsOfPerigee: {
//           value: {
//             type: String,
//           },
//           options: {
//             type: String,
//           },
//         },
//       },
//       qualitativeScore: {
//         value: {
//           type: String,
//         },
//         options: {
//           type: String,
//         },
//       },
//       bonus: {
//         value: {
//           type: String,
//         },
//         options: {
//           type: String,
//         },
//       },
//     },
//     nationalInternationalGuidlines: {
//       spaceDebrisMitigation: {
//         value: {
//           type: String,
//         },
//         options: {
//           type: String,
//         },
//       },
//       longTermSustainability: {
//         value: {
//           type: String,
//         },
//         options: {
//           type: String,
//         },
//       },
//       spaceDebrisMitigationStandards: {
//         value: {
//           type: String,
//         },
//         options: {
//           type: String,
//         },
//       },
//       standardizedOperationalProducts: {
//         value: {
//           type: String,
//         },
//         options: {
//           type: String,
//         },
//       },
//       ituRegulations: {
//         value: {
//           type: String,
//         },
//         options: {
//           type: String,
//         },
//       },
//       closeProximityRendezVous: {
//         type: Boolean,
//       },
//       ssrGuidlines: {
//         value: {
//           type: Boolean,
//         },
//         options: {
//           type: String,
//         },
//       },
//       payloadRegistered: {
//         value: {
//           type: Boolean,
//         },
//         options: {
//           type: String,
//         },
//       },
//       levelOfMinimization: {
//         value: {
//           type: Boolean,
//         },
//         xExplotion: {
//           type: String,
//         },
//         options: {
//           type: String,
//         },
//       },
//       spacecraftPassivated: {
//         value: {
//           type: Boolean,
//         },
//         successRatio: {
//           type: String,
//         },
//         options: {
//           type: String,
//         },
//       },
//       launchVehiclePassivated: {
//         value: {
//           type: Boolean,
//         },
//         successRatio: {
//           type: String,
//         },
//         options: {
//           type: String,
//         },
//       },
//       spacecraftDisposalOrbit: {
//         value: {
//           type: Boolean,
//         },
//         successRatio: {
//           type: String,
//         },
//         options: {
//           type: String,
//         },
//       },
//       launchVehicleDisposalOrbit: {
//         value: {
//           type: Boolean,
//         },
//         successRatio: {
//           type: String,
//         },
//         options: {
//           type: String,
//         },
//       },
//     },
//     externalServices: {
//       onOrbitServicing: {
//         value: {
//           type: Boolean,
//         },
//         options: {
//           type: String,
//         },
//       },
//       standardizedInterfaces: {
//         value: {
//           type: Boolean,
//         },
//         options: {
//           type: String,
//         },
//       },
//       lifeExtensionServices: {
//         value: {
//           type: Boolean,
//         },
//         options: {
//           type: String,
//         },
//       },
//       externalDebrisRemovalService: {
//         value: {
//           type: Boolean,
//         },
//         options: {
//           type: String,
//         },
//       },
//     },
//   },
// });

// module.exports = mongoose.model('form', FormSchema);
