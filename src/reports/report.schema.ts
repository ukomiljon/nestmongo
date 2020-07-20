import { MongooseModule } from "@nestjs/mongoose";

import * as mongoose from 'mongoose'

export const ReportSchema = new mongoose.Schema({
    title: { type: String, require: true },
    type: { type: String, require: true }
})

