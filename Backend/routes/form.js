const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middleware/auth");

const router = express.Router();

// Form Model
const Form = require("../models/NewForm");
const User = require("../models/User");

//  @route      POST /form/create
//  @desc       Create a form
//  @access     Private
router.post("/create", auth, async (req, res) => {
	const {
		missionIndex,
		collisionAvoidanceCapabilities,
		dataSharing,
		detectionIdentificationTracking,
		nationalInternationalGuidlines,
		externalServices,
	} = req.body;

	try {
		const form = new Form({
			user: req.user.id,
			form: {
				missionIndex: missionIndex,
				collisionAvoidanceCapabilities: collisionAvoidanceCapabilities,
				dataSharing: dataSharing,
				detectionIdentificationTracking: detectionIdentificationTracking,
				nationalInternationalGuidlines: nationalInternationalGuidlines,
				externalServices: externalServices,
			},
		});

		await form.save();
		// res.status(200).send('Form added successfully');
		res.status(200).send({
			msg: "Form added successfully",
			success: true,
		});
	} catch (error) {
		// console.error(error.message);
		res.status(500).send("Server error");
	}
});

//  @route      GET /form/user/:userId
//  @desc       Get form by user id
//  @access     Private
// For Admin
router.get("/user/:userId", auth, async (req, res) => {
	try {
		const user = await User.findById(req.params.userId);
		// find User
		if (!user) {
			return res.status(400).json({ errors: [{ msg: "User does not exist" }] });
		}

		//  get forms created by that user
		const forms = await Form.find({ user: user._id });

		//  return forms
		return res.json(forms);
	} catch (error) {
		// console.error(error.message);
		res.status(500).send("Server error");
	}
});

//  @route      GET /form/user/forms
//  @desc       Get form for the logged in user
//  @access     Private
// For logged in User
// router.get("/user/forms", async (req, res) => {
// 	res.json("abcd");
// try {
// 	const user = await User.findById({ _id: req.user.id });
// 	// find User
// 	if (!user) {
// 		return res.status(400).json({ errors: [{ msg: "User does not exist" }] });
// 	}

// 	//  get forms created by that user
// 	const forms = await Form.find({ user: req.user.id });

// 	//  return forms
// 	return res.json(forms);
// } catch (error) {
// 	res.status(500).send("Server error");
// }
// });

router.get("/forms", auth, async (req, res) => {
	// res.json("abcd");
	try {
		const user = await User.findById({ _id: req.user.id });
		// find User
		if (!user) {
			return res.status(400).json({ errors: [{ msg: "User does not exist" }] });
		}

		//  get forms created by that user
		const forms = await Form.find({ user: req.user.id, isSubmit: false });

		//  return forms
		return res.json(forms);
	} catch (error) {
		res.status(500).send("Server error");
	}
});

//  @route      GET /form/:id
//  @desc       Get a form by form id
//  @access     Private
router.get("/:id", auth, async (req, res) => {
	try {
		const form = await Form.findById(req.params.id);
		if (!form) {
			return res.status(400).json({ errors: [{ msg: "Form does not exist" }] });
		}
		return res.json(form);
	} catch (error) {
		res.status(500).send("Server error");
	}
});

//  @route      PUT /form/id
//  @desc       Update a form by id
//  @access     Private
router.put("/:id", auth, async (req, res) => {
	const {
		missionIndex,
		collisionAvoidanceCapabilities,
		dataSharing,
		detectionIdentificationTracking,
		nationalInternationalGuidlines,
		externalServices,
	} = req.body;

	// console.log(req.body);
	try {
		let form = await Form.findById(req.params.id);
		if (!form) {
			return res.status(400).json({ errors: [{ msg: "Form does not exist" }] });
		}
		// console.log(form);
		form = await Form.findByIdAndUpdate(
			{ _id: req.params.id },
			{
				$set: {
					form: {
						missionIndex: missionIndex ? missionIndex : {},
						collisionAvoidanceCapabilities: collisionAvoidanceCapabilities
							? collisionAvoidanceCapabilities
							: {},
						dataSharing: dataSharing ? dataSharing : {},
						detectionIdentificationTracking: detectionIdentificationTracking
							? detectionIdentificationTracking
							: {},
						nationalInternationalGuidlines: nationalInternationalGuidlines
							? nationalInternationalGuidlines
							: {},
						externalServices: externalServices ? externalServices : {},
					},
				},
			},
			{ new: true }
		);
		res.status(200).send({ msg: "Form Updated", success: true });
	} catch (error) {
		res.status(500).send("Server error");
	}
});

//  @route      PUT /form/response/:id
//  @desc       Update a form by id
//  @access     Private
router.put("/response/:id", auth, async (req, res) => {
	const { response } = req.body;

	try {
		let form = await Form.findById(req.params.id);
		if (!form) {
			return res.status(400).json({ errors: [{ msg: "Form does not exist" }] });
		}
		form = await Form.findByIdAndUpdate(
			{ _id: req.params.id },
			{
				$set: {
					adminFeedback: response,
				},
			},
			{ new: true }
		);
		res.status(200).send({ msg: "Admin response added", success: true });
	} catch (error) {
		res.status(500).send("Server error");
	}
});

//  @route      PUT /form/submit/id
//  @desc       Update a form by id
//  @access     Private
router.put("/submit/:id", auth, async (req, res) => {
	const {
		missionIndex,
		collisionAvoidanceCapabilities,
		dataSharing,
		detectionIdentificationTracking,
		nationalInternationalGuidlines,
		externalServices,
	} = req.body;

	// console.log(req.body);
	try {
		let form = await Form.findById(req.params.id);
		if (!form) {
			return res.status(400).json({ errors: [{ msg: "Form does not exist" }] });
		}
		// console.log(form);
		form = await Form.findByIdAndUpdate(
			{ _id: req.params.id },
			{
				$set: {
					form: {
						missionIndex: missionIndex ? missionIndex : {},
						collisionAvoidanceCapabilities: collisionAvoidanceCapabilities
							? collisionAvoidanceCapabilities
							: {},
						dataSharing: dataSharing ? dataSharing : {},
						detectionIdentificationTracking: detectionIdentificationTracking
							? detectionIdentificationTracking
							: {},
						nationalInternationalGuidlines: nationalInternationalGuidlines
							? nationalInternationalGuidlines
							: {},
						externalServices: externalServices ? externalServices : {},
					},
					isSubmit: true,
				},
			},
			{ new: true }
		);
		res.status(200).send({ msg: "Form Submitted successfully", success: true });
	} catch (error) {
		res.status(500).send("Server error");
	}
});

module.exports = router;
