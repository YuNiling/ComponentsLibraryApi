'use strict';

// exports.validate = {
//   enable: true,
//   package: 'egg-validate',
// };

// exports.mysql = {
//   enable: true,
//   package: 'egg-mysql',
//   // eslint-disable-next-line eggache/no-unexpected-plugin-keys
//   client: {
//     host: '81.68.90.250',
//     port: '3306',
//     user: 'admin',
//     password: 'mysqlyu...',
//     database: 'test',
//   },
//   // eslint-disable-next-line eggache/no-unexpected-plugin-keys
//   app: true,
//   // eslint-disable-next-line eggache/no-unexpected-plugin-keys
//   agent: false,
// };

// exports.mysql = {
//   enable: true,
//   package: 'egg-mysql',
//   // 单数据库信息配置
//   // eslint-disable-next-line eggache/no-unexpected-plugin-keys
//   client: {
//     // host
//     host: 'mysql.com',
//     // 端口号
//     port: '3306',
//     // 用户名
//     user: 'test_user',
//     // 密码
//     password: 'test_password',
//     // 数据库名
//     database: 'test',
//   },
//   // 是否加载到 app 上，默认开启
//   // eslint-disable-next-line eggache/no-unexpected-plugin-keys
//   app: true,
//   // 是否加载到 agent 上，默认关闭
//   // eslint-disable-next-line eggache/no-unexpected-plugin-keys
//   agent: false,
// };

exports.cors = {
  enable: true,
  package: 'egg-cors',
};
