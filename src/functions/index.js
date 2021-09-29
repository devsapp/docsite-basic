const { http } = require('@serverless-devs/dk');

/**
  本项目采用的是对 koa 框架的封装，让开发者以koa框架的方式组织自己的函数代码
  ctx 为 koa 请求上下文，具体内容可以查看 https://koa.bootcss.com/#context
  更多其他框架请查阅 https://github.com/Serverless-Devs/fc-http
 */
http
  .get("/", async (ctx, next) => { 
    let result = "Hello ServerlessDevs";
    ctx.body = result;
  })

http.app.use(http.routes());

exports.handler = http();