import React from "react";
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.state = {
			email: '',
			password: '',
			enableSubmit: false
		}
	}

		handleLoginSubmit(e) {
			e.preventDefault();
			this.props.logIn(this.state.email, this.state.password);
		}

		handleChangeEmail(e) {
			this.setState({
				email: e.target.value
			}, () => {
				if(this.state.email !== '' && 
				this.state.password !== '') {
					this.setState({
						enableSubmit: true
					})
				}
			})
		}

		handleChangePassword(e) {
			this.setState({
				password: e.target.value
			}, () => {
				if(this.state.email !== '' && 
				this.state.password !== '') {
					this.setState({
						enableSubmit: true
					})
				}
			})
		}

		render() {
			return (
					<div className={css(styles.AppBody)}>
						<p className={css(styles.p)}>Login to access the full dashboard</p>
						<form onSubmit={this.handleLoginSubmit}>
							<label className={css(styles.label)} htmlFor="email">Email:</label>
							<input className={css(styles.txt)} type="email" id="email" value={this.state.email} onChange={this.handleChangeEmail} />
							<label className={css(styles.label)} htmlFor="password">Password:</label>
							<input className={css(styles.txt)} type="password" id="password" value={this.state.password} onChange={this.handleChangePassword} />
							<input className={css(styles.button)} type="submit" value="OK" disabled={!this.state.enableSubmit} />
						</form>
					</div>
			)
		}
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

export default Login;
