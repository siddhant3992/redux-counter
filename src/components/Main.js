import React from 'react'
import PropTypes from 'prop-types'

 const Main=(props) => {
  return (
    <div>
      <button onClick={props.changeUsername}>changeUsername</button>
    </div>
  )
}

Main.propTypes = {
changeUsername:PropTypes.func
}
export default Main