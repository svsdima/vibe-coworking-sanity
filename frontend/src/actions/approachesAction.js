import axios from 'axios';
import {
	APPROACHES_DETAILS_FAIL,
	APPROACHES_DETAILS_REQUEST,
	APPROACHES_DETAILS_SUCCESS,
	APPROACHES_LIST_FAIL,
	APPROACHES_LIST_REQUEST,
	APPROACHES_LIST_SUCCESS,
} from '../constants/constants';

export const listApproaches = () => async (dispatch) => {
	try {
		dispatch({ type: APPROACHES_LIST_REQUEST });

		const { data } = await axios.get('/api/approaches');

		dispatch({
			type: APPROACHES_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: APPROACHES_LIST_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const approachDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: APPROACHES_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/approaches/${id}`);

		dispatch({
			type: APPROACHES_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: APPROACHES_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
