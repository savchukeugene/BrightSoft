import s from '../../mainPageView/styles.module.scss';
import { StarFilled } from '@ant-design/icons';
import { logout } from '../../Authorization/Login/actions';
import { useUserStore } from '../../../store/userStore';
import { FC } from 'react';

const Navigation: FC = (): JSX.Element => {
  const { role, logoutUser, stars } = useUserStore();
  return (
    <nav className={s.nav}>
      {role === 'user' && (
        <div className={s.stars}>
          <StarFilled className={s.starIcon} />
          <h3>{stars}</h3>
        </div>
      )}
      <div
        onClick={() => logout(logoutUser)}
        className={s.logout}
      />
    </nav>
  );
};

export default Navigation;
