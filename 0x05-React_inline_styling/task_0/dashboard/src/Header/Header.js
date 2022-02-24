import React from "react";
import './Header.css';
import holberton_logo from '../assets/holberton_logo.jpeg';

function App() {
  return (
      <div className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
  );
}
export default App;
