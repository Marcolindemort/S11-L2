export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_QUERY = "SET_QUERY";

export const addFavourite = (fav) => ({ type: ADD_TO_FAVOURITE, payload: fav });
export const removeFavourite = () => ({ type: REMOVE_FROM_FAVOURITE });

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const fetchData = (query) => {
	return async (dispatch) => {
		try {
			const response = await fetch(baseEndpoint + query + "&limit=20");
			if (response.ok) {
				const { data } = await response.json();
				dispatch({
					type: SET_QUERY,
					payload: data,
				});
			} else {
				alert("Error fetching results");
			}
		} catch (error) {
			console.log(error);
		}
	};
};
