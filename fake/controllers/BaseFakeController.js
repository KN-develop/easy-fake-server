module.exports = {
  indexAction(...params) {
    return 'Вызван базовый контроллер, метод: indexAction\n' + params.toString();
  },
  oneAction(...params) {
    return 'Вызван базовый контроллер, метод: oneAction\n' + params.toString();
  }
};
