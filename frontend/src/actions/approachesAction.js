import axios from 'axios';
import { client } from '../client';
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
		const query = '*[_type == "approaches"]';

		const data = await client.fetch(query);

		dispatch({ type: APPROACHES_LIST_REQUEST });

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
		const query = '*[_type == "approaches"]';

		const dataList = await client.fetch(query);
		const data = dataList(id);

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
