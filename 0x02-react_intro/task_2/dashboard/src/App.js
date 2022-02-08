import logo from './holberton_logo.jpeg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password"></input>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </>
  );
}

export default App;
