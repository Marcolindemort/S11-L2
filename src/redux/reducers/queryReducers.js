import { CLEAR_QUERY, SET_QUERY } from "../actions";

const queryReducers = (state = { data: [] }, action) => {
	switch (action.type) {
		case SET_QUERY:
			return {
				...state,
				data: [action.payload],
			};

		case CLEAR_QUERY:
			return {
				...state,
				data: [],
			};
		default:
			return state;
	}
};

export default queryReducers;
