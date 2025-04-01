import { BrowserRouter, Routes } from 'react-router-dom';
import { IUserStore, useUserStore } from './store/userStore.tsx';
import {
  authorizedUserRoutesConfig,
  logoutUserRoutesConfig,
} from './common/constants/roots.tsx';
import { routesGenerator } from './common/utils/generatotrs.tsx';

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
