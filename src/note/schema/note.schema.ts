import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
  message: String,
  favorite: Boolean,
});
