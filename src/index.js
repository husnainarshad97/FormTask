import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import reportWebVitals from "./reportWebVitals";
//import "tachyons";

import TabsModule from "./containers/TabsModule";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import Dashboard from "./containers/Dashboard";
import Summary from "./containers/Summary";
import Tabs from "react-tabs/lib/components/Tabs";
import Register from "./pages/Register";
import Admin from "./pages/admin";
import FormDashboard from "./pages/FormDashboard";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import UserForm from "./pages/UserForm";

//import Answer from "./components/dashboard/Answer";

//const uri = "http://localhost:3000/platform";

ReactDOM.render(
	<Router>
		{/* <style></style>

    <div>
      <nav></nav>
    </div> */}
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
			{/* <Route path="/platform" element={<TabsModule />} /> */}
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/dashboard/form/:id" element={<UserForm />} />
			<Route path="/dashboard/missions" exact element={<TabsModule />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="/admin/user/:id" element={<User />} />
			<Route path="/admin/user/:id/form" element={<FormDashboard />} />
		</Routes>
	</Router>,

	document.getElementById("root")
);

/*
<Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/platform" element={<TabsModule />} />
      <Route path="/" exact element={<Home />} />
      <Route path="dashboard/*" element={<Dashboard />} />
    </Routes>

*/
