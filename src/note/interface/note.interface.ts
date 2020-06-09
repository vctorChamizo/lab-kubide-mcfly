import { Document } from 'mongoose';

export interface Note extends Document {
  readonly message: String;
  readonly favorite: Boolean;
}
