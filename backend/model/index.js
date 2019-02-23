const mongoose = require('mongoose');

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const hostIp = process.env.MONGO_HOST;

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== 'production'){
            mongoose.set('debug', true);
        }
        mongoose.connect(`mongodb://${username}:${password}@${hostIp}:27017/admin`, {
            dbName: 'youthproject',
            useNewUrlParser: true,
            useCreateIndex: true
        }, err => {
            if (err) console.log('몽고디비 연결 에러', err);
            else console.log('몽고디비 연결 성공');
        });
    };
    connect();

    require('./user');
    require('./feedback');
    require('./policy');
};