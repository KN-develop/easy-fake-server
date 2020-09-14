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
                  name: 'Посмотреть договор займа PDF',
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
