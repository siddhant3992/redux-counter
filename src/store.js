import logger from "redux-logger";
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
export default createStore(
  combineReducers({ math, user }),
  {},
  applyMiddleware(logger)
);
