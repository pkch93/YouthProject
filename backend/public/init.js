const fetch = require('node-fetch');
const xmlConverter = require('xml-js');
const Policy = require('../model/policy');

exports.getCurrentDate = (date, y=0, m=0, d=0) => {
    const year = date.getFullYear() + y;
    let month = date.getMonth() + 1 + m;
    let day = date.getDate() + d;
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    return `${'' + year + month + day}`;
};

exports.initDataSave = async (url, { category, wrapper, list }) => {
    fetch(url)
        .then(api => api.text())
        .then(body => xmlConverter.xml2js(body, {compact: true}))
        .then(data => {
            let items = [];
            for(let i in data[wrapper][list]){
                let item = {
                    category,
                    details: {}
                };
                for(let elem in data[wrapper][list][i]){
                    item['details'][elem] = data[wrapper][list][i][elem]['_text'];
                }
                items.push(item);
            }
            Policy.insertMany(items);
        })
        .catch((err) => {
            console.error(err);
        });
};