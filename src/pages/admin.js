import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
	const [users, setUsers] = React.useState([]);

	const getUsers = async () => {
		await axios
			.get("/users")
			.then((res) => {
				console.log(res.data);
				setUsers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => getUsers(), []);

	return (
		<div>
			<h1>Users</h1>
			{users &&
				users.map((data) => (
					<Link key={data._id} to={`/admin/user/${data._id}`}>
						<div style={{ border: "2px solid red", cursor: "pointer" }}>
							<p>User id : {data._id}</p>
							<p>Username : {data.username}</p>
						</div>
					</Link>
				))}
		</div>
	);
};

export default Admin;
