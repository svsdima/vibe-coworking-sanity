import axios from 'axios';
import { client } from '../client';
import {
	COWORKING_DETAILS_FAIL,
	COWORKING_DETAILS_REQUEST,
	COWORKING_DETAILS_SUCCESS,
	COWORKING_LIST_FAIL,
	COWORKING_LIST_REQUEST,
	COWORKING_LIST_SUCCESS,
} from '../constants/constants';

export const listCoworkings = () => async (dispatch) => {
	try {
		const query = '*[_type == "coworkings"]';

		const data = await client.fetch(query);

		dispatch({
			type: COWORKING_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: COWORKING_LIST_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const coworkingDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: COWORKING_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/coworkings/${id}`);

		dispatch({
			type: COWORKING_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: COWORKING_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
