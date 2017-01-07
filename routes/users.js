var router = require('koa-router')();

var mongo = require('mongodb');
var monk = require('monk');

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

module.exports = router;
