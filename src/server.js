const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose')
const transaction = require('./model/bank')
mongoose.connect('mongodb://localhost/Bank', { useNewUrlParser: true })

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.get('/transactions', async (req, res)  => {
    let allDoc= await transaction.find({})
    console.log(allDoc)
    res.send(allDoc)
    })


app.post('/transaction', async (req, res) => {
    let data=req.body
    let trans= new transaction(data)
    await trans.save()
    res.send("all good")
});


app.delete('/transactions/:id', (req,res)=>{
    transaction.findOneAndRemove({_id: req.params.id},  function(err,data)
    {
        res.send('yalla')
    });
})

app.listen(port, () => console.log(`Listening on port ${port}`));