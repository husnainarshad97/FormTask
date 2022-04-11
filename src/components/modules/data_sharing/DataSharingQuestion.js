import { Formik, Field, Form } from "formik";
import { Verification } from "../../verification/Verification";
import React, { useEffect, useState } from "react";

import "../../../css/style.css";

var get_id = /\d+/g;

const DataSharingQuestion = ({ question, id, verif_id, formik, bonus }) => {
  return (
    <tr>
      <th scope="row">
        {question}
        {formik.errors.data_sharing &&
          (bonus
            ? formik.errors.data_sharing.hasOwnProperty("bonus") && (
                <div style={{ color: "red" }}>
                  <small>
                    {formik.errors.data_sharing.bonus[id.match(get_id)]}
                  </small>
                </div>
              )
            : formik.errors.data_sharing.hasOwnProperty("question") && (
                <div style={{ color: "red" }}>
                  <small>
                    {formik.errors.data_sharing.question[id.match(get_id)]}
                  </small>
                </div>
              ))}
      </th>

      <td>
        {" "}
        <label>
          <input
            name={id}
            type="checkbox"
            value="none"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            checked={
              bonus
                ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                    "none"
                  )
                : formik.values.data_sharing.question[
                    id.match(get_id)
                  ].includes("none")
            }
            onClick={() => {
              if (
                bonus
                  ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                      "none"
                    )
                  : formik.values.data_sharing.question[
                      id.match(get_id)
                    ].includes("none")
              ) {
                bonus
                  ? (formik.values.data_sharing.verif.bonus[id.match(get_id)] =
                      "")
                  : (formik.values.data_sharing.verif.question[
                      id.match(get_id)
                    ] = "");
              } else {
                bonus
                  ? (formik.values.data_sharing.verif.bonus[id.match(get_id)] =
                      "none")(
                      (formik.values.data_sharing.bonus[id.match(get_id)] =
                        "none")
                    )
                  : (formik.values.data_sharing.verif.question[
                      id.match(get_id)
                    ] = "none")(
                      (formik.values.data_sharing.question[id.match(get_id)] =
                        "none")
                    );
              }
            }}
          />
        </label>
      </td>

      <td>
        {" "}
        <input
          name={id}
          type="checkbox"
          value="ssa"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          disabled={
            bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "none"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "none"
                )
          }
          checked={
            !(bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "none"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "none"
                )) &&
            (bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "ssa"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "ssa"
                ))
          }
        />
      </td>

      <td>
        <input
          name={id}
          type="checkbox"
          value="other"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          disabled={
            bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "none"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "none"
                )
          }
          checked={
            !(bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "none"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "none"
                )) &&
            (bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "other"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "other"
                ))
          }
        />
      </td>

      <td>
        <input
          name={id}
          type="checkbox"
          value="voluntary"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          disabled={
            bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "none"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "none"
                )
          }
          checked={
            !(bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "none"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "none"
                )) &&
            (bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "voluntary"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "voluntary"
                ))
          }
        />
      </td>

      <td>
        <input
          name={id}
          type="checkbox"
          value="public"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          disabled={
            bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "none"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "none"
                )
          }
          checked={
            !(bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "none"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "none"
                )) &&
            (bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "public"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "public"
                ))
          }
        />
      </td>
      <td>
        <Verification
          formik={formik}
          name={verif_id}
          value={
            bonus
              ? formik.values.data_sharing.verif.bonus[id.match(get_id)]
              : formik.values.data_sharing.verif.question[id.match(get_id)]
          }
          disabled={
            bonus
              ? formik.values.data_sharing.bonus[id.match(get_id)].includes(
                  "none"
                )
              : formik.values.data_sharing.question[id.match(get_id)].includes(
                  "none"
                )
          }
        />
        {formik.errors.data_sharing &&
          (bonus
            ? formik.errors.data_sharing.hasOwnProperty("verif") &&
              formik.errors.data_sharing.verif.hasOwnProperty("bonus") && (
                <div style={{ color: "red" }}>
                  <small>
                    {formik.errors.data_sharing.verif.bonus[id.match(get_id)]}
                  </small>
                </div>
              )
            : formik.errors.data_sharing.hasOwnProperty("verif") &&
              formik.errors.data_sharing.verif.hasOwnProperty("question") && (
                <div style={{ color: "red" }}>
                  <small>
                    {
                      formik.errors.data_sharing.verif.question[
                        id.match(get_id)
                      ]
                    }
                  </small>
                </div>
              ))}
      </td>
    </tr>
  );
};

export default DataSharingQuestion;
