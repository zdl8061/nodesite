var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!ABC的';
});

module.exports = router;
