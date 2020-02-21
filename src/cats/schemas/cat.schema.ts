import * as mongoose from 'mongoose';

export const catSchema = new mongoose.Schema({
    name : String,
    age  : Number,
    breed: String

});

