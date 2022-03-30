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
import { user, logOut, AppContext } from './AppContext';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
import { loginRequest as login, logout} from '../actions/uiActionCreators';

const listCourses = [
	{ id: 1, name: "ES6", credit: 60 },
	{ id: 2, name: "Webpack", credit: 20 },
	{ id: 3, name: "React", credit: 40 },
];

const listNotifications = [
	{id: 1, type: 'default', value: 'New course available'},
	{id: 2, type: 'urgent', value: 'New resume available'},
	{id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
]

export const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.get('isUserLoggedIn'),
		displayDrawer: state.get('isNotificationDrawerVisible')
	}
}

const mapDispatchToProps = {
	displayNotificationDrawer,
	hideNotificationDrawer,
	login,
	logout
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handlerLogOut = this.handlerLogOut.bind(this);
		this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
		this.state = {
			listNotifications
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

	markNotificationAsRead(id){
		const newNotification = this.state.listNotifications.filter((deleteThisOne) => {
			deleteThisOne.id !== id})
			this.setState({
				listNotifications: newNotification
			})
	}

	render() {
		const { listNotifications } = this.state;
		const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer, isLoggedIn, login, logout } = this.props;
		return (
			<>
			<AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
			<Notifications
			listNotifications={listNotifications}
			markNotificationAsRead={this.markNotificationAsRead}
			displayDrawer={displayDrawer}
			handleDisplayDrawer={displayNotificationDrawer}
			handleHideDrawer={hideNotificationDrawer}
			/>
				<div className={css(styles.app)}>
					<Header />
				</div>
				<div className={css(styles.body)}>
				{ !isLoggedIn ? 
						<BodySectionWithMarginBottom title="Log in to continue">
						<Login logIn={login}/>
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
	displayDrawer: PropTypes.bool,
	displayNotificationDrawer: PropTypes.func,
	hideNotificationDrawer: PropTypes.func,
	login: PropTypes.func
}

App.defaultProps = {
	isLoggedIn: false,
	displayDrawer: false,
	displayNotificationDrawer: () => {},
	hideNotificationDrawer: () => {},
	login: () => {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
