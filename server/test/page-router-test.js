'use strict';

require('./lib/mock-env.js');
require('../../index.js');

const {expect} = require('chai');
const superagent = require('superagent');

// const Page = require('./model/page.js');
let baseURL = process.env.API_URL;

describe('Testing page router', function(){
  describe('Testing POST /api/pages', () => {
    it('should respond with status code 200', (done) => {
      superagent.post(`${baseURL}/api/pages`)
      .send({
        title: 'test page',

      })
      .then(res => {
        expect(res.status).to.equal(200);
        done();
      })
      .catch(done);
    });
  });

});
