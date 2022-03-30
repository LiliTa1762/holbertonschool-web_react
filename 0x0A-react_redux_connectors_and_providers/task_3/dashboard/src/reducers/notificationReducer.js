import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import immutable, { setIn } from 'immutable';

const { Map, setIn } = immutable;

export const initialState = {
	notifications: [],
	filter: 'DEFAULT'
}
export const notificationReducer = (state = Map(initialState), action) => {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			const data = notificationsNormalizer(action.data);
			Object.keys(data.notifications).map((key) => {
				data.notifications[key].isRead = false
			})
			return state.merge(data)

		case MARK_AS_READ:
			return state.setIn([String(action.index), 'isRead'], true)

		case SET_TYPE_FILTER:
			return set('filter', action.filter)

		default:
			return state;
	}
};
