const createMessage = (params) => {
  return `Вызван базовый контроллер, метод: indexAction\n ${params.toString()}`;
};

module.exports = {
  indexAction(...params) {
    return createMessage(params);
  },
  oneAction(...params) {
    return createMessage(params);
  }
};
