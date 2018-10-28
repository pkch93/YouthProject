const Router = require("koa-router");
const auth = new Router();
const authCtrl = require("./auth.controller");

auth.post("/register/local", authCtrl.localRegister);
auth.post("/login/local", authCtrl.localLogin);
auth.get("/exists/:key(email|username)/:value", authCtrl.exists);
// /:key(email|username)의 의미는 key 파라미터는 email이나 username만 허용
auth.post("/logout", authCtrl.logout);
auth.get("/check", authCtrl.check);

module.exports = auth;