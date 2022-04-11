import { Formik, Field, Form } from "formik";

//import React, { useState } from 'react';

import React from "react";

const ASSERTION = 0.5;

const ASSERTION_DOCUMENT = 0.6;

const PUBLIC_RELEASE = 0.8;

const AUTORITY = 1.0;

export const Verification = ({ formik, name, value, disabled, data }) => {
	return (
		<select
			name={name}
			value={formik.values.name}
			onBlur={formik.handleBlur}
			onChange={formik.handleChange}
			disabled={disabled}
		>
			<option value={data ? data : ""} label="Select a verification level" />
			<option selected={value === "none"} value="none">
				N/A
			</option>

			<option selected={value === "assertion"} value="assertion">
				Assertion
			</option>
			<option selected={value === "assertion+documentation"} value="assertion+documentation">
				Assertion+Documentation
			</option>
			<option selected={value === "public"} value="public">
				Public release
			</option>
			<option selected={value === "authority"} value="authority">
				Authority
			</option>
		</select>
	);
};

export const assertion_check = (values) => {
	let result = 0;

	if (values === "assertion") result = ASSERTION;
	else if (values === "assertion+documentation") result = ASSERTION_DOCUMENT;
	else if (values === "public") result = PUBLIC_RELEASE;
	else if (values === "authority") result = AUTORITY;
	else result = 0;

	return result;
};
