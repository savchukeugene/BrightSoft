import React, { FC } from 'react';
import { Button } from 'antd';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ROOTS } from '../../../common/constants/roots.tsx';
import s from './styles.module.scss';
import { messages } from '../../../common/constants/messages.ts';

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
              onClick={() => navigate(ROOTS.mainPage + ROOTS.user + ROOTS.grade)}
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
