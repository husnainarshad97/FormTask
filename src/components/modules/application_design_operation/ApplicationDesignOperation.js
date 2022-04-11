import "react-tabs/style/react-tabs.css";

//import { Formik, Field, Form } from "formik";

import React, { useState } from "react";

import { Verification } from "../../verification/Verification";

import * as constId from "../../../utils/constants.js";

import {
  CONTENT_COMPLIANCE,
  CONTENT_PASSIVATION,
  CONTENT_EXPLOSION,
  CONTENT_CONFERS,
  Compliance,
  Passivation,
  Explosion,
} from "./HelpersApplicationDesignOperaion";

//const POINTS_OBTAINED = 2;
//const TOTAL_POINTS = 3;

const ApplicationDesignOperation = ({ formik }) => {
  return (
    <div id="wrapper">
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-12 col-lg-12">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <div
                      class="
                        react-tabs__tab-panel react-tabs__tab-panel--selected
                      "
                      role="tabpanel"
                      id="react-tabs-9"
                      aria-labelledby="react-tabs-8"
                    >
                      <div>
                        <h1>
                          {" "}
                          <b> National and international guidelines</b>{" "}
                        </h1>{" "}
                        <Compliance
                          formik={formik}
                          list_question={CONTENT_COMPLIANCE}
                        ></Compliance>
                        <b>
                          Does your mission include close proximity or rendez
                          vous operations?
                        </b>
                        <label>
                          <input
                            name="ado.confers"
                            type="radio"
                            value="yes"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            checked={formik.values.ado.confers === "yes"}
                            onClick={() =>
                              (formik.values.ado.question.compliance[
                                constId.CONFERS
                              ] = "")(
                                (formik.values.ado.verif.question.compliance[
                                  constId.CONFERS
                                ] = "")
                              )
                            }
                          ></input>
                          Yes
                        </label>
                        <label>
                          <input
                            name="ado.confers"
                            type="radio"
                            value="no"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            checked={formik.values.ado.confers === "no"}
                            onClick={() =>
                              (formik.values.ado.question.compliance[
                                constId.CONFERS
                              ] = "INVALID")(
                                (formik.values.ado.verif.question.compliance[
                                  constId.CONFERS
                                ] = "none")
                              )
                            }
                          ></input>
                          No
                        </label>
                        {formik.errors.ado &&
                          formik.errors.ado.hasOwnProperty("confers") && (
                            <div style={{ color: "red" }}>
                              <small>{formik.errors.ado.confers}</small>
                            </div>
                          )}
                        {formik.values.ado.confers === "yes" && (
                          <div>
                            <b> {CONTENT_CONFERS[0].question} </b>

                            <br></br>
                            <input
                              name={CONTENT_CONFERS[0].id}
                              type="radio"
                              value="none"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              checked={
                                formik.values.ado.question.compliance[
                                  constId.CONFERS
                                ] === "none"
                              }
                              onClick={() => {
                                formik.values.ado.verif.question.compliance[
                                  constId.CONFERS
                                ] = "none";
                              }}
                            />
                            <label>No Compliance</label>
                            <br></br>

                            <input
                              type="radio"
                              name={CONTENT_CONFERS[0].id}
                              value="mandatory"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              checked={
                                formik.values.ado.question.compliance[
                                  constId.CONFERS
                                ] === "mandatory"
                              }
                              onClick={() => {
                                formik.values.ado.verif.question.compliance[
                                  constId.CONFERS
                                ] = "";
                              }}
                            />
                            <label> Compliant, mandatory adopted</label>

                            <br></br>

                            <input
                              type="radio"
                              name={CONTENT_CONFERS[0].id}
                              value="voluntary"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              checked={
                                formik.values.ado.question.compliance[
                                  constId.CONFERS
                                ] === "voluntary"
                              }
                              onClick={() => {
                                formik.values.ado.verif.question.compliance[
                                  constId.CONFERS
                                ] = "";
                              }}
                            />
                            <label> Compliant, voluntary adopted</label>
                            <br></br>

                            <Verification
                              formik={formik}
                              name={CONTENT_CONFERS[0].verif}
                              value={
                                formik.values.ado.verif.question.compliance[
                                  constId.CONFERS
                                ]
                              }
                              disabled={
                                formik.values.ado.question.compliance[
                                  constId.CONFERS
                                ] === "none"
                              }
                            />

                            {formik.errors.ado &&
                              formik.errors.ado.hasOwnProperty("question") &&
                              formik.errors.ado.question.hasOwnProperty(
                                "compliance"
                              ) && (
                                <div style={{ color: "red" }}>
                                  <small>
                                    {
                                      formik.errors.ado.question.compliance[
                                        constId.CONFERS
                                      ]
                                    }
                                  </small>
                                </div>
                              )}

                            {formik.errors.ado &&
                              formik.errors.ado.hasOwnProperty("verif") &&
                              formik.errors.ado.verif.hasOwnProperty(
                                "question"
                              ) &&
                              formik.errors.ado.verif.question.hasOwnProperty(
                                "compliance"
                              ) && (
                                <div style={{ color: "red" }}>
                                  <small>
                                    {
                                      formik.errors.ado.verif.question
                                        .compliance[constId.CONFERS]
                                    }
                                  </small>
                                </div>
                              )}

                            <br></br>
                            <br></br>
                          </div>
                        )}
                        <h1>
                          {" "}
                          <b> SSR guidelines</b>{" "}
                        </h1>{" "}
                        <div>
                          <b> Does your spacecraft release debris in orbit?</b>
                          <br></br>
                          <input
                            name="ado.question.guidelines.0"
                            type="radio"
                            value="yes"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            checked={
                              formik.values.ado.question.guidelines[0] === "yes"
                            }
                            onClick={() => {
                              formik.values.ado.verif.question.guidelines[0] =
                                "none";
                            }}
                          />
                          <label>Yes</label>
                          <br></br>
                          <input
                            name="ado.question.guidelines.0"
                            type="radio"
                            value="no"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            checked={
                              formik.values.ado.question.guidelines[0] === "no"
                            }
                            onClick={() => {
                              formik.values.ado.verif.question.guidelines[0] =
                                "";
                            }}
                          />
                          <label>No, or only smaller than 1mm</label>
                          <br></br>
                          <Verification
                            formik={formik}
                            name="ado.verif.question.guidelines.0"
                            value={
                              formik.values.ado.verif.question.guidelines[0]
                            }
                            disabled={
                              formik.values.ado.question.guidelines[0] === "yes"
                            }
                          />
                        </div>
                        {formik.errors.ado &&
                          formik.errors.ado.hasOwnProperty("question") &&
                          formik.errors.ado.question.hasOwnProperty(
                            "guidelines"
                          ) && (
                            <div style={{ color: "red" }}>
                              <small>
                                {formik.errors.ado.question.guidelines[0]}
                              </small>
                            </div>
                          )}
                        {formik.errors.ado &&
                          formik.errors.ado.hasOwnProperty("verif") &&
                          formik.errors.ado.verif.hasOwnProperty("question") &&
                          formik.errors.ado.verif.question.hasOwnProperty(
                            "guidelines"
                          ) && (
                            <div style={{ color: "red" }}>
                              <small>
                                {formik.errors.ado.verif.question.guidelines[0]}
                              </small>
                            </div>
                          )}
                        <br></br>
                        <div>
                          <b>
                            {" "}
                            Is your payload registered by your launching state?
                          </b>
                          <br></br>

                          <input
                            name="ado.question.guidelines.1"
                            type="radio"
                            value="no"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            checked={
                              formik.values.ado.question.guidelines[1] === "no"
                            }
                            onClick={() => {
                              formik.values.ado.verif.question.guidelines[1] =
                                "none";
                            }}
                          />
                          <label>No</label>
                          <br></br>
                          <input
                            name="ado.question.guidelines.1"
                            type="radio"
                            value="yes"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            checked={
                              formik.values.ado.question.guidelines[1] === "yes"
                            }
                            onClick={() => {
                              formik.values.ado.verif.question.guidelines[1] =
                                "";
                            }}
                          />
                          <label>Yes</label>
                          <br></br>
                          <Verification
                            formik={formik}
                            name="ado.verif.question.guidelines.1"
                            value={
                              formik.values.ado.verif.question.guidelines[1]
                            }
                            disabled={
                              formik.values.ado.question.guidelines[1] === "no"
                            }
                          />
                        </div>
                        {formik.errors.ado &&
                          formik.errors.ado.hasOwnProperty("question") &&
                          formik.errors.ado.question.hasOwnProperty(
                            "guidelines"
                          ) && (
                            <div style={{ color: "red" }}>
                              <small>
                                {formik.errors.ado.question.guidelines[1]}
                              </small>
                            </div>
                          )}
                        {formik.errors.ado &&
                          formik.errors.ado.hasOwnProperty("verif") &&
                          formik.errors.ado.verif.hasOwnProperty("question") &&
                          formik.errors.ado.verif.question.hasOwnProperty(
                            "guidelines"
                          ) && (
                            <div style={{ color: "red" }}>
                              <small>
                                {formik.errors.ado.verif.question.guidelines[1]}
                              </small>
                            </div>
                          )}
                        <br></br>
                        <Explosion
                          formik={formik}
                          list_question={CONTENT_EXPLOSION}
                        />
                        <Passivation
                          formik={formik}
                          list_question={CONTENT_PASSIVATION}
                        />{" "}
                        <br></br>
                        <br></br>
                        <pre>{JSON.stringify(formik.errors.ado, null, 2)}</pre>
                        <pre>{JSON.stringify(formik.values.ado, null, 2)}</pre>
                      </div>
                    </div>
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

export default ApplicationDesignOperation;
