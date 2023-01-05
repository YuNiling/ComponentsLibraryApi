// eslint-disable-next-line arrow-parens
exports.list = async (ctx) => {
  const res = await ctx.service.home.list(ctx.request);
  ctx.body = res;
  ctx.status = res.status;
};

// eslint-disable-next-line arrow-parens
exports.delete = async (ctx) => {
  const res = await ctx.service.home.delete(ctx.request);
  ctx.body = res;
  ctx.status = res.status;
};
