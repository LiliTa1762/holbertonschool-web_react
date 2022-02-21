import React from "react";
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

function App() {
  return (
      <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
  )
}
export default App;
