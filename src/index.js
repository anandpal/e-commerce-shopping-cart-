const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
// const multer=require('multer')
const mongoose = require('mongoose');
const app = express();

const multer= require("multer");
const { AppConfig } = require('aws-sdk');
app.use(multer().any())


app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://RahulSinghDhek:18248518@cluster0.dxzlfnc.mongodb.net/group6Database?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route);


app.listen(  3000, function () {
    console.log('Express app running on port ' + ( 3000))
});