const router = require('koa-router')();
const { GRManager } = require('../utils');

router.prefix('/api');

router.get('/searchAuthors/:name', async (ctx, next) => {
	GRManager.searchAuthors(ctx.params.name);
});

router.get('/string', async (ctx, next) => {
	ctx.body = 'koa2 string';
});

router.get('/json', async (ctx, next) => {
	ctx.body = {
		title: 'koa2 json'
	};
});

module.exports = router;

// const router = require('koa-router')()

// router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

// module.exports = router
