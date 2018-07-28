import React from "react";
import PropTypes from "prop-types";

const User=props => {
    var styling={
        color:'red'
    }
  return <p style={styling}>{props.counter}</p>;
};

User.propTypes = {
  counter: PropTypes.number
};
export default User