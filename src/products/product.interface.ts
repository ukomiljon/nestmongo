import * as mongoose from 'mongoose'

export interface Product extends mongoose.Document {
    id?: string
    title: string
    price: number
}