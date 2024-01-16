import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
	favourites: {
		list: [],
	},
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_FAVOURITE:
			return {
				...state,
				favourite: {
					...state.favourites,
					list: [...state.favourites.list, action.payload],
				},
			};
		case REMOVE_FROM_FAVOURITE:
			return {
				...state,
				favourite: {
					...state.favourites,
					list: state.favourites.list.filter((fav) => fav !== action.payload),
				},
			};
		default:
			return state;
	}
};

export default mainReducer;
