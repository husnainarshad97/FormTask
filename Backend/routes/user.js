const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express();

//  @route      POST /register
//  @desc       Registers a new user
//  @access     Public
router.post("/register", async (req, res) => {
	const { username, email, password } = req.body;

	if (!username || !email || !password) {
		res.status(500).json({ msg: "fill all fields", success: false });
	}

	try {
		const createUser = new User({ username, email, password });
		// Check if user already exits
		const isExist = await User.findOne({ email: email });
		if (isExist) {
			res.status(500).send({
				msg: "User already exists",
				success: false,
			});
		}
		// Else create a new user
		else {
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(createUser.password, salt, (err, hash) => {
					if (err) throw err;
					createUser.password = hash;
					createUser.save((err) => {
						if (err) {
							res.status(500).send({
								msg: "Error creating user",
								success: false,
							});
						} else {
							const payload = {
								user: {
									id: createUser.id,
									role: createUser.role,
								},
							};

							jwt.sign(
								payload,
								process.env.JWT_SECRET,
								{ expiresIn: "5 days" },
								(err, token) => {
									if (err) throw err;
									res.json({
										msg: "Account successfully created",
										success: true,
										token: token,
									});
								}
							);

							// res.status(200).send({
							//   msg: 'Account successfully created',
							//   success: true,
							// });
						}
					});
				});
			});
		}
	} catch (e) {
		throw e;
	}
});

//  @route      POST /admin/register
//  @desc       Registers a new admin
//  @access     Public
router.post("/admin/register", async (req, res) => {
	const { username, email, password } = req.body;

	if (!username || !email || !password) {
		res.status(500).json({ msg: "fill all fields", success: false });
	}

	try {
		const createUser = new User({ username, email, password, role: "admin" });
		// Check if user already exits
		const isExist = await User.findOne({ email: email });
		if (isExist) {
			res.status(500).send({
				msg: "User already exists",
				success: false,
			});
		}
		// Else create a new user
		else {
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(createUser.password, salt, (err, hash) => {
					if (err) throw err;
					createUser.password = hash;
					createUser.save((err) => {
						if (err) {
							res.status(500).send({
								msg: "Error creating user",
								success: false,
							});
						} else {
							const payload = {
								user: {
									id: createUser.id,
									role: createUser.role,
								},
							};

							jwt.sign(
								payload,
								process.env.JWT_SECRET,
								{ expiresIn: "5 days" },
								(err, token) => {
									if (err) throw err;
									res.json({
										msg: "Account successfully created",
										success: true,
										token: token,
									});
								}
							);

							// res.status(200).send({
							//   msg: 'Account successfully created',
							//   success: true,
							// });
						}
					});
				});
			});
		}
	} catch (e) {
		throw e;
	}
});

//  @route      POST routes/user/login
//  @desc       Registers a new user
//  @access     Public
router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		let user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
		}

		const payload = {
			user: {
				id: user.id,
				role: user.role,
			},
		};

		jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5 days" }, (err, token) => {
			if (err) throw err;
			res.json({ token });
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
});

//  @route      GET routes/form/users
//  @desc       Get users
//  @access     Private
router.get("/users", async (req, res) => {
	try {
		const users = await User.find({}).select("username");

		//  return users
		return res.json(users);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ msg: "Server error", success: false });
	}
});

module.exports = router;
