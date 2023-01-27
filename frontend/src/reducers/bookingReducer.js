import {
	BOOKING_DETAILS_FAIL,
	BOOKING_DETAILS_REQUEST,
	BOOKING_DETAILS_SUCCESS,
	BOOKING_LIST_FAIL,
	BOOKING_LIST_REQUEST,
	BOOKING_LIST_SUCCESS,
} from '../constants/constants';

export const bookingListReducer = (state = { booking: [] }, action) => {
	switch (action.type) {
		case BOOKING_LIST_REQUEST:
			return { loading: true, booking: [] };
		case BOOKING_LIST_SUCCESS:
			return {
				loading: false,
				booking: action.payload,
			};
		case BOOKING_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const bookingDetailsReducer = (state = { book: {} }, action) => {
	switch (action.type) {
		case BOOKING_DETAILS_REQUEST:
			return { loading: true, book: {} };
		case BOOKING_DETAILS_SUCCESS:
			return {
				loading: false,
				book: action.payload,
			};
		case BOOKING_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
