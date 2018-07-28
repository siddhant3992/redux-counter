import React from 'react'
import PropTypes from 'prop-types'

const Main=(props) => {
  return (
    <div>
      <button onClick={props.countIncrement}>Increment</button>
      <button onClick={props.countDecrement}>Decrement</button>
    </div>
  )
}

Main.propTypes = {
  countIncrement:PropTypes.func,
  countDecrement:PropTypes.func,
}
export default Main