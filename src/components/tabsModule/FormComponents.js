import * as Yup from "yup";

import * as constId from "../../utils/constants.js";
/*
const AUTONOMOUS_0 = 11;
const AUTONOMOUS_1 = 12;
const AUTONOMOUS_2 = 13;

const QUALITATIVE = 7;
*/
export const FormValidation = Yup.object({
  mission_index: Yup.object({
    question: Yup.object({
      0: Yup.number()
        .typeError("Positive Integer only")
        .integer("Positive Integer only ")
        .min(0, "Positive Integer only")

        .required("Mandatory field"),

      1: Yup.number()
        .typeError("Positive Float only")
        .min(0, "Positive Float only")
        .required("Mandatory field"),
      2: Yup.number()
        .typeError("Positive float only")
        .min(0, "Positive Float only")
        .required("Mandatory field"),

      3: Yup.number()
        .typeError("Positive float only")
        .min(0, "Positive Float only")
        .required("Mandatory field"),

      4: Yup.number()
        .typeError("Positive float only")
        .min(100, "Min altitude 100 km")
        .max(300000, "Max altitude 300 000 km")
        .required("Mandatory field"),

      5: Yup.number()
        .typeError("Angle between 0 and 180°")
        .min(0, "Angle between 0 and 180°")
        .max(180, "Angle between 0 and 180°")
        .required("Mandatory field"),

      6: Yup.number()
        .typeError("Positive Float only")
        .min(0, "Positive Float only")
        .required("Mandatory field"),
      7: Yup.number()
        .typeError("Positive Float only ")
        .min(0, "Positive Float only")
        .required("Mandatory field"),
      8: Yup.number()
        .typeError("Value between 0 and 1")
        .min(0, "Value between 0 and 1")
        .max(1, "Value between 0 and 1")
        .required("Mandatory field"),
      9: Yup.string().required("Mandatory field"),
    }),
    bonus: Yup.object({}),

    verif: Yup.object({
      question: Yup.object({
        0: Yup.string().required("Select a verification level"),
        1: Yup.string().required("Select a verification level"),
        2: Yup.string().required("Select a verification level"),
        3: Yup.string().required("Select a verification level"),
        4: Yup.string().required("Select a verification level"),
        5: Yup.string().required("Select a verification level"),
        6: Yup.string().required("Select a verification level"),
        7: Yup.string().required("Select a verification level"),
        8: Yup.string().required("Select a verification level"),
        9: Yup.string().required("Select a verification level"),
        10: Yup.string().required("Select a verification level"),
      }),
    }),
  }),

  //NOT DONE YET

  dit: Yup.object({
    question: Yup.object({
      0: Yup.string().required("Mandatory field"),

      1: Yup.number()
        .typeError("Positive float only")
        .min(0, "Positive Float only")
        .required("Mandatory field"),

      2: Yup.number()
        .typeError("Positive float only")
        .min(0, "Positive Float only")
        .required("Mandatory field"),

      3: Yup.number()
        .typeError("Positive float only")
        .min(0, "Positive Float only")
        .required("Mandatory field"),

      4: Yup.number()
        .typeError("Angle between 0 and 180°")
        .min(0, "Angle between 0 and 180°")
        .max(180, "Angle between 0 and 180°")
        .required("Mandatory field"),

      5: Yup.string().required("Mandatory field"),

      6: Yup.string().required("Mandatory field"),
      7: Yup.string().required("Mandatory field"),
    }),

    qualitative: Yup.array()
      .min(1, "Mandatory field")
      .required("Mandatory field"),

    bonus: Yup.object({
      0: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
    }),

    verif: Yup.object({
      question: Yup.object({
        0: Yup.string().required("Select a verification level"),
        1: Yup.string().required("Select a verification level"),
        2: Yup.string().required("Select a verification level"),
        3: Yup.string().required("Select a verification level"),
        4: Yup.string().required("Select a verification level"),
        5: Yup.string().required("Select a verification level"),
        6: Yup.string().required("Select a verification level"),
      }),
      bonus: Yup.object({
        0: Yup.string().required("Select a verification level"),
      }),

      qualitative: Yup.string().required("Select a verification level"),
    }),
  }),

  ado: Yup.object({
    confers: Yup.string()
      .required("Mandatory field")
      .oneOf(["yes", "no"], "Mandatory field"),

    question: Yup.object({
      compliance: Yup.object({
        0: Yup.string().required("Mandatory field"),
        1: Yup.string().required("Mandatory field"),
        2: Yup.string().required("Mandatory field"),
        3: Yup.string().required("Mandatory field"),
        4: Yup.string().required("Mandatory field"),

        5: Yup.string().required("Mandatory field"),
      }),

      passivation: Yup.object({
        ratio: Yup.object({
          0: Yup.number()
            .typeError("value between 0 and 1")
            .min(0, "Value between 0 and 1")
            .max(1, "Value between 0 and 1")
            .required("Value between 0 and 1"),

          1: Yup.number()
            .typeError("value between 0 and 1")
            .min(0, "Value between 0 and 1")
            .max(1, "Value between 0 and 1")
            .required("Value between 0 and 1"),

          2: Yup.number()
            .typeError("value between 0 and 1")
            .min(0, "Value between 0 and 1")
            .max(1, "Value between 0 and 1")
            .required("Value between 0 and 1"),

          3: Yup.number()
            .typeError("value between 0 and 1")
            .min(0, "Value between 0 and 1")
            .max(1, "Value between 0 and 1")
            .required("Value between 0 and 1"),
        }),

        answer: Yup.object({
          0: Yup.string().required("Mandatory field"),
          1: Yup.string().required("Mandatory field"),
          2: Yup.string().required("Mandatory field"),
          3: Yup.string().required("Mandatory field"),
        }),
      }),

      explosion: Yup.object({
        ratio: Yup.object({
          0: Yup.number()
            .typeError("value between 0 and 1")
            .min(0, "Value between 0 and 1")
            .max(1, "Value between 0 and 1")
            .required("Value between 0 and 1"),
        }),

        answer: Yup.object({
          0: Yup.string().required("Mandatory field"),
        }),
      }),

      guidelines: Yup.object({
        0: Yup.string().required("Mandatory field"),
        1: Yup.string().required("Mandatory field"),
      }),
    }),
    bonus: Yup.object({}),

    verif: Yup.object({
      question: Yup.object({
        compliance: Yup.object({
          0: Yup.string().required("Select a verification level"),
          1: Yup.string().required("Select a verification level"),
          2: Yup.string().required("Select a verification level"),
          3: Yup.string().required("Select a verification level"),
          4: Yup.string().required("Select a verification level"),
          5: Yup.string().required("Select a verification level"),
        }),

        guidelines: Yup.object({
          0: Yup.string().required("Select a verification level"),
          1: Yup.string().required("Select a verification level"),
        }),
        explosion: Yup.object({
          0: Yup.string().required("Select a verification level"),
        }),

        passivation: Yup.object({
          0: Yup.string().required("Select a verification level"),
          1: Yup.string().required("Select a verification level"),
          2: Yup.string().required("Select a verification level"),
          3: Yup.string().required("Select a verification level"),
        }),
      }),
    }),
  }),
  // DONE

  colla: Yup.object({
    question: Yup.object({
      0: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
      1: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
      2: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
    }),
    bonus: Yup.object({
      0: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
    }),

    verif: Yup.object({
      question: Yup.object({
        0: Yup.string().required("Select a verification level"),
        1: Yup.string().required("Select a verification level"),
        2: Yup.string().required("Select a verification level"),
      }),

      bonus: Yup.object({
        0: Yup.string().required("Select a verification level"),
      }),
    }),
  }),

  data_sharing: Yup.object({
    autonomous: Yup.string()
      .required("Mandatory field")
      .oneOf(["yes", "no"], "Mandatory field"),

    question: Yup.object().when("autonomous", {
      is: "yes",
      then: Yup.object({
        0: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        1: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        2: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        3: Yup.array().min(1, "Mandatory field").required("Mandatory field"),

        4: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        5: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        6: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        7: Yup.array().min(1, "Mandatory field").required("Mandatory field"),

        8: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        9: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        10: Yup.array().min(1, "Mandatory field").required("Mandatory field"),

        [constId.AUTONOMOUS_0]: Yup.array()
          .typeError("Mandatory field")
          .min(1, "Mandatory field")
          .required("Mandatory field"),

        [constId.AUTONOMOUS_1]: Yup.array()
          .typeError("Mandatory field ")
          .min(1, "Mandatory field")
          .required("Mandatory field"),
        [constId.AUTONOMOUS_2]: Yup.array()
          .typeError("Mandatory field")
          .min(1, "Mandatory field")
          .required("Mandatory field"),
      }),

      otherwise: Yup.object({
        0: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        1: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        2: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        3: Yup.array().min(1, "Mandatory field").required("Mandatory field"),

        4: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        5: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        6: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        7: Yup.array().min(1, "Mandatory field").required("Mandatory field"),

        8: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        9: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
        10: Yup.array().min(1, "Mandatory field").required("Mandatory field"),

        [constId.AUTONOMOUS_0]: Yup.array().notRequired(),

        [constId.AUTONOMOUS_1]: Yup.array().notRequired(),

        [constId.AUTONOMOUS_2]: Yup.array().notRequired(),
      }),
    }),
    bonus: Yup.object({
      0: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
      1: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
      2: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
      3: Yup.array().min(1, "Mandatory field").required("Mandatory field"),
    }),

    verif: Yup.object({
      question: Yup.object({
        0: Yup.string().required("Mandatory field"),
        1: Yup.string().required("Mandatory field"),
        2: Yup.string().required("Mandatory field"),
        3: Yup.string().required("Mandatory field"),
        4: Yup.string().required("Mandatory field"),
        5: Yup.string().required("Mandatory field"),
        6: Yup.string().required("Mandatory field"),
        7: Yup.string().required("Mandatory field"),
        8: Yup.string().required("Mandatory field"),
        9: Yup.string().required("Mandatory field"),
        10: Yup.string().required("Mandatory field"),
        [constId.AUTONOMOUS_0]: Yup.string().required("Mandatory field"),
        [constId.AUTONOMOUS_1]: Yup.string().required("Mandatory field"),
        [constId.AUTONOMOUS_2]: Yup.string().required("Mandatory field"),
      }),

      bonus: Yup.object({
        0: Yup.string().required("Mandatory field"),
        1: Yup.string().required("Mandatory field"),
        2: Yup.string().required("Mandatory field"),
        3: Yup.string().required("Mandatory field"),
      }),
    }),
  }),

  external: Yup.object({
    bonus: Yup.object({
      0: Yup.string()
        .required("Mandatory field")
        .oneOf(["yes", "no"], "Mandatory field"),
      1: Yup.string()
        .required("Mandatory field")
        .oneOf(["yes", "no"], "Mandatory field"),
      2: Yup.string()
        .required("Mandatory field")
        .oneOf(["yes", "no"], "Mandatory field"),
      3: Yup.string()
        .required("Mandatory field")
        .oneOf(["yes", "no"], "Mandatory field"),
    }),

    verif: Yup.object({
      bonus: Yup.object({
        0: Yup.string().required("Select a verification level"),
        1: Yup.string().required("Select a verification level"),
        2: Yup.string().required("Select a verification level"),
        3: Yup.string().required("Select a verification level"),
      }),
    }),
  }),
});

//Constant key values for special input handling

export const InitialSchema = {
  mission_index: {
    question: {
      absolute: "",
      relative: "",
      0: "",
      1: "",
      2: "",
      [constId.DEPLOYMENT_DURATION]: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
    },
    /*
    bonus: {
      0: "",
    },
*/
    verif: {
      question: {
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
      },
      /*
      bonus: {
        0: "",
      },

      */
    },
  },

  dit: {
    optical: "",
    radar: "",
    pass_duration: "",

    avg_orbital_coverage: "",
    internal_duration: "",

    qualitative: [],
    question: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
    },

    bonus: { 0: "" },

    verif: {
      question: {
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
      },
      qualitative: "",
      bonus: { 0: "" },
    },
  },

  ado: {
    confers: "",
    question: {
      compliance: { 0: "", 1: "", 2: "", 3: "", 4: "", 5: "" },

      passivation: {
        answer: { 0: "", 1: "", 2: "", 3: "" },
        ratio: { 0: "", 1: "", 2: "", 3: "" },
      },

      explosion: {
        answer: { 0: "" },
        ratio: { 0: "" },
      },

      guidelines: { 0: "", 1: "" },
    },
    bonus: {},

    verif: {
      question: {
        passivation: { 0: "", 1: "", 2: "", 3: "" },
        explosion: { 0: "" },

        compliance: { 0: "", 1: "", 2: "", 3: "", 4: "", 5: "" },

        guidelines: { 0: "", 1: "" },
      },

      bonus: {},
    },
  },

  //Modules finished

  data_sharing: {
    autonomous: "",

    question: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      [constId.AUTONOMOUS_0]: "invalid",
      [constId.AUTONOMOUS_1]: "invalid",
      [constId.AUTONOMOUS_2]: "invalid",
    },
    bonus: { 0: "", 1: "", 2: "", 3: "" },

    verif: {
      question: {
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        [constId.AUTONOMOUS_0]: "",
        [constId.AUTONOMOUS_1]: "",
        [constId.AUTONOMOUS_2]: "",
      },
      bonus: { 0: "", 1: "", 2: "", 3: "" },
    },
  },
  colla: {
    question: { 0: "", 1: "", 2: "" },

    bonus: { 0: "" },

    verif: {
      question: { 0: "", 1: "", 2: "" },
      bonus: { 0: "" },
    },
  },

  external: {
    bonus: { 0: "", 1: "", 2: "", 3: "" },
    verif: {
      bonus: { 0: "", 1: "", 2: "", 3: "" },
    },
  },
};

//Autonomous validation part

/*Yup.array().test(() => {
        const { from } = this;
        from[]
      }),*/
