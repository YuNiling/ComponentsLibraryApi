'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/login.test.js', () => {
  it('should assert', async () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should GET /', async () => {
    return app.httpRequest()
      .get('/')
      .expect('test login')
      .expect(300);
  });
});
