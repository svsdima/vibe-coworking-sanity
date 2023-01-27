import axios from 'axios';
import {
	FEEDBACK_SAVE_FAIL,
	FEEDBACK_SAVE_REQUEST,
	FEEDBACK_SAVE_SUCCESS,
} from '../constants/constants';

export const feedbackSaveInfo = (name, phone) => async (dispatch) => {
	try {
		dispatch({ type: FEEDBACK_SAVE_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(`/api/feedbacks`, { name, phone }, config);

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
