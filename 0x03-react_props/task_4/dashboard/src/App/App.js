import React from "react";
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import './App.css';

function App( {isLoggedIn} ) {
	return (
		<>
		<Notifications />
			<div className="Header">
				<Header />
			</div>
			<div>
				{isLoggedIn ? < CourseList /> : < Login />}
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
}

App.propTypes = {
	isLoggedIn: PropTypes.bool,
}

App.defaultProps = {
	isLoggedIn: false
}

export default App;
