import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/favouritesReducers";
import queryReducers from "../reducers/queryReducers";

const bigReducer = combineReducers({
	favourite: mainReducer,
	job: queryReducers,
});

const store = configureStore({
	reducer: bigReducer,
});

export default store;
