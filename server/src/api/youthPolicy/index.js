const Router = require("koa-router");

const dataApi = new Router();
const dataApiCtrl = require("./youthPolicy.controller");

dataApi.get("/", dataApiCtrl.getPolicies);
dataApi.get("/:category", dataApiCtrl.getPolicies);
dataApi.get("/:category/like/:id", dataApiCtrl.like);
dataApi.get("/:category/review/:id", dataApiCtrl.getReviews);
dataApi.get("/:category/:id", dataApiCtrl.storeData);
dataApi.post("/:category/review/:id", dataApiCtrl.writeReview);

module.exports = dataApi;