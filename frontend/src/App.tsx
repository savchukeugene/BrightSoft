import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import MainPage from "./components/mainPageView";
import Timetable from "./components/mainPageView/MainView/User/Timetable";
import Grade from "./components/mainPageView/MainView/User/Grade";
import QuickCount from "./components/mainPageView/MainView/tasks/QuickCount";
import {IUserStore, useUserStore} from "./store/userStore.tsx";
import PageNotFound from "./components/Layout/PageNotFound";

function App() {
    const user: IUserStore = useUserStore()

    return (
        <BrowserRouter>
            <Routes>
                {user.user !== null ? (
                    <>
                        <Route
                            path={'/mainPage'}
                            element={<MainPage/>}
                        >
                            <Route
                                path={'/mainPage/user'}
                            >
                                <Route
                                    path={'/mainPage/user/timetable'}
                                    element={<Timetable/>}
                                />
                                <Route
                                    path={'/mainPage/user/grade'}
                                    element={<Grade/>}
                                />
                            </Route>
                            <Route
                                path={'/mainPage/tasks'}
                            >
                                <Route
                                    path={'/mainPage/tasks/quickCount'}
                                    element={<QuickCount/>}
                                />
                            </Route>
                        </Route>
                        <Route
                            path={'*'}
                            element={
                                <PageNotFound />
                            }
                        />
                    </>
                ) : (
                    <>
                        <Route
                            path={'/login'}
                            element={<Login/>}
                        />
                        <Route
                            path={'/createAccount'}
                            element={<CreateAccount/>}
                        />
                        <Route
                            path={'*'}
                            element={
                                <Navigate
                                    to={'/login'}
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
