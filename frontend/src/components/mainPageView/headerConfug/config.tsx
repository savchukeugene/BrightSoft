import {BugOutlined, BuildOutlined, InfoCircleOutlined, UserOutlined} from "@ant-design/icons";
import {getItem, MenuItem} from "../../../common/utils/helpers.tsx";

export const USER_HEADER_ITEMS: MenuItem[] = [
    getItem('Оценки', 'grade', <></>),
    getItem('Расписание', 'timetable', <></>),
    getItem('Мой уровень', 'el3', <></>),
    getItem('Редактирование информации', 'el4', <></>),
]

export const LEFT_SIDE_MENU: MenuItem[] = [
    getItem('Пользователь', 'user', <UserOutlined/>),
    getItem('Задания', 'tasks', <BuildOutlined/>, [
        getItem('Лабиринты', 'taskLabirint'),
        getItem('Быстрый счёт', 'quickCount'),
        getItem('Абакусы', 'tasksAbakus'),
    ]),
    getItem('О компании', 'about', <InfoCircleOutlined/>,),
    getItem('Служба поддержки', 'support', <BugOutlined/>)
];