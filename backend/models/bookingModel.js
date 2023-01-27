import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		descr: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		weekdaysHour: {
			type: Number,
			required: true,
		},
		weekdaysDay: {
			type: Number,
			required: true,
		},
		weekendsHour: {
			type: Number,
			required: true,
		},
		weekendsDay: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
