const mongoose = require('mongoose');
const { getCurrentDate, initDataSave } = require('../public/init');

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const hostIp = process.env.MONGO_HOST;

module.exports = async () => {
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
    require('./my_policy');
    const Policy = require('./policy');
    
    const test = await Policy.find().exists('_id');
    if (test.length == 0){
        const apiKey = `${process.env.API_KEY}`;
        const current = new Date();
        const url = {
            intern: 'internInfo/internApi.do?display=100&',
            event: `opi/opia/empEventApi.do?callTp=L&display=100&srchBgnDt=${getCurrentDate(current)}&srchEndDt=${getCurrentDate(current, 1)}&`,
            governJob: `ilmoa/ilmoaPartcptnRcritInfoList.do?display=100&srchBgnDt=${getCurrentDate(current)}&srchEndDt=${getCurrentDate(current, 1)}&`,
            youthPolicy: 'opi/opia/jynEmpSptListAPI.do?display=100&'
        };
        const dataWrappers = {
            intern : {
                category: 1,
                wrapper: 'internRoot',
                list: 'internWanted'
            },
            event: {
                category: 2,
                wrapper: 'empEvList',
                list: 'empEvent'
            },
            governJob: {
                category: 3,
                wrapper: 'ilmoaJobsList',
                list: 'ilmoaJob'
            },
            youthPolicy: {
                category: 4,
                wrapper: 'jynEmpSptRoot',
                list: 'jynEmpSptList'
            }
        };
        let mainDomain = 'http://openapi.work.go.kr/opi/';
        for (let i in url){
            let requestUrl = `${mainDomain}${url[i]}authKey=${apiKey}&returnType=XML`;
            initDataSave(requestUrl, dataWrappers[i]);
        }
    }
};