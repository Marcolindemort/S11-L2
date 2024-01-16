export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const addFavourite = (fav) => ({ type: ADD_TO_FAVOURITE, payload: fav });
export const removeFavourite = () => ({ type: REMOVE_FROM_FAVOURITE });

export const SET_QUERY = "SET_QUERY";
export const CLEAR_QUERY = "CLEAR_QUERY";

export const setQuery = (search) => ({ type: SET_QUERY, payload: search });
export const clearQuery = () => ({ type: CLEAR_QUERY });

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
export const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

export const fetchData = (data) => {
    return async (dispatch, event) => {
        event.preventDefault();
        dispatch(fetchDataRequest());
        try {
            const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + data + "&limit=20" )
        }
    }   
}

