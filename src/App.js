import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

const mathReducer = (
  state = {
    result: 1,
    lastValues: []
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "SUBSTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }
  return state;
};

const userReducer = (
  state = {
    name: "max",
    age: 25
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
};

const myLogger = store => next => action => {
  console.log("Logged Action:", action);
  next(action);
};
const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  {},
  applyMiddleware(logger)
);

store.subscribe(() => {
  // console.log("store updates!", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 100
});

store.dispatch({
  type: "SUBSTRACT",
  payload: 22
});

store.dispatch({
  type: "SET_AGE",
  payload: 30
});
