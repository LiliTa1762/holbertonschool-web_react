import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export function login(email, password) {
	return {
		 type: LOGIN,
		 user : { email, password }
	}
}

export const boundlogin = (email, password) => dispatch(login(email, password));

export function logout() {
	return {
		 type: LOGOUT,
	}
}

export const boundlogout = () => dispatch(login());

export function displayNotificationDrawer() {
	return {
		 type: DISPLAY_NOTIFICATION_DRAWER,
	}
}

export const bounddisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

export function hideNotificationDrawer() {
	return {
		 type: HIDE_NOTIFICATION_DRAWER,
	}
}

export const boundhideNotificationDrawer = () => dispatch(hideNotificationDrawer());

export function loginSuccess() {
	return {
		 type: LOGIN_SUCCESS,
	}
}

export function loginFailure() {
	return {
		 type: LOGIN_FAILURE,
	}
}

export function loginRequest(email, password) {
	return function(dispatch) {
		dispatch(login(email, password));
		return fetch('../../dist/login-success.json')
		.then((response) => response.json())
		.then((json) => dispatch(loginSuccess()))
		.catch((err) => dispatch(loginFailure())) 
	};
}
