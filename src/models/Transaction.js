const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transSchema = new Schema({
    amount: Number,
    category: String,
    vendor: String    
})

const City = mongoose.model("transaction", transSchema)
module.exports = City