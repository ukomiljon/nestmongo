import * as mongoose from 'mongoose'

const StudentSchema = mongoose.Schema({
    name: { type: String, require: true },
    age: { type: Number, require: true }
})

export default StudentSchema