const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FormSchema = new Schema({
	user: {
		type: mongoose.Types.ObjectId,
		ref: "user",
	},
	form: {
		missionIndex: {},
		collisionAvoidanceCapabilities: {},
		dataSharing: {},
		detectionIdentificationTracking: {},
		nationalInternationalGuidlines: {},
		externalServices: {},
	},
	adminFeedback: {
		type: String,
	},
	isSubmit: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("form", FormSchema);
