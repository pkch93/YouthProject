require('dotenv').config();
const express = require('express');
const connect = require('./model');

const app = express();
connect();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.json('hello world!');
});

const middlewares = require('./public/middlewares');
const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');

app.use('/auth',  middlewares.isLogined, authRouter);
app.use('/api', middlewares.verifyJwtToken, apiRouter);

app.listen(port, (e) => {
    if (e) {
        console.error('error');
    } else {
        console.log('server on!');
    }
});
