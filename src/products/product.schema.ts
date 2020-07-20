import * as mongoose from 'mongoose'
import { Int } from 'type-graphql'

export const ProductSchema = mongoose.Schema({
    title: { type: String, require: true },
    price: { type: Number, require: true }
})