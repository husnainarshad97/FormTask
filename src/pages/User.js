import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const User = () => {
	const [users, setUsers] = React.useState([]);

	const location = useLocation();
	let userId = location.pathname;
	userId = userId.replace("/admin/user/", "");

	const getUserForms = async () => {
		await axios
			.get(`/form/user/forms/${userId}`)
			.then((res) => {
				console.log(res.data);
				setUsers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => getUserForms(), []);
	return (
		<div>
			<h1>User Forms</h1>
			{users &&
				users.map((data, index) => (
					<Link key={data._id} to={`/admin/user/${userId}/form?formId=${data._id}`}>
						<div style={{ border: "2px solid red", cursor: "pointer" }}>
							<p>Number : {index + 1}</p>
							<p>Form Id : {data._id}</p>
						</div>
					</Link>
				))}
		</div>
	);
};

export default User;
