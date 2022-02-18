import React from "react";
import './Login.css';

function Login() {
	return (
		<>
			<div className="App-body">
				<p>Login to access the full dashboard</p>
				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email"></input>
				<label htmlFor="password">Password</label>
				<input type="text" name="password" id="password"></input>
				<button>OK</button>
			</div>
		</>
	);
}
export default Login;
