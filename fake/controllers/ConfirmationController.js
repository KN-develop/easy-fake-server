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
                },
                {
                  title: 'Страхование<br> имущества физ. лиц',
                  text: 'Высокий уровень вовлечения представителей целевой аудитории.',
                  name: 'ifl',
                  imageMobile: 'images/insurances/ifl--mobile.pn',
                  imageDesktop: 'images/insurances/ifl.png',
                  bg: '#C05F5F',
                  links: [
                    {text: 'Проект страхового полиса', href: '#'},
                    {text: 'Памятка', href: '#'}
                  ],
                  summ: '150 рублей на 1 месяц',
                  checked: false
                },
                {
                  title: 'Теледоктор',
                  text: 'Высокий уровень вовлечения представителей целевой аудитории.',
                  name: 'teledoctor',
                  imageMobile: 'images/insurances/teledoctor--mobile.pn',
                  imageDesktop: 'images/insurances/teledoctor.png',
                  bg: '#717B94',
                  links: [
                    {text: 'Проект страхового полиса', href: '#'},
                    {text: 'Памятка', href: '#'}
                  ],
                  summ: '150 рублей на 1 месяц',
                  checked: true
                },
                {
                  title: 'Антиклещ',
                  text: 'Высокий уровень вовлечения представителей целевой аудитории.',
                  name: 'bug',
                  imageMobile: 'images/insurances/bug--mobile.pn',
                  imageDesktop: 'images/insurances/bug.png',
                  bg: '#D58D6E',
                  links: [
                    {text: 'Проект страхового полиса', href: '#'},
                    {text: 'Памятка', href: '#'}
                  ],
                  summ: '150 рублей на 1 месяц',
                  checked: false
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
