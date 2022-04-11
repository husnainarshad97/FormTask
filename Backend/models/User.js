const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
	username: {
		type: "String",
		// required: true,
	},
	email: {
		type: "String",
		// required: true,
	},
	password: {
		type: "String",
		// required: true,
		minlength: 6,
	},
	role: {
		type: String,
		// required: true,
		default: "user",
	},
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", User);
