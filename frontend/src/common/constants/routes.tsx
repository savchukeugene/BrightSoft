import { IRoutesGenerator } from '../../types/commonTypes';
import Login from '../../components/Authorization/Login';
import CreateAccount from '../../components/Authorization/CreateAccount';
import { Navigate } from 'react-router-dom';
import { IUserRoles } from '../../store/userStore';
import MainPage from '../../components/mainPageView';
import Timetable from '../../components/mainPageView/MainView/User/Timetable';
import Grade from '../../components/mainPageView/MainView/User/Grade';
import QuickCount from '../../components/mainPageView/MainView/tasks/QuickCount';
import Play from '../../components/mainPageView/MainView/tasks/QuickCount/Play';
import SupportPage from '../../components/mainPageView/MainView/SupportPage';
import LandingPages from '../../components/mainPageView/MainView/LandingPages';
import UserManagement from '../../components/mainPageView/MainView/userManagement';
import PageNotFound from '../../components/commonComponents/PageNotFound';
import { defineDefaultNavigation } from '../utils/helpers';

export const Routes = {
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
    path: Routes.login,
    element: <Login />,
  },
  {
    path: Routes.createAccount,
    element: <CreateAccount />,
  },
  {
    path: '*',
    element: (
      <Navigate
        to={Routes.login}
        replace={true}
      />
    ),
  },
];
export const authorizedUserRoutesConfig = (role: IUserRoles): IRoutesGenerator[] => [
  {
    path: Routes.mainPage,
    element: <MainPage />,
    child: [
      {
        path: Routes.user,
        child: [
          {
            path: Routes.timetable,
            element: <Timetable />,
          },
          {
            path: Routes.grade,
            element: <Grade />,
          },
        ],
      },
      {
        path: Routes.tasks,
        child: [
          {
            path: Routes.quickCount,
            element: <QuickCount />,
            child: [
              {
                path: Routes.play,
                element: <Play />,
              },
            ],
          },
        ],
      },
      {
        path: Routes.support,
        element: <SupportPage />,
      },
      {
        path: Routes.about,
        element: <SupportPage />,
      },
      {
        path: Routes.editingPages,
        element: <LandingPages />,
      },
      {
        path: Routes.userManagement,
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
