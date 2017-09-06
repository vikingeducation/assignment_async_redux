const router = require('koa-router')();
const { GRManager } = require('../utils');

router.prefix('/api');

router.get('/searchAuthors/:name', async (ctx, next) => {
	ctx.body = await GRManager.searchAuthors(ctx.params.name);
});

router.get('/searchBooks', async (ctx, next) => {
	ctx.body = await GRManager.searchBooks(ctx.query);
});

module.exports = router;
