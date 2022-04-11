import "../css/style.css";

//import Answer from "../components/dashboard/Answer";
//import { useState } from "react";

import { Route, Routes, Link } from "react-router-dom";

import ListAnswer from "../components/dashboard/ListAnswer"; //   ListAnswer';

//import { useAuth0 } from "@auth0/auth0-react";

// MOCK DATA FILL TO REMOVE IN FINAL VERSION

const EXTERNAL_QUESTIONS = [
	{
		id: "bonus_external_1",
		question: "On orbit service ?",
		answer: "yes",
		points: 0.5,
		max_points: 0.5,
		verification: "authority",
	},

	{
		id: "bonus_external_2",
		question: "Standardized Interface ?",
		answer: "no",
		points: 0.5,
		max_points: 0.5,
		verification: "public",
	},

	{
		id: "bonus_external_3",
		question:
			"Life extension services (non-contact support, inspection, refuelling, upgradability, orbit modification and maintenance)",
		answer: "no",
		points: 0.5,
		max_points: 0.5,
		verification: "public",
	},

	{
		id: "bonus_external_4",
		question: "External Active debris removal services",
		answer: "no",
		points: 0.5,
		max_points: 0.5,
		verification: "public",
	},
];

// END MOCK DATA FILL TO REMOVE IN FINAL VERSION

/*
const { user, isAuthenticated, isLoading } = useAuth0();

if (isLoading) {
  return <div>Loading ...</div>;
}
*/

const Dashboard = ({ values }) => {
	return (
		true && (
			<div id="wrapper">
				<ul
					class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
					id="accordionSidebar"
				>
					<a
						class="sidebar-brand d-flex align-items-center justify-content-center"
						href="index.html"
					>
						<div class="sidebar-brand-icon rotate-n-15"></div>
						<div class="sidebar-brand-text mx-3">Logo SSR</div>
					</a>

					<li class="nav-item">
						<Link to="missionindex">
							<div class="nav-link collapsed">
								<span>Mission index</span>
							</div>
						</Link>
					</li>

					<li class="nav-item">
						<Link to="colla">
							<div class="nav-link collapsed">
								<span>Collision avoidance Capabilities</span>
							</div>
						</Link>
					</li>

					<li class="nav-item">
						<Link to="datasharing">
							<div class="nav-link collapsed">
								<span>Data sharing</span>
							</div>
						</Link>
					</li>

					<li class="nav-item">
						<Link to="dit">
							<div class="nav-link collapsed">
								<span>Detectability, identification and Trackability</span>
							</div>
						</Link>
					</li>

					<li class="nav-item">
						<Link to="ado">
							<div class="nav-link collapsed">
								<span>Application of Design and Operation Standards</span>
							</div>
						</Link>
					</li>

					<li class="nav-item">
						<Link to="externalservices">
							<div class="nav-link collapsed">
								<span>External Services</span>
							</div>
						</Link>
					</li>

					<li class="nav-item active">
						<Link to="summary">
							<div class="nav-link collapsed">
								<span>Summary</span>
							</div>
						</Link>
					</li>
				</ul>

				{/* <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <div class="container-fluid">
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>
              <div class="row"></div>

              <Routes>
                <Route
                  exact
                  path="/"
                  element={<ListAnswer answers={EXTERNAL_QUESTIONS} />}
                />

                <Route path="missionindex" />

                <Route path="dit" />

                <Route path="ado" />

                <Route
                  path="externalservices"
                  element={<ListAnswer answers={EXTERNAL_QUESTIONS} />}
                />

                <Route path="summary" />
              </Routes>
            </div>
          </div>

          <footer class="sticky-footer bg-white">
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                <span>Copyright © Space Sustainability Rating 2021</span>
              </div>
            </div>
          </footer>
        </div> */}
			</div>
		)
	);
};

export default Dashboard;
