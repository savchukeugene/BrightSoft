const tasksPages: string[] = ['Лабиринты', 'Быстрый счёт', 'Абакусы'];
const userPages: string[] = ['Расписание', 'Оценки'];

export const messages = {
  defaultUserId: '00000000-0000-0000-0000',
  requests: {
    success: 'Запрос успешен!',
  },
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
        timetable: {
          title: 'Расписание',
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
      userManagement: {
        isVerified: {
          yes: 'Подтверждён',
          no: 'Не подтверждён',
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
  modal: {
    confirmUserDelete: 'Вы действительно хотите удалить данного пользователя?',
  },
  button: {
    yes: 'Да',
    no: 'Нет',
    goMainPage: 'На главную',
    send: 'Отправить',
    continue: 'Продолжить',
    apply: 'Применить',
    reset: 'Сбросить',
    create: 'Создать',
    login: 'Войти',
  },
  notification: {
    success: {
      messages: {
        success: 'Успешно!',
      },
      description: {
        successRegistration:
          'Вы успешно создали аккаунт! Пожалуйста, авторизируйтесь в систему с ранее созданными данными.',
        successLogin: 'Вы успешно вошли в аккаунт!',
        successLogout: 'Вы успешно вышли из аккаунта!',
      },
    },
    warn: {},
    error: {
      invalidData: 'Произошла ошибка при обработке данных!',
      unknownError: 'Произошла неизвестная ошибка!',
    },
  },
  userRoles: {
    administrator: 'Администратор',
    user: 'Пользователь',
    support: 'Специалист техподдержки',
  },
  userStatuses: {
    active: 'Активный',
    non_confirmed: 'Не подтверждён',
    blocked: 'Заблокирован',
    deleted: 'Удалён',
  },
  defaultText:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n' +
    "                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n" +
    '                        of type and scrambled it to make a type specimen book.',
};
