import React from "react";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
	return (
		<>
		<Notifications></Notifications>
			<div>
				<Header></Header>
			</div>
			<div>
				<Login></Login>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</>
	);
}

export default App;
