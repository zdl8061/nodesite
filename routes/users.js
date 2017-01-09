var router = require('koa-router')();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('127.0.0.1:27017/nodetest1');

router.get('/', async function (ctx, next) {
  var collection = db.get('usercollection');

  var docs = await collection.find({}, {sort: {username: 1}});

  await ctx.render('users', {
      "userlist" : docs
  });
})

module.exports = router;
