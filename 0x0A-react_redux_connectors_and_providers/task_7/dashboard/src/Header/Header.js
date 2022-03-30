import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import holberton_logo from '../assets/holberton_logo.jpeg';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

const mapStateToProps = (state) => {
	return {
		user: state.get('user')
	};
}

const mapDispatchToProps = () => {
	logout
}

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { user, logout } = this.props;

		return (
				<header className={css(styles.header)}>
					<img src={holberton_logo} className={css(styles.logo)} alt="logo" />
					<h1 className={css(styles.h1)}>School dashboard</h1>
					{ user ?
						 <p id='logoutSection'
							className={css(styles.welcomeP, styles.welcomePSmall)}>Welcome
							<b>{`${user.email} `}</b>
							<span onClick={logout} className={css(styles.span)}>(logout)</span>
						</p>
						: <></>
					}
				</header>
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

Header.propTypes = {
	user: PropTypes.object,
	logout: PropTypes.func
}

Header.defaultProps = {
	user: null,
	logout: () => {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
