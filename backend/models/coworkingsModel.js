import mongoose from 'mongoose';

const coworkingsInfoSchema = mongoose.Schema({
	icon: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
});

const coworkingsSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		info: [coworkingsInfoSchema],
	},
	{
		timestamps: true,
	}
);

const Coworking = mongoose.model('Coworking', coworkingsSchema);

export default Coworking;
