const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transSchema = new Schema({
    amount: Number,
    category: String,
    vendor: String    
})

const Transaction = mongoose.model("transaction", transSchema)
module.exports = Transaction