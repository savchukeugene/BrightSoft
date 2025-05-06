import { IRoutesGenerator } from '../../types/commonTypes';
import Login from '../../components/Authorization/Login';
import CreateAccount from '../../components/Authorization/CreateAccount';
import { Navigate } from 'react-router-dom';
import { IUserRoles } from '../../store/userStore';
import MainPage from '../../components/mainPageView';
import Timetable from '../../components/mainPageView/MainView/User/Timetable';
import Grade from '../../components/mainPageView/MainView/User/Grade';
import PlayQuickCount from '../../components/mainPageView/MainView/tasks/QuickCount';
import SupportPage from '../../components/mainPageView/MainView/SupportPage';
import LandingPages from '../../components/mainPageView/MainView/LandingPages';
import UserManagement from '../../components/mainPageView/MainView/userManagement';
import PageNotFound from '../../components/commonComponents/PageNotFound';
import { defineDefaultNavigation } from '../utils/helpers';
import About from '../../components/mainPageView/MainView/About';
import LevelWrapper from '../../components/mainPageView/MainView/tasks';
import {
  quickCountLevelRules,
  quickCountLevelsConfig,
} from '@common/gameConfigs/quickCount.config';
import {
  numberHuntingLevelRules,
  numberHuntingLevelsConfig,
} from '@common/gameConfigs/numberHunting.config';
import PlayNumberHunting from '../../components/mainPageView/MainView/tasks/NumberHunt';
import LandingPageEditor from "../../components/mainPageView/MainView/LandingPages/Editor";

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
  pagesEditor: '/editor',
  login: '/login',
  createAccount: '/createAccount',
  userManagement: '/userManagement',
  play: '/play',
  numberHunt: '/numberHunt',
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
            element: (
              <LevelWrapper
                levelConfig={quickCountLevelsConfig}
                title={'quickCount'}
                levelRules={quickCountLevelRules}
              />
            ),
            child: [
              {
                path: Routes.play,
                element: <PlayQuickCount />,
              },
            ],
          },
          {
            path: Routes.numberHunt,
            element: (
              <LevelWrapper
                levelConfig={numberHuntingLevelsConfig}
                title={'numberHunt'}
                levelRules={numberHuntingLevelRules}
              />
            ),
            child: [
              {
                path: Routes.play,
                element: <PlayNumberHunting />,
                child: [],
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
        element: <About />,
      },
      {
        path: Routes.editingPages,
        element: <LandingPages />,
      },
      {
        path: Routes.editingPages,
        element: <LandingPages />,
      },
      {
        path: ':id',
        element: <LandingPageEditor />,
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
