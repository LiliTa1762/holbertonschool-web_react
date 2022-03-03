import React from "react";
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import { BodySectionWithMarginBottom } from '../BodySection/BodySectionWithMarginBottom';
import { BodySection } from '../BodySection/BodySection';
import AppContext, { user, logOut } from './AppContext';

const listCourses = [
	{ id: 1, name: "ES6", credit: 60 },
	{ id: 2, name: "Webpack", credit: 20 },
	{ id: 3, name: "React", credit: 40 },
];

const listNotifications = [
	{ id: 1, type: "default", value: "New course available" },
	{ id: 2, type: "urgent", value: "New resume available" },
	{ id: 3, type: "urgent", html: {
		__html: getLatestNotification() }},
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handlerLogOut = this.handlerLogOut.bind(this);
		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
		this.logIn = this.logIn.bind(this);
		this.logOut = this.logOut.bind(this);
		this.state = {
			displayDrawer: false,
			user,
			logOut: this.logOut
		}
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handlerLogOut);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handlerLogOut);
	}

	handlerLogOut(e) {
		if (e.ctrlKey && e.key === 'h') {
			alert('Logging you out');
			this.props.logOut();
		}
	}

	handleDisplayDrawer() {
		// change the value of displayDrawer to true
		this.setState({
			displayDrawer: true
		})
	}

	handleHideDrawer() {
		//change the value of displayDrawer to false
		this.setState({
			displayDrawer: false
		})
	}

	logIn(email, password) {
		this.setState({
			user: {
				email,
				password,
				isLoggedIn: true
			}
		})
	}

	logOut() {
		this.setState({
			user
		});
	}

	render() {
		const { displayDrawer } = this.state;
		return (
			<>
			<AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
			<Notifications listNotifications={listNotifications}
			displayDrawer={displayDrawer}
			handleDisplayDrawer={this.handleDisplayDrawer}
			handleHideDrawer={this.handleHideDrawer}
			/>
				<div className={css(styles.app)}>
					<Header />
				</div>
				<div className={css(styles.body)}>
				{!this.state.user.isLoggedIn ? 
						<BodySectionWithMarginBottom title="Log in to continue">
						<Login logIn={this.logIn}/>
						 </BodySectionWithMarginBottom> :
						<BodySectionWithMarginBottom title="Course list">
							<CourseList listCourses={listCourses} />
						</BodySectionWithMarginBottom>
				}
					<BodySection title="News from the School">
						<p className={css(styles.p)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</BodySection>
				</div>
				<div className={css(styles.footer)}>
					<Footer />
				</div>
				</AppContext.Provider>
				</>
		);
	}
}

const styles = StyleSheet.create({
	app: {
		backgroundColor: 'white'
	},

	body: {
		height: '40rem',
		borderBottom: '3px solid #e01d3f',
		marginTop: '50px'
	},

	p: {
		marginLeft: '50px'
	},

	label: {
		margin: '0 0.5rem'
	},

	button: {
		marginLeft: '0.5rem'
	},

	footer: {
		textAlign: 'center',
		fontStyle: 'italic'
	}
});

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func
}

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => undefined
}

export default App;
