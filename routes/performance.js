const Router = require('koa-router');

// Prefix all routes with: /v1/performance-center
const router = new Router({
	prefix: '/v1/performance-center'
});

let performanceDataArray = [
	{ productId: 35, fundId:'430',inceptionDate: '2006-04-30', ytdAsOf:'2.4' },
	{ productId: 36, fundId:'431', nceptionDate: '2006-04-30', ytdAsOf:'1.3' },
	{ productId: 37, fundId:'432', nceptionDate: '2006-04-30', ytdAsOf:'2.63' },
	{ productId: 36, fundId:'433', nceptionDate: '2006-04-30', ytdAsOf:'2.6' }
];

// Routes will go here
router.get('/', (ctx, next) => {
	ctx.body = performanceDataArray;
	next();
});

router.get('/:productId', (ctx, next) => {
	let getPerformanceData = performanceDataArray.filter(function(performanceData) {
		if (performanceData.productId == ctx.params.productId) {
			return true;
		}
	});

	if (getPerformanceData.length) {
		ctx.body = getPerformanceData[0];
	} else {
		ctx.response.status = 404;
		ctx.body = 'Product Not Found';
	}
	next();
});

module.exports = router;

