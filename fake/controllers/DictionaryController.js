module.exports = {
  indexAction() {
    const res = {
      status: 'success',
      data: {
        LOAN_STEPS: {
          checksum: "fgfgfgfg4",
          data: {
            currentStep: 'calculator',
            stepsCount: 4,
            list: {
              waiting: {
                next: null,
                prev: null,
                showProgressBar: false,
                data: {
                  url: '#',
                },
                buttons: false,
              },
              thanks: {
                next: null,
                prev: 'confirmation',
                showProgressBar: false,
                data: {
                  text: 'Имя Отчество, поздравляем, ваш договор №000000000 на сумму 0000,00 рублей успешно подписан! Деньги поступят на карту **** **** **** 0000.',
                  info: 'Вся информация о договоре находится во вкладке «Текущий заём»',
                },
                buttons: false,
              },
              success: {
                next: null,
                prev: null,
                showProgressBar: false,
                buttons: {
                  submit: 'Продолжить оформление',
                  reject: 'Отменить',
                },
                data: {
                  url: '#',
                },
              },
              calculator: {
                next: 'insurance',
                prev: null,
                num: 1,
                title: 'Калькулятор',
                submitUrl: 'fake/calculator',
                showProgressBar: false,
                takeIntoConsideration: true,
                buttons: {
                  submit: 'Начать оформление'
                },
                data: {
                  calculator: {
                    backendParams: {
                      LOAN_UID: '0000',
                      action: 'calculator.new.loan',
                      LOAN_PROCENT: '7',
                    },
                    date: null,
                    'you-will-get': null,
                    'need-return': null,
                    'pay-loan': null,
                    'interest-rate': null,

                    summMin: 1000,
                    summMax: 30000,
                    summStep: 500,
                    summValue: 3000,

                    daysMin: 1,
                    daysMax: 30,
                    daysStep: 1,
                    daysValue: 7,

                    stavka: 0.9,

                    forbiddenPaymentDates: (() => {
                      const date = new Date();
                      const res = [];
                      for (let i = 0; i < 15; i += 3) {
                        res.push(new Date(date.getFullYear(), date.getMonth(), date.getDate() + i).getTime());
                      }
                      return res;
                    })(),

                    paymentPeriod: 30,
                    textSpec: 'Расчёт верен при условии оплаты равными долями каждые 30 дней',
                    limitSumStart: 20000,
                    textLimit: 'Сумма от 20 000 ₽ доступна только действующим клиентам компании',
                  },
                  errors: {
                    setGoal: "Выберите цель займа",
                  },
                  checkboxes: [
                    {
                      id: 124,
                      name: 'public-face',
                      label: 'Не являюсь публичным лицом РФ',
                      checked: true,
                      required: true,
                      error: false
                    },
                    {
                      id: 125,
                      name: 'own-decision',
                      label: 'Решение взять займ принято самостоятельно',
                      checked: true,
                      required: true,
                      error: false
                    }
                  ],
                },
              },
              insurance: {
                next: 'cards',
                prev: 'calculator',
                num: 0,
                title: 'Выберите дополнительные продукты',
                submitUrl: 'fake/insurance/submit',
                showProgressBar: false,
                buttons: {
                  submit: 'Следующий шаг',
                  /*reject: '',*/
                },
                data: {
                  url_insurances_list: 'fake/insurance',
                },
              },
              cards: {
                next: 'confirmation',
                prev: 'insurance',
                num: 2,
                title: 'Выберите банковскую карту',
                submitUrl: 'fake/cards/submit',
                takeIntoConsideration: true,
                buttons: {
                  submit: 'Следующий шаг',
                },
                data: {
                  url_fetch_cards: 'fake/cards',
                  url_add_card: 'fake/cards/add',
                  url_remove_card: 'fake/cards/remove',
                  errors: {
                    errorFio: "Не заполнено ФИО",
                    semiEmptyFio: "Правильно заполните ФИО",
                    errorEmptyCard: "Не выбрана карта",
                  },
                },
              },
              confirmation: {
                next: 'thanks',
                prev: 'cards',
                num: 3,
                title: 'Идентификация',
                submitUrl: 'fake/confirmation/submit',
                takeIntoConsideration: true,
                buttons: {
                  submit: 'Подписать'
                },
                data: {
                  url_get_data: 'fake/confirmation',
                  url_send_sms: 'fake/confirmation/send',
                  url_repeat_sms: 'fake/confirmation/repeat',
                  smsTimeout: 25000,
                  isConditionConfirmed: false,
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
                },
              },
            },
          },
        },
        LOAN_ERRORS: {
          checksum: "fgfgfgfg44",
          data: {
            errorFio: "Не заполнено ФИО",
            errorPhone: "Не заполнен телефон",
            semiEmptyFio: "Правильно заполните ФИО",
            semiEmptyPhone: "Полностью введите номер телефона",
            errorEmptyCard: "Не выбрана карта",
            setGoal: "Выберите цель займа",
            setRole: "Укажите контактное лицо"
          },
        },
        PEOPLE_ROLES: {
          checksum: "fgfgfgfg44",
          data: [
            {
              name: "мать",
              value: "мать",
              selected: false,
              disabled: false
            },
            {
              name: "отец",
              value: "отец",
              selected: false,
              disabled: false
            },
            {
              name: "брат",
              value: "брат",
              selected: false,
              disabled: false
            },
            {
              name: "сестра",
              value: "сестра",
              selected: false,
              disabled: false
            }
          ]
        },
        LOAN_TARGETS_LIST: {
          checksum: 'fgfgfgfg44',
          data: [
            {name: 'Машина', value: 1},
            {name: 'Квартира', value: 2},
            {name: 'Деньги', value: 3},
            {name: 'На прочие нужды', value: 4},
            {name: 'Чтобы были', value: 5},
          ],
        },
        ADDITIONAL_PRODUCTS: {
          checksum: "fgfgfgfg44",
          data: [
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
          ]
        }
      },
    };

    return JSON.stringify(res);
  },
}
