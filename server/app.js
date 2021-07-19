const mongoose = require('mongoose');
const express = require('express');
const app = express();

require('./conn');
app.use(express.json());
app.use(require('./auth'));
const User = require('./userSchema');

const middleware = (req, res, next) => {
    console.log("Hello my middleware");
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello world from server`);
});

console.log("something");

app.listen(5000, () => {
    console.log('serve is listening at port 3000');
})