import axios from 'axios';
import { client } from '../client';
import {
	BOOKING_DETAILS_FAIL,
	BOOKING_DETAILS_REQUEST,
	BOOKING_DETAILS_SUCCESS,
	BOOKING_LIST_FAIL,
	BOOKING_LIST_REQUEST,
	BOOKING_LIST_SUCCESS,
} from '../constants/constants';

export const listBooking = () => async (dispatch) => {
	try {
		const query = '*[_type == "booking"]';

		const data = await client.fetch(query);

		dispatch({
			type: BOOKING_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: BOOKING_LIST_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const bookingDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: BOOKING_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/booking/${id}`);

		dispatch({
			type: BOOKING_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: BOOKING_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
