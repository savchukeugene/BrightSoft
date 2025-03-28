import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Authorization/Login';
import CreateAccount from './components/Authorization/CreateAccount';
import MainPage from './components/mainPageView';
import Timetable from './components/mainPageView/MainView/User/Timetable';
import Grade from './components/mainPageView/MainView/User/Grade';
import QuickCount from './components/mainPageView/MainView/tasks/QuickCount';
import { IUserStore, useUserStore } from './store/userStore.tsx';
import PageNotFound from './components/commonComponents/PageNotFound';
import { ROOTS } from './common/constants/roots.ts';
import SupportPage from './components/mainPageView/MainView/SupportPage';
import { routeGenerator } from './common/utils/generatotrs.tsx';
import LandingPages from './components/LandingPages';
import UserManagement from './components/mainPageView/MainView/userManagement';
import { defineDefaultNavigation } from './common/utils/helpers.tsx';
import Play from './components/mainPageView/MainView/tasks/QuickCount/Play';

function App() {
  const user: IUserStore = useUserStore();
  const { role } = useUserStore();

  return (
    <BrowserRouter>
      <Routes>
        {user.user !== null ? (
          <>
            <Route
              path={ROOTS.mainPage}
              element={<MainPage />}
            >
              <Route path={routeGenerator(ROOTS.mainPage, ROOTS.user)}>
                <Route
                  path={routeGenerator(ROOTS.mainPage, ROOTS.user, ROOTS.timetable)}
                  element={<Timetable />}
                />
                <Route
                  path={routeGenerator(ROOTS.mainPage, ROOTS.user, ROOTS.grade)}
                  element={<Grade />}
                />
              </Route>

              <Route path={routeGenerator(ROOTS.mainPage, ROOTS.tasks)}>
                <Route
                  path={routeGenerator(ROOTS.mainPage, ROOTS.tasks, ROOTS.quickCount)}
                  element={<QuickCount />}
                >
                  <Route
                    path={routeGenerator(
                      ROOTS.mainPage,
                      ROOTS.tasks,
                      ROOTS.quickCount,
                      ROOTS.play,
                    )}
                    element={<Play />}
                  />
                </Route>
              </Route>

              <Route
                path={routeGenerator(ROOTS.mainPage, ROOTS.support)}
                element={<SupportPage />}
              />
              <Route
                path={routeGenerator(ROOTS.mainPage, ROOTS.about)}
                element={<SupportPage />}
              />
              <Route
                path={routeGenerator(ROOTS.mainPage, ROOTS.editingPages)}
                element={<LandingPages />}
              />
              <Route
                path={'*'}
                element={<PageNotFound />}
              />
              <Route
                path={routeGenerator(ROOTS.mainPage, ROOTS.userManagement)}
                element={<UserManagement role={role} />}
              />
            </Route>
            <Route
              path={'*'}
              element={<Navigate to={defineDefaultNavigation(role)} />}
            />
          </>
        ) : (
          <>
            <Route
              path={ROOTS.login}
              element={<Login />}
            />
            <Route
              path={ROOTS.createAccount}
              element={<CreateAccount />}
            />
            <Route
              path={'*'}
              element={
                <Navigate
                  to={ROOTS.login}
                  replace={true}
                />
              }
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
