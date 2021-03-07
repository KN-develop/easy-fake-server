/*eslint no-eval: "off"*/

function req(script) {
  let module = {};
  let exports = {};

  eval(script);

  return module.exports ? module.exports : exports;
}

module.exports = req;
