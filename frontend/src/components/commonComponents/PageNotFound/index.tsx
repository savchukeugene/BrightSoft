import React, { FC } from 'react';
import { Button } from 'antd';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import s from './styles.module.scss';
import { messages } from '../../../common/constants/messages';
import { Routes } from '../../../common/constants/routes';

const PageNotFound: FC = (): React.JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <div></div>
      <div className={s.pageNotFound}>
        <section className={s.pageNotFoundInside}>
          <h1 style={{ fontSize: '70px' }}>{messages.view.pageNotFound.title}</h1>
          <div className={s.description}>
            <h1 style={{ fontSize: '20px' }}>{messages.view.pageNotFound.description}</h1>
            <Button
              onClick={() => navigate(Routes.mainPage + Routes.user + Routes.grade)}
              style={{
                width: '15%',
              }}
            >
              {messages.button.goMainPage}
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageNotFound;
