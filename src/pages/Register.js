import React, { useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import jsCookie from "js-cookie";

const Register = () => {
	const [loading, setLoading] = React.useState(false);

	const usernameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	const navigate = useNavigate();

	const registerUser = async (e) => {
		e.preventDefault();
		const username = usernameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		setLoading(true);

		console.log(username, email, password);

		await axios
			.post("http://localhost:5000/register", {
				username: username,
				email: email,
				password: password,
			})
			.then((res) => {
				console.log(res.data);
				setLoading(false);
				jsCookie.set("token", res.data.token);
				navigate("/");
				usernameRef.current.value = "";
				emailRef.current.value = "";
				passwordRef.current.value = "";
			})
			.catch((e) => {
				console.log(e);
				setLoading(false);
			});
	};

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<div>
					<label>Username</label>
					<input type="text" name="username" ref={usernameRef} />
				</div>

				<div>
					<label>Email</label>
					<input type="email" name="email" ref={emailRef} />
				</div>

				<div>
					<label>Password</label>
					<input type="password" name="password" ref={passwordRef} />
				</div>

				<button type="submit">Regitser</button>

				<span>
					Already have an account? <Link to="/">Sign in</Link>
				</span>
				{loading && "loading...."}
			</form>
		</div>
	);
};

export default Register;
