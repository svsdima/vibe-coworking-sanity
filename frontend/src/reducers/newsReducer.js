import {
	NEWS_DETAILS_FAIL,
	NEWS_DETAILS_REQUEST,
	NEWS_DETAILS_SUCCESS,
	NEWS_LIST_FAIL,
	NEWS_LIST_REQUEST,
	NEWS_LIST_SUCCESS,
} from '../constants/constants';

export const newsListReducer = (state = { news: [] }, action) => {
	switch (action.type) {
		case NEWS_LIST_REQUEST:
			return { loading: true, news: [] };
		case NEWS_LIST_SUCCESS:
			return {
				loading: false,
				news: action.payload,
			};
		case NEWS_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const singleNewsDetailsReducer = (state = { singleNews: {} }, action) => {
	switch (action.type) {
		case NEWS_DETAILS_REQUEST:
			return { loading: true, singleNews: {} };
		case NEWS_DETAILS_SUCCESS:
			return {
				loading: false,
				singleNews: action.payload,
			};
		case NEWS_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
