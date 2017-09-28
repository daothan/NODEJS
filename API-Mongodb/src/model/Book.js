import mongoose, { Schema } from 'mongoose';

const BookSchema = new Schema({
    name: String,
    status: String,
});

export default mongoose.model('Book', BookSchema);