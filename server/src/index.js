require("dotenv").config(); // Environment Value

const Koa = require("koa"); // Koa Application
const Router = require("koa-router"); // Router 설정
const mongoose = require("mongoose"); // MongoDB 연결

const app = new Koa(); // Application instance
const router = new Router(); // router instance
const bodyPaser = require("koa-bodyparser"); // response body json return

const api = require("./api"); // rest api 가져오기
const { jwtMiddleware } = require("lib/token"); // t

mongoose.Promise = global.Promise; // use ES6 Native Promise

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB Connect");
    })
    .catch( (e) =>{
        console.error(e);
    });
// db 연결

const port = process.env.PORT || 4000;

app.use(bodyPaser());
// use는 middleware 등록하는 함수, request와 response 사이에서 middleware 실행
app.use(jwtMiddleware); // request.user에 현재 로그인된 사용자를 전달

router.use("/api", api.routes()); // router에 api에 연결한 route 등록
app.use(router.routes()).use(router.allowedMethods()); // Koa Application에 router 등록

app.listen(port, () => {
    console.log("server on port 4000");
}); // server 실행