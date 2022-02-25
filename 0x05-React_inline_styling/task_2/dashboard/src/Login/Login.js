import React from "react";
import { StyleSheet, css } from 'aphrodite';

function App() {
	return (
			<div className={css(styles.AppBody)}>
				<p className={css(styles.p)}>Login to access the full dashboard</p>
				<label className={css(styles.label)} htmlFor="email">Email:</label>
				<input type="email" id="email" />
				<label className={css(styles.label)} htmlFor="password">Password:</label>
				<input type="password" id="password"/>
				<button className={css(styles.button)}>OK</button>
			</div>
	)
}

const styles = StyleSheet.create({
	AppBody: {
		height: "40rem",
		borderBottom: "3px solid #e01d3f",
		marginTop: "50px"
	},

	p: {
		marginLeft: "50px"
	},

	label: {
		margin: "0 0.5rem"
	},

	button: {
		marginLeft: "0.5rem"
	}
});
export default App;
