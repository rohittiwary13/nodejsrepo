const Koa = require('koa');
const koaBody = require('koa-body');
const logger = require('koa-logger');
var log4js = require('log4js');
var log = log4js.getLogger("app");

// create app instance
const app = new Koa();

app.use(logger());
// middleware functions
app.use(koaBody());

// Require the Router we defined in performance.js
let performanceArray = require('./routes/performance.js');

// Use the Router on the sub route /v1/performance-center
app.use(performanceArray.routes());

app.listen(8080);
console.log('Server started on port 3000')
