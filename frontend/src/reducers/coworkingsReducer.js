import {
	COWORKING_DETAILS_FAIL,
	COWORKING_DETAILS_REQUEST,
	COWORKING_DETAILS_SUCCESS,
	COWORKING_LIST_FAIL,
	COWORKING_LIST_REQUEST,
	COWORKING_LIST_SUCCESS,
} from '../constants/constants';

export const coworkingsListReducer = (state = { coworkings: [] }, action) => {
	switch (action.type) {
		case COWORKING_LIST_REQUEST:
			return { loading: true, coworkings: [] };
		case COWORKING_LIST_SUCCESS:
			return {
				loading: false,
				coworkings: action.payload,
			};
		case COWORKING_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const coworkingDetailsReducer = (state = { coworking: {} }, action) => {
	switch (action.type) {
		case COWORKING_DETAILS_REQUEST:
			return { loading: true, coworking: {} };
		case COWORKING_DETAILS_SUCCESS:
			return {
				loading: false,
				coworking: action.payload,
			};
		case COWORKING_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
