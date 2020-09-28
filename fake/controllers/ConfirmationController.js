module.exports = {
  indexAction() {
    const res = {
      status: 'success',
      data: {
        next: {
          name: 'insurance',
          content: {
            data: {
              list: [
                {
                  title: 'Финансовая защита',
                  text: 'Высокий уровень вовлечения представителей целевой аудитории.',
                  name: 'finans-protected',
                  imageMobile: 'images/insurances/fz--mobile.pn',
                  imageDesktop: 'images/insurances/fz.png',
                  bg: '#87B370',
                  links: [
                    {text: 'Проект страхового полиса', href: '#'},
                    {text: 'Памятка', href: '#'}
                  ],
                  summ: '150 рублей на 1 месяц',
                  checked: true
                }
              ],
            }
          },
        }
      },
    };

    return JSON.stringify(res);
  },

  sendAction() {
    const res = {
      status: 'success',
      data: {

      },
    }

    return JSON.stringify(res);
  },

  repeatAction() {
    const res = {
      status: 'success',
      data: {
        smsTimeout: 15000,
      },
    }

    return JSON.stringify(res);
  }
};
