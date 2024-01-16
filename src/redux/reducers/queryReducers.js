import { SET_QUERY } from "../actions";

const queryReducers = (state = { data: [] }, action) => {
	switch (action.type) {
		case SET_QUERY:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default queryReducers;
