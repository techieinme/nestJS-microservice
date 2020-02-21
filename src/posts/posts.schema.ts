import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
});
