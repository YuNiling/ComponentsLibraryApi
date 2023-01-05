/* eslint-disable arrow-parens */
exports.list = async (ctx) => {
  const res = await ctx.service.table.list(ctx.request.body);
  ctx.body = res;
  ctx.code = res.code;
};

exports.deleteById = async (ctx) => {
  const res = await ctx.service.table.deleteById(ctx.query);
  ctx.body = res;
  ctx.code = res.code;
};
