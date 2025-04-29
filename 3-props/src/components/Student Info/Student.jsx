import React from 'react'
import styles from './Student.module.css'
import PropTypes from 'prop-types'

const Student = (props) => {
  return (
    <div className={styles.studDiv}>
        <p>Name: {props.name} </p>
        <p>Age: {props.age} </p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false
}

export default Student