'use strict';

const http = require('http');
const CONFIG = require('./config.js');

const routing = require('./routing');

const types = {
  object: ([data], callback) => callback(JSON.stringify(data)),
  undefined: (args, callback) => callback('not found'),
  function: ([fn, req, res], callback) => {
    if (fn.length === 3) fn(req, res, callback);
    else callback(JSON.stringify(fn(req, res)));
  },
};

const serve = (data, req, res) => {
  const type = typeof data;
  if (type === 'string') {
      return res.end(data)
    }
  const serializer = types[type];
  serializer([data, req, res], data => serve(data, req, res));
};

http.createServer((req, res) => {
  const data = routing(req.url);

  setTimeout(() => {
    if (data) serve(data, req, res);
    else serve('<h1>404 error</h1>', req, res);
  }, CONFIG.requestDelay || 0);
}).listen(CONFIG.port);

console.log(`SERVER listen: http://localhost:${CONFIG.port}/`);
