import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';


export const initialState = {
	notifications: [],
	filter: 'DEFAULT'
}
export const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			return action.data.map((notification) => {
				return {
					...notification, isRead: false
				};
			})
		case MARK_AS_READ:
			return state.map((notification) => {
				if (action.index === notification.id) {
					return {
						...notification, isRead: true
					};
				}
					return {...notification}
			});
		case SET_TYPE_FILTER:
			return {
				...state,
				filter: action.filter
			};
		default:
			return state;
	}
};
