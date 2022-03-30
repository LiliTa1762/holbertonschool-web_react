import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import immutable from 'immutable';

const { Map } = immutable;

export const courseReducer = (state = Map([]), action) => {
	switch (action.type) {
		case FETCH_COURSE_SUCCESS:
			const data = coursesNormalizer(action.data);
			Object.keys(data).map((key) => {
				data[key].isSelected = false
			})
			return state.merge(data)

		case SELECT_COURSE:
			return state.setIn([String(action.index), 'isSelected'], true)

		case UNSELECT_COURSE:
			return state.setIn([String(action.index), 'isSelected'], false)

		default:
			return state;
	}
};
