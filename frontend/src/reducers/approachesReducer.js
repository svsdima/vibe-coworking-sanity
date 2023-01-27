import {
	APPROACHES_DETAILS_FAIL,
	APPROACHES_DETAILS_REQUEST,
	APPROACHES_DETAILS_SUCCESS,
	APPROACHES_LIST_FAIL,
	APPROACHES_LIST_REQUEST,
	APPROACHES_LIST_SUCCESS,
} from '../constants/constants';

export const approachesListReducer = (state = { approaches: [] }, action) => {
	switch (action.type) {
		case APPROACHES_LIST_REQUEST:
			return { loading: true, approaches: [] };
		case APPROACHES_LIST_SUCCESS:
			return {
				loading: false,
				approaches: action.payload,
			};
		case APPROACHES_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const approachDetailsReducer = (state = { approach: {} }, action) => {
	switch (action.type) {
		case APPROACHES_DETAILS_REQUEST:
			return { loading: true, approach: {} };
		case APPROACHES_DETAILS_SUCCESS:
			return {
				loading: false,
				approach: action.payload,
			};
		case APPROACHES_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
