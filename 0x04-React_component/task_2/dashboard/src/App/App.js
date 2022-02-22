import React from "react";
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import './App.css';

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
			this.props.logOut;
			e.preventDefault();
		}
	}

	render() {
		const { isLoggedIn } = this.props;
		return (
			<>
			<Notifications listNotifications={listNotifications} />
				<div className="App">
					<Header />
				</div>
				<div className="App-body">
					{ isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
				</div>
				<div className="App-footer">
					<Footer />
				</div>
			</>
		);
	}
}

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func
}

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => undefined
}

export default App;
