'use strict';

const { Controller } = require('egg');

const test = () => {
  console.log(123);
};


class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    test();
  }
}

module.exports = HomeController;
