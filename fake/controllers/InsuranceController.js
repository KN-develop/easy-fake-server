module.exports = {
  indexAction() {
    const res = {
      status: 'success',
      data: {
        content: {
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
      }
    }
    return JSON.stringify(res);
  },

  submitAction(data) {
    const res = {
      status: 'success',
      data: {}
    };

    return JSON.stringify(res);
  }
};
