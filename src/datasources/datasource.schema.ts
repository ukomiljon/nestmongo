import { Schema } from 'mongoose'

export const DatasourceSchema = Schema({
    name: { type: String, require: true },
    connection: { type: String, require: true }
})




