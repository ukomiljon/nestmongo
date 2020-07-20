import { Document } from 'mongoose'

export interface Datasource extends Document {
    id?: string
    name: string
    connection: string
}