import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { IUserStore, useUserStore } from './store/userStore';
import { routesGenerator } from '@common/utils/generatotrs';
import {
  authorizedUserRoutesConfig,
  logoutUserRoutesConfig,
} from '@common/constants/routes';

function App() {
  const user: IUserStore = useUserStore();
  const { role } = useUserStore();

  return (
    <BrowserRouter>
      <Routes>
        {routesGenerator(
          user.user !== null ? authorizedUserRoutesConfig(role) : logoutUserRoutesConfig,
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
