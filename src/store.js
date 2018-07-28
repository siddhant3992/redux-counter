import logger from "redux-logger";
import thunk from 'redux-thunk';
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import promise from 'redux-promise-middleware';
import { createStore, combineReducers, applyMiddleware } from "redux";
export default createStore(
  combineReducers({math,user}),
  {},
  applyMiddleware(logger,thunk,promise())
);
