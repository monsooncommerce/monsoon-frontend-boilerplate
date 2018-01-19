const Koa = require('koa');
const config = require('./config');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const Router = require('koa-router');

const app = new Koa();
const basicRouter = Router();

basicRouter.get('/api/foo', (ctx, next) => {
  console.log('foo');
});

const handleError = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    console.log(e);
    ctx.response.body = {
      status: 'error',
      message: 'Page not Found',
    };
  }
};

app
  .use(logger())
  .use(koaBody())
  .use(handleError)
  .use(basicRouter.routes())
  .use(basicRouter.allowedMethods())
  .use(require('koa-static')(__dirname + '/../build'));

app.listen(8083);
