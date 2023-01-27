import {
	FEEDBACK_SAVE_FAIL,
	FEEDBACK_SAVE_REQUEST,
	FEEDBACK_SAVE_SUCCESS,
} from '../constants/constants';

export const feedbackSaveInfoReducer = (state = {}, action) => {
	switch (action.type) {
		case FEEDBACK_SAVE_REQUEST:
			return {
				loading: true,
				feedback: action.payload,
			};
		case FEEDBACK_SAVE_SUCCESS:
			return {
				loading: false,
				VibeCoworkingFeedbackInfo: action.payload,
			};
		case FEEDBACK_SAVE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
