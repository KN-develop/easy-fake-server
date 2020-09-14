const fs = require('fs');
const path = require('path');
const util = require('util');
const req = require('./importScript');
const BaseFakeController = require('./fake/controllers/BaseFakeController.js');


const routing = {
  '/': async (req, res, callback) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const data = `<h1>welcome to my API.</h1><hr>
          <p>Для получения фейковых данных следуйте по запросу /fake/***</p>
          <p></p>
         `;
    callback(data);
  }
};

const getRoute = (str, CONFIG = {}) => {
  const parseRes = parseStr(str);

  if (parseRes.fake) {
    let res;
    try {
      res = createFakeDataFunction(parseRes);
    } catch (e) {
      res = routing[str]
    }

    return res;
  }

  return routing[str];
};


const parseStr = (str) => {
  const splitedGetParams = str.split('?');
  let href = str;
  let get;

  if (splitedGetParams.length > 1) {
    href = splitedGetParams[0];
    get = splitedGetParams[1];
  }
  const arr = href.split('/');
  arr.shift();

  const res = {
    str,
  };

  if (arr[0] === 'fake') {
    arr.shift();
    res.fake = true;
    res.controller = arr.shift();
    res.action = arr.length ? arr.shift() : undefined;
    res.params = arr;
  }

  return res;
};

const createFakeDataFunction = (params) => {
  let dataAnswer;
  const resFn = async (req, res, callback) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const data = dataAnswer;
    callback(data);
  };

  if (!params.controller) {
    dataAnswer = 'Это апи';
    return resFn;
  }

  let controller = params.controller[0].toUpperCase() + params.controller.slice(1);
  let action = '';
  let id;

  if (params.action) {
    if (isNaN(parseInt(params.action))) {
      action = params.action;
    } else {
      action = 'one';
      id = params.action;
    }
  } else {
    action = 'index';
  }

  if (!id) {
    params.params.length && (id = params.params.shift());
  }

  const fr = util.promisify(fs.readFile);
  const str = `./fake/controllers/${controller}Controller.js`;

  async function getController() {
    try {
      const res = await fr(path.resolve(__dirname, str), 'UTF-8');
      controller = req(res);
    } catch (e) {
      controller = BaseFakeController;
    }
  }

  const resolve = async () => {
    await getController();
    const fn = controller[`${action}Action`];
    if (fn instanceof Function) {
      return fn(id, ...params.params);
    }

    if (BaseFakeController[`${action}Action`] instanceof Function) {
      return BaseFakeController[`${action}Action`](id, ...params.params);
    }

    return BaseFakeController.indexAction(null);
  };

  return async (req, res, callback) => {
    const data = await resolve();

    if (typeof data === 'string') {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      callback(data);
    } else if (data instanceof Object) {
      const {headers = [], statusCode = 200, body = null} = data;
      headers.forEach(header => res.setHeader(header[0], header[1]));
      res.statusCode = statusCode;
      callback(body);
    }

    callback('404');

  }
}

module.exports = getRoute;
