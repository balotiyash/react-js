import React from 'react'
import PropTypes from 'prop-types'

const Login = (props ) => {
    // Using If Else
    // if (props.isLoggedin) {
    //     return ( <h2>Welcome, { props.username } </h2> )
        
    // } else {
    //     return ( <h2>Please Login to Continue </h2> )
    // }

    // Using If
    // if (props.isLoggedin) {
    //     return ( <h2>Welcome, { props.username }</h2> )
    // }
    // return ( <h2>Please Login to Continue </h2> )

    // Using Ternary Operator
    // return (
    //     props.isLoggedin ? <h2>Welcome, { props.username }</h2> : <h2>Please Login to Continue </h2>
    // )

    // Using Variables
    const welcomeMessage = <h2>Welcome, { props.username }</h2>;
    const loginPrompt = <h2>Please Login to Continue </h2>;

    return (
        props.isLoggedin ? welcomeMessage : loginPrompt
    )
}

Login.propTypes = {
    username: PropTypes.string,
    isLoggedin: PropTypes.bool
}

Login.defaultProps = {
    username: "Guest",
    isLoggedin: false
}

export default Login