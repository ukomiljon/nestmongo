import * as mongoose from 'mongoose'

export interface Report extends mongoose.Document {
    title: string;
    type: string
}
