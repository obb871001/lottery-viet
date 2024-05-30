import { combineReducers } from "redux";

import { createRouterReducer } from "@lagunovsky/redux-react-router";
import history from "../history";
import FormReducers from "./form";

const AllReducers = combineReducers({
  FORM: FormReducers,
  navigator: createRouterReducer(history),
});

export default AllReducers;
