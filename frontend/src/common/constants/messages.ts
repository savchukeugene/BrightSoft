const tasksPages: string[] = ['Лабиринты', 'Быстрый счёт', 'Абакусы'];
const userPages: string[] = ['Расписание', 'Оценки'];
import React from 'react';

export const messages = {
  defaultUserId: '00000000-0000-0000-0000-000000000000',
  requests: {
    success: 'Запрос успешен!',
  },
  view: {
    main: {
      layoutOptions: {
        level: (param: string | null, color: string) =>
          React.createElement(
            'span',
            { style: { color } },
            // @ts-ignore
            messages.view.main.tasks.quickCount.labels[param ?? 'easy'] ?? 'Неизвестно',
          ),
        users: 'Пользователи',
        user: 'Пользователь',
        tasks: 'Задания',
        support: 'Служба поддержки',
        pages: 'Страницы',
        about: 'О компании',
        grade: 'Оценки',
        timetable: 'Расписание',
        maze: 'Лабиринты',
        quickCount: 'Быстрый счёт',
        numberHunt: 'Охота за числами',
      },
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
          play: {
            start: 'Старт',
            duration: 'Общее время:',
            period: 'Периодичность',
            info: 'Информация',
            timeOut: 'Время истекло. Пожалуйста, введите ваш ответ в поле ниже:',
            answerPlaceholder: 'Ваш ответ',
            rightAnswerDescription: 'Всё верно! Вы успешно прошли этот уровень!',
            wrongAnswerDescription:
              'Неверно! Вы дали неправильный ответ! Попробуйте снова, либо потренеруйтесь ещё.',
          },
          labels: {
            superEasy: 'Проще простого',
            easy: 'Легкий',
            normal: 'Средний',
            hard: 'Тяжёлый',
            custom: 'Пользовательский',
          },
          boxShadow: {
            superEasy: '#64ff9d',
            easy: '#008c32',
            normal: '#eeb800',
            hard: '#e70202',
            custom: '#959595',
          },
          validateMessage: (label: string): string =>
            `Пожалуйста, укажите поле ${label}!`,
        },
        numberHunt: {
          title: 'Охота за числами',
          labels: {
            superEasy: 'Проще простого',
            easy: 'Легкий',
            normal: 'Средний',
            hard: 'Тяжёлый',
            custom: 'Пользовательский',
          },
          boxShadow: {
            superEasy: '#64ff9d',
            easy: '#008c32',
            normal: '#eeb800',
            hard: '#e70202',
            custom: '#959595',
          },
        },
      },
      userManagement: {
        table: {
          userName: 'Имя пользователя',
          role: 'Роль',
          created_at: 'Создал аккаунт',
          status: 'Статус',
          operation: 'Действия',
        },
        userInfo: {
          userName: 'Имя пользователя',
          email: 'Электронная почта',
          status: 'Статус',
          role: 'Роль',
        },
        isVerified: {
          yes: 'Подтверждён',
          no: 'Не подтверждён',
        },
      },
      about: {
        title: 'О компании',
      },
    },
    errorBoundary: {
      title: 'Произошла ошибка!',
      description: 'Прочитайте сообщение об ошибке и нажмите на кнопку ниже.',
    },
    login: {
      fields: {
        inputEmail: 'Введите e-mail',
        inputPassword: 'Введите пароль',
      },
    },
    createAccount: {
      fields: {
        userName: 'Придумайте имя пользователя',
        email: 'Введите e-mail',
        password: 'Придумайте пароль',
        passwordRepeat: 'Подтвердите пароль',
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
    footer: {
      footer1: `2018-${new Date().getFullYear()}, Общество с ограниченной ответственностью «Брайт Софт Системс»`,
      footer2: '224006, г. Брест, ул. Ясеневая, д. 5/1',
      footer3: 'Телефон: +375 162 937306',
    },
  },
  tooltip: {
    gameInfo: 'Нажмите, что-бы узнать информацию об этом задании',
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
    check: 'Проверить',
    back: 'Вернуться',
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
    error: {
      invalidData: 'Произошла ошибка при обработке данных!',
      unknownError: 'Произошла неизвестная ошибка!',
    },
    warn: {
      payAttention: 'Обратите внимание!',
      difference: 'Разница диапазона должна быть больше единицы!',
      firstMustBeLess: 'Первое число диапазона должно быть строго меньше второго!',
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
