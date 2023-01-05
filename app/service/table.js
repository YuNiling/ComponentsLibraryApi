/* eslint-disable arrow-parens */
const Service = require('egg').Service;

class TableService extends Service {
  /**
   * 加载列表
   * @param {*} param
   * @return
   */
  async list(param) {
    const { app } = this;
    const pageNo = Number(param.pageNo);
    const pageSize = Number(param.pageSize);
    const results = await app.mysql.select('tb', {
      offset: (pageNo - 1) * pageSize,
      limit: pageSize,
    });
    return {
      message: 'ok',
      code: 200,
      data: {
        list: [ ...results ],
        total: results.length,
        pageNo,
        pageSize,
      },
    };
  }
  /**
   * 根据ID删除表格
   * @param {*} param
   * @return
   */
  async deleteById(param) {
    const { app } = this;
    const results = await app.mysql.delete('tb', {
      id: param.id,
    });
    console.log('results:', results);
    if (results.affectedRows === 1) {
      return {
        message: 'ok',
        code: 200,
      };
    }
  }
}

module.exports = TableService;
