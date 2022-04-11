import "react-tabs/style/react-tabs.css";

import React, { useEffect, useState } from "react";

import DataSharingQuestion from "./DataSharingQuestion";

import "../../../css/style.css";

import * as constId from "../../../utils/constants";

const DataSharing = ({ formik }) => {
  return (
    <div id="wrapper">
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-12 col-lg-12">
                <div class="card shadow mb-4">
                  <div class="bd-example">
                    <div class="table-responsive-sm">
                      <div
                        style={{
                          backgroundColor: "rgb(200, 200, 203)",
                          textAlign: "center",
                        }}
                      >
                        <h5> Collision Avoidance Coordination information </h5>
                      </div>

                      <table class="table">
                        <thead>
                          <tr
                            style={{
                              backgroundColor: "rgb(241, 241, 242)",
                            }}
                          >
                            <th scope="col-xl-2 col-lg-2">Data Shared</th>
                            <th scope="col">None</th>
                            <th scope="col">SSA providers</th>
                            <th scope="col">
                              Other operators <br />
                              upon request
                            </th>
                            <th scope="col">
                              Voluntary network of <br />
                              operations / stakeholders
                            </th>
                            <th scope="col">Public</th>
                            <th scope="col">Verification level</th>
                          </tr>
                        </thead>

                        <tbody>
                          <DataSharingQuestion
                            question={
                              "Publish and update collision avoidance contact information"
                            }
                            id={"data_sharing.question.0"}
                            verif_id={"data_sharing.verif.question.0"}
                            formik={formik}
                          ></DataSharingQuestion>

                          <DataSharingQuestion
                            question={
                              "Publish and update collision avoidance contact time zone/hours of operation   "
                            }
                            id={"data_sharing.question.1"}
                            verif_id={"data_sharing.verif.question.1"}
                            formik={formik}
                          ></DataSharingQuestion>

                          <DataSharingQuestion
                            question={
                              "Publish and update COLA contact/coordination request response time guarantees"
                            }
                            id={"data_sharing.question.2"}
                            verif_id={"data_sharing.verif.question.2"}
                            formik={formik}
                          ></DataSharingQuestion>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-12 col-lg-12">
                <div class="card shadow mb-4">
                  <div class="bd-example">
                    <div class="table-responsive-sm">
                      <div
                        style={{
                          backgroundColor: "rgb(200, 200, 203)",
                          textAlign: "center",
                        }}
                      >
                        <h5>Satellite metric information</h5>
                      </div>

                      <table class="table">
                        <thead>
                          <tr
                            style={{
                              backgroundColor: "rgb(241, 241, 242)",
                            }}
                          >
                            <th scope="col-xl-2 col-lg-2">Data Shared</th>
                            <th scope="col">None</th>
                            <th scope="col">SSA providers</th>
                            <th scope="col">
                              Other operators <br />
                              upon request
                            </th>
                            <th scope="col">
                              Voluntary network of <br />
                              operations / stakeholders
                            </th>
                            <th scope="col">Public</th>
                            <th scope="col">Verification level</th>
                          </tr>
                        </thead>

                        <tbody>
                          <DataSharingQuestion
                            question={"Publish and update satellite ephemeris"}
                            id={"data_sharing.question.3"}
                            verif_id={"data_sharing.verif.question.3"}
                            formik={formik}
                          ></DataSharingQuestion>

                          <DataSharingQuestion
                            question={
                              "Publish and update covariance information"
                            }
                            id={"data_sharing.question.4"}
                            verif_id={"data_sharing.verif.question.4"}
                            formik={formik}
                          ></DataSharingQuestion>

                          <DataSharingQuestion
                            question={
                              "Publish and update covariance characterization/validation"
                            }
                            id={"data_sharing.question.5"}
                            verif_id={"data_sharing.verif.question.5"}
                            formik={formik}
                          ></DataSharingQuestion>

                          <DataSharingQuestion
                            question={
                              " Publish and update launch vehicle timing/trajectories"
                            }
                            id={"data_sharing.question.6"}
                            verif_id={"data_sharing.verif.question.6"}
                            formik={formik}
                          ></DataSharingQuestion>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-12 col-lg-12">
                <div class="card shadow mb-4">
                  <div class="bd-example">
                    <div class="table-responsive-sm">
                      <div
                        style={{
                          backgroundColor: "rgb(200, 200, 203)",
                          textAlign: "center",
                        }}
                      >
                        <h5>Satellite Characterization information</h5>
                      </div>

                      <table class="table">
                        <thead>
                          <tr
                            style={{
                              backgroundColor: "rgb(241, 241, 242)",
                            }}
                          >
                            <th scope="col-xl-2 col-lg-2">Data Shared</th>
                            <th scope="col">None</th>
                            <th scope="col">SSA providers</th>
                            <th scope="col">
                              Other operators <br />
                              upon request
                            </th>
                            <th scope="col">
                              Voluntary network of <br />
                              operations / stakeholders
                            </th>
                            <th scope="col">Public</th>
                            <th scope="col">Verification level</th>
                          </tr>
                        </thead>

                        <tbody>
                          <DataSharingQuestion
                            question={"Publish and update satellite mass"}
                            id={"data_sharing.question.7"}
                            verif_id={"data_sharing.verif.question.7"}
                            formik={formik}
                          ></DataSharingQuestion>

                          <DataSharingQuestion
                            question={
                              "Publish and update satellite maneuverability"
                            }
                            id={"data_sharing.question.8"}
                            verif_id={"data_sharing.verif.question.8"}
                            formik={formik}
                          ></DataSharingQuestion>

                          <DataSharingQuestion
                            question={
                              "Publish and update satellite maneuverability capability"
                            }
                            id={"data_sharing.question.9"}
                            verif_id={"data_sharing.verif.question.9"}
                            formik={formik}
                          ></DataSharingQuestion>

                          <DataSharingQuestion
                            question={
                              "Publish and update satellite operational status"
                            }
                            id={"data_sharing.question.10"}
                            verif_id={"data_sharing.verif.question.10"}
                            formik={formik}
                          ></DataSharingQuestion>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-12 col-lg-12">
                <div class="card shadow mb-4">
                  <div class="bd-example">
                    <div class="table-responsive-sm">
                      <div
                        style={{
                          backgroundColor: "rgb(200, 200, 203)",
                          textAlign: "center",
                        }}
                      >
                        <h5>If autonomous systems, publish and update</h5>
                      </div>

                      <div>
                        {" "}
                        <b>
                          Does your spacecraft use autonomous systems (systems
                          whithout a human in the loop )?{" "}
                        </b>{" "}
                        {formik.errors.data_sharing &&
                          formik.errors.data_sharing.hasOwnProperty(
                            "autonomous"
                          ) && (
                            <div style={{ color: "red" }}>
                              <small>
                                {formik.errors.data_sharing.autonomous}
                              </small>
                            </div>
                          )}
                      </div>
                      <input
                        name="data_sharing.autonomous"
                        type="radio"
                        value="yes"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        checked={
                          formik.values.data_sharing.autonomous === "yes"
                        }
                        onClick={() => {
                          formik.values.data_sharing.question[
                            constId.AUTONOMOUS_0
                          ] = "";
                          formik.values.data_sharing.question[
                            constId.AUTONOMOUS_1
                          ] = "";
                          formik.values.data_sharing.question[
                            constId.AUTONOMOUS_2
                          ] = "";

                          formik.values.data_sharing.verif.question[
                            constId.AUTONOMOUS_0
                          ] = "";
                          formik.values.data_sharing.verif.question[
                            constId.AUTONOMOUS_1
                          ] = "";
                          formik.values.data_sharing.verif.question[
                            constId.AUTONOMOUS_2
                          ] = "";
                        }}
                      />
                      <label>Yes</label>

                      <input
                        type="radio"
                        name="data_sharing.autonomous"
                        value="no"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        checked={formik.values.data_sharing.autonomous === "no"}
                        onClick={() => {
                          formik.values.data_sharing.question[
                            constId.AUTONOMOUS_0
                          ] = ["invalid"];
                          formik.values.data_sharing.question[
                            constId.AUTONOMOUS_1
                          ] = ["invalid"];
                          formik.values.data_sharing.question[
                            constId.AUTONOMOUS_2
                          ] = ["invalid"];

                          formik.values.data_sharing.verif.question[
                            constId.AUTONOMOUS_0
                          ] = "none";
                          formik.values.data_sharing.verif.question[
                            constId.AUTONOMOUS_1
                          ] = "none";
                          formik.values.data_sharing.verif.question[
                            constId.AUTONOMOUS_2
                          ] = "none";
                        }}
                      />
                      <label>No</label>

                      {formik.values.data_sharing.autonomous === "yes" && (
                        <table class="table">
                          <thead>
                            <tr
                              style={{
                                backgroundColor: "rgb(241, 241, 242)",
                              }}
                            >
                              <th scope="col-xl-2 col-lg-2">Data Shared</th>
                              <th scope="col">None</th>
                              <th scope="col">SSA providers</th>
                              <th scope="col">
                                Other operators <br />
                                upon request
                              </th>
                              <th scope="col">
                                Voluntary network of <br />
                                operations / stakeholders
                              </th>
                              <th scope="col">Public</th>
                              <th scope="col">Verification level</th>
                            </tr>
                          </thead>

                          <tbody>
                            <DataSharingQuestion
                              question={"Criteria triggering a maneuver"}
                              id={"data_sharing.question.11"}
                              verif_id={"data_sharing.verif.question.11"}
                              formik={formik}
                            ></DataSharingQuestion>

                            <DataSharingQuestion
                              question={
                                "Where and frequency AM are reflected in shared SSA informationWhere and frequency AM are reflected in shared SSA information"
                              }
                              id={"data_sharing.question.12"}
                              verif_id={"data_sharing.verif.question.12"}
                              formik={formik}
                            ></DataSharingQuestion>

                            <DataSharingQuestion
                              question={" If emergency stop procedures exist"}
                              id={"data_sharing.question.13"}
                              verif_id={"data_sharing.verif.question.13"}
                              formik={formik}
                            ></DataSharingQuestion>
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-12 col-lg-12">
                <div class="card shadow mb-4">
                  <div class="bd-example">
                    <div class="table-responsive-sm">
                      <div
                        style={{
                          backgroundColor: "rgb(200, 200, 203)",
                          textAlign: "center",
                        }}
                      >
                        <h5>BONUS, publish and update</h5>
                      </div>

                      <table class="table">
                        <thead>
                          <tr
                            style={{
                              backgroundColor: "rgb(241, 241, 242)",
                            }}
                          >
                            <th scope="col-xl-2 col-lg-2">Data Shared</th>
                            <th scope="col">None</th>
                            <th scope="col">SSA providers</th>
                            <th scope="col">
                              Other operators <br />
                              upon request
                            </th>
                            <th scope="col">
                              Voluntary network of <br />
                              operations / stakeholders
                            </th>
                            <th scope="col">Public</th>
                            <th scope="col">Verification level</th>
                          </tr>
                        </thead>

                        <tbody>
                          <DataSharingQuestion
                            question={
                              "Radio-frequency information (interference avoidance/mitigation/geolocation)"
                            }
                            id={"data_sharing.bonus.0"}
                            verif_id={"data_sharing.verif.bonus.0"}
                            formik={formik}
                            bonus={true}
                          ></DataSharingQuestion>

                          <DataSharingQuestion
                            question={"Spacecraft anomaly information"}
                            id={"data_sharing.bonus.1"}
                            verif_id={"data_sharing.verif.bonus.1"}
                            formik={formik}
                            bonus={true}
                          ></DataSharingQuestion>

                          <DataSharingQuestion
                            question={
                              "Datasets to support government or academic research"
                            }
                            id={"data_sharing.bonus.2"}
                            verif_id={"data_sharing.verif.bonus.2"}
                            formik={formik}
                            bonus={true}
                          ></DataSharingQuestion>

                          <DataSharingQuestion
                            question={
                              "API or other means for automatic access to above information"
                            }
                            id={"data_sharing.bonus.3"}
                            verif_id={"data_sharing.verif.bonus.3"}
                            formik={formik}
                            bonus={true}
                          ></DataSharingQuestion>
                        </tbody>
                      </table>
                    </div>
                    <pre>
                      {JSON.stringify(formik.values.data_sharing, null, 2)}

                      {JSON.stringify(formik.errors.data_sharing, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSharing;
