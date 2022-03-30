import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { uiReducer } from './reducers/uiReducer';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(uiReducer, composeEnhancers(applyMiddleware(thunk)));
//Middleware: to add async logic that interacts with the store

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
