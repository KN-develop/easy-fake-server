module.exports = {
  indexAction() {
    const res = {
      status: 'success',
      data: {
        next: {
          name: 'confirmation',
          content: {
            data: {
              SUM_LOAN: '7 500 рублей',
              DATE_END: '12.12.2019',
              LOAN_PROCENT: '0.7%',
              LOAN_PSK: '231,00% (двести тридцать один процент)',
              DOC_PDF: [
                {
                  url: '#',
                  name: 'Договор №ЦЗ31ЛМ105771 от 29.04.2020',
                },
                {
                  url: '#',
                  name: 'Заявление заемщика Договор №ЦЗ31ЛМ105771 от 29.04.2020',
                },
                {
                  url: '#',
                  name: 'Согласие на взаимодействие соглашение о способах и частоте взаимодействия Договор №ЦЗ31ЛМ105771 от 29.04.2020',
                },
                {
                  url: '#',
                  name: 'Приложение 1 Договор №ЦЗ31ЛМ105771 от 29.04.2020',
                },
              ],
              isConfirmedConditions: false,
            }
          }
        }
      }
    };

    return JSON.stringify(res);
  },

  conditionsAction() {
    const res = {
      status: 'success',
      data: {
        next: {
          name: 'confirmation',
          content: {
            data: {
              SUM_LOAN: '7 500 рублей',
              DATE_END: '12.12.2019',
              LOAN_PROCENT: '0.7%',
              LOAN_PSK: '231,00% (двести тридцать один процент)',
              DOC_PDF: [
                {
                  url: '#',
                  name: 'Посмотреть договор займа PDF',
                },
              ],
            }
          }
        }
      }
    };

    return JSON.stringify(res);
  }
}
