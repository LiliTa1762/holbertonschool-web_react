import React from "react";
import { StyleSheet, css } from 'aphrodite';

function App() {
	return (
			<div className={css(styles.AppBody)}>
				<p className={css(styles.p)}>Login to access the full dashboard</p>
				<label className={css(styles.label)} htmlFor="email">Email:</label>
				<input className={css(styles.txt)} type="email" id="email" />
				<label className={css(styles.label)} htmlFor="password">Password:</label>
				<input className={css(styles.txt)} type="password" id="password"/>
				<button className={css(styles.button)}>OK</button>
			</div>
	)
}

const screenSize = {
	small: '@media screen and (max-width: 900px)'
}

const styles = StyleSheet.create({
	AppBody: {
		height: "40rem",
		borderBottom: "3px solid #e01d3f",
		marginTop: "50px"
	},

	p: {
		marginLeft: "50px",
		[screenSize.small]: {
			marginLeft: "0"
		}
	},

	label: {
		margin: "0 0.5rem",
		[screenSize.small]: {
			margin: '0',
			padding: '0',
			border: 'none',
			display: 'inline-block',
			width: '140px',
			textAlign: 'left'
		}
	},

	button: {
		marginLeft: "0.5rem",
		[screenSize.small]: {
			width: '32px',
			display: 'block',
			margin: '0',
			padding: '0'
		}
	},

	txt: {
		[screenSize.small]: {
			margin: '0',
			padding: '0',
			border: 'none',
		}
	},
});
export default App;
