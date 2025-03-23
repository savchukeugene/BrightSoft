import s from '../../mainPageView/styles.module.scss';
import { Menu } from 'antd';
import { LEFT_SIDE_OPTIONS_LIST } from '../../../common/constants/headerConfig/config.tsx';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../store/userStore.tsx';

const LayoutSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { role } = useUserStore();

  return (
    <Sider
      className={s.sideBar}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        theme={'dark'}
        defaultSelectedKeys={['user/grade']}
        mode="inline"
        items={LEFT_SIDE_OPTIONS_LIST[role]}
        onClick={(value) =>
          navigate({
            pathname: `${value.key}`,
          })
        }
      />
    </Sider>
  );
};

export default LayoutSider;
