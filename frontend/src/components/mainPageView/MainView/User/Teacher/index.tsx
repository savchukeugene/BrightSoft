import { CheckboxGroupProps } from 'antd/es/checkbox';
import { Radio, RadioChangeEvent } from 'antd';

import s from './styles.module.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { routeGenerator } from '@common/utils/generatotrs';
import { Routes } from '@common/constants/routes';
import { useUserStore } from '../../../../../store/userStore';
import { useEffect } from 'react';

export const Teacher = () => {
  const { pathname } = useLocation();
  const { role } = useUserStore();
  const navigate = useNavigate();
  const defaultSelectedOption = pathname.split('/')[4];
  const options: CheckboxGroupProps<string>['options'] = [
    { label: 'Группы', value: 'groups' },
    { label: 'Заявки', value: 'applications' },
    { label: 'Курсы', value: 'courses' },
  ];
  useEffect(() => {
    if (pathname.split('/').length !== 5) {
      navigate(pathname + Routes.groups);
    }
  }, []);

  const handleNavigate = (value: RadioChangeEvent) => {
    navigate({
      pathname: routeGenerator(
        Routes.mainPage,
        Routes.user,
        role === 'administrator' ? Routes.admin : Routes.teacher,
        `/${value.target.value}`,
      ),
    });
  };
  return (
    <main>
      <h1>Панель преподавателя</h1>
      <div className={s.radioZone}>
        <Radio.Group
          block
          options={options}
          defaultValue={defaultSelectedOption}
          optionType="button"
          buttonStyle="solid"
          onChange={handleNavigate}
        />
      </div>
      <div className={s.childContent}>
        <Outlet />
      </div>
    </main>
  );
};
