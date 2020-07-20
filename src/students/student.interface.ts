 
import * as mongoose from 'mongoose'

export interface Student extends mongoose.Document {
    id?: string
    name: string
    age: number
}