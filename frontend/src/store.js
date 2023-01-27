import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { bookingDetailsReducer, bookingListReducer } from './reducers/bookingReducer';
import { coworkingDetailsReducer, coworkingsListReducer } from './reducers/coworkingsReducer';
import { founderDetailsReducer, foundersListReducer } from './reducers/foundersReducer';
import { newsListReducer, singleNewsDetailsReducer } from './reducers/newsReducer';
import { vacanciesListReducer, vacancyDetailsReducer } from './reducers/vacanciesReducer';
import { approachDetailsReducer, approachesListReducer } from './reducers/approachesReducer';
import { feedbackSaveInfoReducer } from './reducers/feedbacksReducer';

const reducer = combineReducers({
	approachesList: approachesListReducer,
	approachDetails: approachDetailsReducer,
	bookingList: bookingListReducer,
	bookingDetails: bookingDetailsReducer,
	coworkingsList: coworkingsListReducer,
	coworkingDetails: coworkingDetailsReducer,
	foundersList: foundersListReducer,
	founderDetails: founderDetailsReducer,
	newsList: newsListReducer,
	singleNewsInfo: singleNewsDetailsReducer,
	vacanciesList: vacanciesListReducer,
	vacancyDetails: vacancyDetailsReducer,
	feedbackInfo: feedbackSaveInfoReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
