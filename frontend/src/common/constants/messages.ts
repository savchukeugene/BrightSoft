const tasksPages: string[] = ['Лабиринты', 'Быстрый счёт', 'Абакусы'];
const userPages: string[] = ['Расписание', 'Оценки'];

export const messages = {
  view: {
    main: {
      supportPage: {
        title: 'Нам жаль, что Вы столкнулись с неприятностью...',
        subTitle: 'Пожалуйста, опишите проблему, с которой Вы столкнулись:',
        textAreaPlaceholder: 'Опишите проблему...',
        validateMessage: 'Пожалуйста, заполните это поле!',
      },
      user: {
        grade: {
          title: 'Оценки',
        },
      },
      tasks: {
        quickCount: {
          title: 'Быстрый счёт',
          formTitle: 'Настройки перед игрой',
          duration: 'Общее время',
          period: 'Время изменения',
          range: 'Диапазон',
          validateMessage: (label: string): string =>
            `Пожалуйста, укажите поле ${label}!`,
        },
      },
    },
    pageNotFound: {
      title: 'Упс...',
      description:
        'Что-то пошло не так. Похоже, что данной страницы не существует, либо она находиться в разработке. Убедитесь, что Вы перешли по действительной ссылке.',
    },
    chooseNextPage: {
      default: 'Пожалуйста, выберите следующую страницу: ',
      nextUser: userPages,
      nextTasks: tasksPages,
    },
  },
  modal: {},
  button: {
    yes: 'Да',
    no: 'Нет',
    goMainPage: 'На главную',
    send: 'Отправить',
    continue: 'Продолжить',
  },
  notification: {
    success: {
      messages: {
        success: 'Успешно!',
      },
      description: {
        successLogin: 'Вы успешно вошли в аккаунт!',
        successLogout: 'Вы успешно вышли из аккаунта!',
      },
    },
    warn: {},
    error: {},
  },
  defaultText:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n' +
    "                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n" +
    '                        of type and scrambled it to make a type specimen book.',
};
