/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1671009425657_9426';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
      // ignoreJSON: true,
      // headerName: 'x-csrf-token',
    },
    domainWhiteList: [ '*' ], // 配置白名单
  };

  config.cors = {
    enable: true,
    // origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    origin: ctx => ctx.get('origin'), // 这种方式是允许所有的IP+端口跨域访问
    credentials: true, // 开启认证
    withCredentials: true,
  };

  config.mysql = {
    // enable: true,
    // package: 'egg-mysql',
    // 单数据库信息配置
    client: {
      host: '81.68.90.250', // host
      port: '3306', // 端口号
      user: 'test_db', // 用户名
      password: '94946bec89', // 密码
      database: 'test_db', // 数据库名
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: true,
  };

  // config.validate = {
  //   convert: true, // 对参数可以使用convertType规则进行类型转换
  // };

  // config.middleware = [ 'gzip' ];
  // config.gzip = {
  //   threshold: 1024, // 小于 1k 的响应体不压缩
  // };

  return {
    ...config,
    ...userConfig,
  };
};
