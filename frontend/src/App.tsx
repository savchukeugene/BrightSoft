import { BrowserRouter, Routes } from 'react-router-dom';
import { IUserStore, useUserStore } from './store/userStore';
import { routesGenerator } from './common/utils/generatotrs';
import {
  authorizedUserRoutesConfig,
  logoutUserRoutesConfig,
} from './common/constants/routes';

function App() {
  const user: IUserStore = useUserStore();
  const { role } = useUserStore();

  return (
    <BrowserRouter>
      <Routes>
        {/**
         * Женя, функция снизу - это генератор рутов.
         *
         * Если надо описать новый путь - заходи в конфиг authorizedUserRoutesConfig и добавляй новый объект в массив, в поле path укажи путь.
         * Если надо дочерний рут описать - добавляй поле child и аналогично описывай вложенный элемент.
         * При необходимости смотри в интерфейс IRoutesGenerator, которым типизирован один из конфигов. Там описаны поля
         */}
        {routesGenerator(
          user.user !== null ? authorizedUserRoutesConfig(role) : logoutUserRoutesConfig,
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
