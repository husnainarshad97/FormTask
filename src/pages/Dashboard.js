import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import cookie from "js-cookie";
import axios from "axios";

const Dashboard = () => {
	const navigate = useNavigate();
	const cookies = cookie.get("token");

	const [forms, setForms] = React.useState([]);

	useEffect(() => {
		if (cookies === null || cookies === undefined) {
			navigate("/");
		}
	});

	const getUserForms = async () => {
		await axios
			.get(`/form/forms`, {
				headers: {
					Authorization: cookies,
				},
			})
			.then((res) => {
				console.log(res.data);
				setForms(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => getUserForms(), []);

	const render = (val) => navigate(val);

	return (
		<div>
			<h1>User Dashboard</h1>
			<button onClick={() => render("/dashboard/missions")}>Create New Mission</button>

			<br />
			<h2>Saved Forms</h2>
			{forms &&
				forms.map((data) => (
					<Link key={data._id} to={`/dashboard/form/${data._id}`}>
						<div style={{ border: "2px solid red", cursor: "pointer" }}>
							<p>User id : {data._id}</p>
						</div>
					</Link>
				))}
		</div>
	);
};

export default Dashboard;
