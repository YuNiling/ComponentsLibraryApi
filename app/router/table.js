
// eslint-disable-next-line arrow-parens
module.exports = (app) => {
  const { router, controller } = app;
  router.post('/apis/table/list', controller.table.list);
  router.delete('/apis/table/deleteById', controller.table.deleteById);
};
