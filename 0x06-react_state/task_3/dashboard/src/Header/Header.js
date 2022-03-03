import React from "react";
import { StyleSheet, css } from 'aphrodite';
import holberton_logo from '../assets/holberton_logo.jpeg';
import AppContext from "../App/AppContext";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {user, logOut} = this.context;

		return (
				<div className={css(styles.header)}>
					<img src={holberton_logo} className={css(styles.logo)} alt="logo" />
					<h1 className={css(styles.h1)}>School dashboard</h1>
					{user.isLoggedIn && (
						 <p id='logoutSection' className={css(styles.welcomeP, styles.welcomePSmall)}>Welcome <b>{`${user.email} `}</b><span onClick={logOut} className={css(styles.span)}>(logout)</span></p>
					)}
				</div>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "white",
		color: "white",
		borderBottom: "3px solid #e01d3f",
		display: "flex",
		alignItems: "center",
		marginTop: "40px",
	},

	logo: {
		height: "40vmin",
	},

	h1: {
		color: "#e01d3f",
		display: "inline-flex",
		flexDirection: "column",
	},

	span: {
		fontStyle: 'italic',
		textDecoration: 'underline black'
	},

	welcomeP: {
		marginLeft: '15px',
		color: 'black',
		fontSize: '1.3rem'
	},

	welcomePSmall: {
		'@media (max-width: 900px)': {
			fontSize: '1.1rem',
			marginLeft: '10px'
		}
	}
});

Header.contextType = AppContext;
