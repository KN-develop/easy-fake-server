module.exports = {
  indexAction() {
    const res = {
      status: 'success',
      data: [
        {
          UID: 'qwdqwd-qwdqwd-vqefe-345346',
          last_digits: '1427',
          first_digit: '4'
        },
        {
          UID: 'qwdqwd-qwdqwd-vqefe-1251543',
          last_digits: '4555',
          first_digit: '2'
        },
        {
          UID: 'qwdqwd-qwdqwd-vqefe-1245543',
          last_digits: '4657',
          first_digit: '6'
        },
        {
          UID: 'qwdqwd-qwdqwd-vqefe-0005543',
          last_digits: '0057',
          first_digit: '5'
        },
        {
          UID: 'qwdqwd-qwdqwd-vqefe-0006543',
          last_digits: '0077',
          first_digit: '1'
        },
      ]
    }
    return JSON.stringify(res);
  },

  addAction(data) {
    const res = {
      status: 'success',
      data: {
        UID: 'qwdqwd-qwdqwd-vqefe-0001243',
        last_digits: '5577',
        first_digit: '1'
      },
      url: 'fake/cards/add',
      message: 'Карта успешно добавлена',
    };

    return JSON.stringify(res);
  },

  removeAction(id) {
    const res = {
      status: 'success',
      timeout: 4000,
      UID:"qwdqwd-qwdqwd-vqefe-345346",
      url: 'fake/cards/remove',
      message: 'Мы удалили вашу карту из базы данных',
    };

    return JSON.stringify(res);
  },

  submitAction(data) {
    const res = {
      status: 'success',
      data: {
        next: {
          name: 'waiting',
          content: {
            next: 'success',
            prev: 'cards',
            showProgress: false,
            takeIntoConsideration: false,
            submitUrl: 'fake/waiting',
            data: {
              setInterval: 7000,
              message: 'Проверяем вашу заявку обычно это занимает не более трех минут'
            },
          }
        }
      },
    };

    return JSON.stringify(res);
  }
};
