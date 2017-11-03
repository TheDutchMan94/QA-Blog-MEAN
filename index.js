const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');
mongoose.connect(config.uri, { useMongoClient: true }, (err) =>{
    if(err)
        console.log('Error connecting to db'+ err);
    else
        console.log('connected to database ' + config.db);
});
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/client/dist/'));
app.get('/',  (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});