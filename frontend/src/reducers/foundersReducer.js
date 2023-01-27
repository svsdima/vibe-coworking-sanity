import {
	FOUNDERS_DETAILS_FAIL,
	FOUNDERS_DETAILS_REQUEST,
	FOUNDERS_DETAILS_SUCCESS,
	FOUNDERS_LIST_FAIL,
	FOUNDERS_LIST_REQUEST,
	FOUNDERS_LIST_SUCCESS,
} from '../constants/constants';

export const foundersListReducer = (state = { founders: [] }, action) => {
	switch (action.type) {
		case FOUNDERS_LIST_REQUEST:
			return { loading: true, founders: [] };
		case FOUNDERS_LIST_SUCCESS:
			return {
				loading: false,
				founders: action.payload,
			};
		case FOUNDERS_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const founderDetailsReducer = (state = { founder: {} }, action) => {
	switch (action.type) {
		case FOUNDERS_DETAILS_REQUEST:
			return { loading: true, founder: {} };
		case FOUNDERS_DETAILS_SUCCESS:
			return {
				loading: false,
				founder: action.payload,
			};
		case FOUNDERS_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
