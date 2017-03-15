'use strict';

require('./lib/mock-env.js');
require('../../index.js');

const {expect} = require('chai');
const superagent = require('superagent');
let baseURL = process.env.API_URL;

describe('Testing page router', function(){
  describe('Testing POST /api/pages', () => {
    it('should respond with status code 200', (done) => {
      superagent.post(`${baseURL}/api/pages`)
      .send({})
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body.title).to.equal('test page');
        expect(res.body.content).to.equal('woooooww content');
        done();
      })
      .catch(done);
    });
  });

});
