const list = [
  { id: 1, name: '王二' },
  { id: 2, name: '李二' },
  { id: 3, name: '张三' },
];

// eslint-disable-next-line arrow-parens
exports.list = async (data) => {
  return {
    message: 'ok',
    status: 200,
    data: {
      list: [ ...list ],
      pageSize: data.pageSize,
      current: data.current,
      totalCount: list.length,
      total: 1,
    },
  };
};

// eslint-disable-next-line arrow-parens
exports.delete = async (index) => {
  list.splice(index, 1);
  return {
    message: 'ok',
    status: 200,
  };
};
