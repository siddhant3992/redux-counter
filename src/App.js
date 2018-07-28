import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import User from "./components/User";
import { connect } from "react-redux";
import {incrementAction,DecrementAction} from './actions/mathAction';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Main
          countIncrement={() => this.props.setCountIncrement()}
          countDecrement={() => this.props.setCountDecrement()}
        />
        <User counter={this.props.math.result} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCountIncrement: () => {
      dispatch(incrementAction());
    },
    setCountDecrement: () => {
      dispatch(DecrementAction());
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
