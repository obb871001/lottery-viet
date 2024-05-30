import { applyMiddleware, compose, createStore } from "redux";
import AllReducers from "./reducers/AllReducers";

import { createRouterMiddleware } from "@lagunovsky/redux-react-router";
import history from "./history";

const routerMiddleware = createRouterMiddleware(history);

const enhancers = [];
const middleware = [routerMiddleware];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(AllReducers, composedEnhancers);

export default store;
