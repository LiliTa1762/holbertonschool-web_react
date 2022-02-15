import React from "react";
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
	return (
		<>
		<Notifications />
			<div>
				<Header />
			</div>
			<div>
				<Login />
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
}
export default App;
