const express = require('express')
const router = express.Router() 
const request = require('request')
const Transaction = require('./schemas/Transaction')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bank', {useNewUrlParser: true});

//POSTMAN:  http://localhost:3333/transactions
router.get('/transactions', function (req, res) {

    Transaction.find(function (err, results){
        if (err) return console.error(err);
        console.log(results);
    
    })

        // let itemToSave = new Transaction({
        //     amount: 787,
        //     category: "dog",
        //     vendor: "dovi"    
        // })
            // amount: 123,
            // category: "cat",
            // vendor: "bezzz"    
            
            // conditionPic: req.body.conditionPic

        // Transaction.findOne({ vendor: itemToSave.vendor }, function(err, foundItem) {
        //     if (!foundItem) {
        //         itemToSave.save().then( function(city){
        //             console.log(`${itemToSave.vendor} was added successfully!`)
        //         })
        //     }
        // })




    
    res.send("GET done")
})


router.post('/transaction/:id', function (req, res) {
    
    res.send("POST done")
})

router.delete('/transaction/:id', function (req, res) {
    
    res.send("DELETE done")
})












module.exports = router