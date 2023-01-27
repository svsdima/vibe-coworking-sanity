import axios from 'axios';
import { client } from '../client';
import {
	FEEDBACK_SAVE_FAIL,
	FEEDBACK_SAVE_REQUEST,
	FEEDBACK_SAVE_SUCCESS,
} from '../constants/constants';

export const feedbackSaveInfo = (name, phone) => async (dispatch) => {
	try {
		const query = '*[_type == "feedbacks"]';

		const data = await client.fetch(query);

		dispatch({
			type: FEEDBACK_SAVE_SUCCESS,
			payload: data,
		});

		localStorage.setItem('VibeCoworkingFeedbackInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: FEEDBACK_SAVE_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
