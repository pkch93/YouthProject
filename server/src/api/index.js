const Router = require("koa-router");

const api = new Router();
const auth = require("./auth");
const dataApi = require("./youthPolicy");

api.use("/auth", auth.routes());
api.use("/data", dataApi.routes());

module.exports = api;