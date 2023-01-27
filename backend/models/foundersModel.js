import mongoose from 'mongoose';

const foundersSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		position: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Founder = mongoose.model('Founder', foundersSchema);

export default Founder;
