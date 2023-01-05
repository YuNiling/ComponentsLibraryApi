
// eslint-disable-next-line arrow-parens
module.exports = (app) => {
  const { router, controller } = app;
  router.post('/apis/home/list', controller.home.list);
  router.delete('/apis/home/delete', controller.home.delete);
};
