import React from 'react'
import styles from './Button.module.css'

const Button = () => {

	const STYLES = {
		backgroundColor: "antiquewhite",
		borderRadius: "5px",
		border: "none",
		padding: "10px 20px",
		cursor: "pointer",
		transition: "0.2s all ease"
	}

	return (
		// External
		// <button className="button">Button</button>

		// Module
		<div>
			<button className={styles.btn}>Button</button>
			<button id={styles.btn}>Button</button>
		</div>

		// Inline
		// <button style={STYLES}>Button</button>
	)
}

export default Button