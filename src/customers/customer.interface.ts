
import * as mongoose from 'mongoose';

export interface Customer extends mongoose.Document {
    id?: string;
    name: String;
    age:Number
  }