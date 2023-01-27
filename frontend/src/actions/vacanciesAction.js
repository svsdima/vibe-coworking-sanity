import axios from 'axios';
import {
	VACANCIES_DETAILS_FAIL,
	VACANCIES_DETAILS_REQUEST,
	VACANCIES_DETAILS_SUCCESS,
	VACANCIES_LIST_FAIL,
	VACANCIES_LIST_REQUEST,
	VACANCIES_LIST_SUCCESS,
} from '../constants/constants';

export const listVacancies = () => async (dispatch) => {
	try {
		dispatch({ type: VACANCIES_LIST_REQUEST });

		const { data } = await axios.get('/api/vacancies');

		dispatch({
			type: VACANCIES_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: VACANCIES_LIST_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const vacancyDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: VACANCIES_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/vacancies/${id}`);

		dispatch({
			type: VACANCIES_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: VACANCIES_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
