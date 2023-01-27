import {
	VACANCIES_DETAILS_FAIL,
	VACANCIES_DETAILS_REQUEST,
	VACANCIES_DETAILS_SUCCESS,
	VACANCIES_LIST_FAIL,
	VACANCIES_LIST_REQUEST,
	VACANCIES_LIST_SUCCESS,
} from '../constants/constants';

export const vacanciesListReducer = (state = { vacancies: [] }, action) => {
	switch (action.type) {
		case VACANCIES_LIST_REQUEST:
			return { loading: true, vacancies: [] };
		case VACANCIES_LIST_SUCCESS:
			return {
				loading: false,
				vacancies: action.payload,
			};
		case VACANCIES_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const vacancyDetailsReducer = (state = { vacancy: {} }, action) => {
	switch (action.type) {
		case VACANCIES_DETAILS_REQUEST:
			return { loading: true, vacancy: {} };
		case VACANCIES_DETAILS_SUCCESS:
			return {
				loading: false,
				vacancy: action.payload,
			};
		case VACANCIES_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
