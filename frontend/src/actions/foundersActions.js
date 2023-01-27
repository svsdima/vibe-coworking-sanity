import axios from 'axios';
import { client } from '../client';
import {
	FOUNDERS_DETAILS_FAIL,
	FOUNDERS_DETAILS_REQUEST,
	FOUNDERS_DETAILS_SUCCESS,
	FOUNDERS_LIST_FAIL,
	FOUNDERS_LIST_REQUEST,
	FOUNDERS_LIST_SUCCESS,
} from '../constants/constants';

export const listFounders = () => async (dispatch) => {
	try {
		const query = '*[_type == "founders"]';

		const data = await client.fetch(query);

		dispatch({
			type: FOUNDERS_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: FOUNDERS_LIST_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const founderDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: FOUNDERS_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/founders/${id}`);

		dispatch({
			type: FOUNDERS_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: FOUNDERS_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
