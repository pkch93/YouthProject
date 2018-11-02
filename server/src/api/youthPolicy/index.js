const Router = require("koa-router");

const dataApi = new Router();
const dataApiCtrl = require("./youthPolicy.controller");

dataApi.get("/", dataApiCtrl.getPolicies);
dataApi.get("/:category", dataApiCtrl.getPolicies);

module.exports = dataApi;