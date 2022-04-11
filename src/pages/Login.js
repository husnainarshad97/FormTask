//Login

import axios from "axios";
import jsCookie from "js-cookie";
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
	// const { user, isAuthenticated, isLoading } = useAuth0();

	// useEffect(() => {
	// 	console.log(isAuthenticated);
	// }, [isAuthenticated]);

	// useEffect(() => {
	// 	console.log("Loading?" + isLoading);
	// }, [isLoading]);

	// if (isLoading) {
	// 	return <div>Loading ...</div>;
	// }

	// return isAuthenticated && <div>Login page!</div>;
	const [loading, setLoading] = React.useState(false);
	const navigate = useNavigate();
	const cookie = jsCookie.get("token");

	useEffect(() => {
		if (cookie === null || cookie === undefined) {
			navigate("/");
		} else {
			navigate("/dashboard");
		}
	},[]);

	const emailRef = useRef();
	const passwordRef = useRef();

	const Login = async (e) => {
		e.preventDefault();

		setLoading(true);

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		console.log(email, password);
		await axios
			.post("/login", {
				email: email,
				password: password,
			})
			.then((res) => {
				console.log(res.data);
				jsCookie.set("token", res.data.token);
				emailRef.current.value = "";
				passwordRef.current.value = "";
				setLoading(false);
				navigate("/dashboard");
			})
			.catch((e) => {
				console.log(e);
				setLoading(false);
			});
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={Login}>
				<div>
					<label>Email</label>
					<input type="email" name="email" ref={emailRef} />
				</div>

				<div>
					<label>Password</label>
					<input type="password" name="password" ref={passwordRef} />
				</div>

				<button type="submit">Login</button>
				<span>
					Don't have an account? <Link to="/register">Sign up</Link>
				</span>

				{loading && "loading...."}
			</form>
		</div>
	);
};

export default Login;
