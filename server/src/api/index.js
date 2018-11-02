const Router = require("koa-router");

const api = new Router();
const auth = require("./auth");
const dataApi = require("./youthPolicy");

api.use("/auth", auth.routes());
api.use("/youthPolicy", dataApi.routes());

module.exports = api;