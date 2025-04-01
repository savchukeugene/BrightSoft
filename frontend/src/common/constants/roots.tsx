import { IRoutesGenerator } from '../../types/commonTypes.ts';
import Login from '../../components/Authorization/Login';
import CreateAccount from '../../components/Authorization/CreateAccount';
import PageNotFound from '../../components/commonComponents/PageNotFound';
import MainPage from '../../components/mainPageView';
import Timetable from '../../components/mainPageView/MainView/User/Timetable';
import Grade from '../../components/mainPageView/MainView/User/Grade';
import { Navigate } from 'react-router-dom';
import QuickCount from '../../components/mainPageView/MainView/tasks/QuickCount';
import Play from '../../components/mainPageView/MainView/tasks/QuickCount/Play';
import SupportPage from '../../components/mainPageView/MainView/SupportPage';
import LandingPages from '../../components/LandingPages';
import { defineDefaultNavigation } from '../utils/helpers.tsx';
import UserManagement from '../../components/mainPageView/MainView/userManagement';
import { IUserRoles } from '../../store/userStore.tsx';

export const ROOTS = {
  mainPage: '/mainPage',
  user: '/user',
  tasks: '/tasks',
  grade: '/grade',
  quickCount: '/quickCount',
  timetable: '/timetable',
  maze: '/maze',
  support: '/support',
  about: '/about',
  editingPages: '/editingPages',
  login: '/login',
  createAccount: '/createAccount',
  userManagement: '/userManagement',
  play: '/play',
};

export const logoutUserRoutesConfig: IRoutesGenerator[] = [
  {
    path: ROOTS.login,
    element: <Login />,
  },
  {
    path: ROOTS.createAccount,
    element: <CreateAccount />,
  },
  {
    path: '*',
    element: (
      <Navigate
        to={ROOTS.login}
        replace={true}
      />
    ),
  },
];

export const authorizedUserRoutesConfig = (role: IUserRoles): IRoutesGenerator[] => [
  {
    path: ROOTS.mainPage,
    element: <MainPage />,
    child: [
      {
        path: ROOTS.user,
        child: [
          {
            path: ROOTS.timetable,
            element: <Timetable />,
          },
          {
            path: ROOTS.grade,
            element: <Grade />,
          },
        ],
      },
      {
        path: ROOTS.tasks,
        child: [
          {
            path: ROOTS.quickCount,
            element: <QuickCount />,
            child: [
              {
                path: ROOTS.play,
                element: <Play />,
              },
            ],
          },
        ],
      },
      {
        path: ROOTS.support,
        element: <SupportPage />,
      },
      {
        path: ROOTS.about,
        element: <SupportPage />,
      },
      {
        path: ROOTS.editingPages,
        element: <LandingPages />,
      },
      {
        path: ROOTS.userManagement,
        element: <UserManagement />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={defineDefaultNavigation(role)} />,
  },
];
