import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

export const courseReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_COURSE_SUCCESS:
			return action.data.map((option) => {
				return {
					...option, isSelected: false
				};
			})
		case SELECT_COURSE:
			return state.map((option) => {
				if (action.index === option.id) {
					return {
						...option, isSelected: true
					};
				}
					return {...option}
			});
		case UNSELECT_COURSE:
			return state.map((option) => {
				if (action.index === option.id) {
					return {
						...option, isSelected: false
					};
				} 
					return {...option};
			})
		default:
			return state;
	}
};
