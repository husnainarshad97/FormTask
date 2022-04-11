import React from "react";
//import { useState } from "react";
import { Verification } from "../verification/Verification";

import { Formik, Field, Form } from "formik";

const Answer = ({
  question,
  answer,
  verification,
  size,
  ratio,
  ratio_bool,
  no_verif,
  points,
  max_points,
}) => {
  // const [correct, setCorrect] = useState(0);
  //"col-xl-3 col-lg-3"

  return (
    <div class={size}>
      <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 class="m-0 font-weight-bold text-primary">{question}</h6>
        </div>
        <div class="card-body">
          <h3>
            {" "}
            <b> Answer: </b> {answer} <br></br>
            {!no_verif && (
              <>
                {" "}
                <b> Verification level: </b> {verification} <br></br>
              </>
            )}
            {ratio_bool && (
              <>
                {" "}
                <b> Ratio : </b> {ratio} <br></br>{" "}
              </>
            )}
          </h3>{" "}
        </div>
      </div>
    </div>
  );
};

export default Answer;

/*




*/

/*
						<div class="col-xl-6 col-lg-6">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">On-Orbit Servicing Features ?</h6>
                                    <div class="dropdown no-arrow">

                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="chart-pie pt-4 pb-2"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>

                                    </div>

                                </div>
                            </div>
                        </div>


*/
