import { assertion_check } from "../../verification/Verification";

//Score computation constants
const NO = 0;
const YES = 0.5;
//Consts to parse bonus + verif levels indexes

const external_score = (values) => {
  let result = 0;
  for (let i = 0; i < Object.keys(values.bonus).length; i++) {
    if (values.bonus[i] === "yes")
      result += YES * assertion_check(values.verif.bonus[i]);
    else if (values.bonus[i] === "no")
      result += NO * assertion_check(values.verif.bonus[i]);
    else result = 0;
  }
  return (result /= YES * Object.keys(values.bonus).length);
};

export default external_score;
