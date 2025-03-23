import { Menu } from 'antd';
import { HEADER_OPTIONS } from '../../../common/constants/headerConfig/config.tsx';
import Navigation from '../../commonComponents/Navigation';
import { Header } from 'antd/lib/layout/layout';
import { useLocation, useNavigate } from 'react-router-dom';

const LayoutHeader = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // const { role } = useUserStore();
  const splitPathname: string[] = pathname.split('/');

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        items={HEADER_OPTIONS[pathname.split('/')[2]]}
        style={{ flex: 1, minWidth: 0 }}
        defaultSelectedKeys={['grade']}
        onClick={(value) =>
          navigate({
            pathname: pathname.replace(
              splitPathname[splitPathname.length - 1],
              value.key,
            ),
          })
        }
      />
      <Navigation />
    </Header>
  );
};

export default LayoutHeader;
