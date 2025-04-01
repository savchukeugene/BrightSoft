import { FC } from 'react';
import { messages } from '../../../../../common/constants/messages.ts';
import { quickCountLevelsGenerator } from '../../../../../common/utils/generatotrs.tsx';
import { levelsConfig } from './config.tsx';

import s from './styles.module.scss';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ROOTS } from '../../../../../common/constants/roots.tsx';
import { GamesLevelType } from '../../../../../types/commonTypes.ts';

const QuickCount: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const handleLevelChoose = (param: GamesLevelType): void => {
    const newSearchParams: URLSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('level', param);
    navigate({
      pathname: pathname.concat(ROOTS.play),
      search: newSearchParams.toString(),
    });
  };
  return (
    <main>
      <h1 className={'pageTitle'}>{messages.view.main.tasks.quickCount.title}</h1>
      {pathname.includes(ROOTS.play) ? (
        <Outlet />
      ) : (
        <section className={s.quickCountLevels}>
          {quickCountLevelsGenerator(levelsConfig, handleLevelChoose)}
          {/*<Form className={s.quickCountForm}>*/}
          {/*  <h1> {messages.view.main.tasks.quickCount.formTitle}</h1>*/}
          {/*  <FormItem*/}
          {/*    name={'duration'}*/}
          {/*    label={messages.view.main.tasks.quickCount.duration}*/}
          {/*    rules={[*/}
          {/*      {*/}
          {/*        required: true,*/}
          {/*        message: messages.view.main.tasks.quickCount.validateMessage(`\${label}`),*/}
          {/*      },*/}
          {/*    ]}*/}
          {/*  >*/}
          {/*    <Input className={s.input} />*/}
          {/*  </FormItem>*/}
          {/*  <FormItem*/}
          {/*    name={'period'}*/}
          {/*    label={messages.view.main.tasks.quickCount.period}*/}
          {/*    rules={[*/}
          {/*      {*/}
          {/*        required: true,*/}
          {/*        message: messages.view.main.tasks.quickCount.validateMessage(`\${label}`),*/}
          {/*      },*/}
          {/*    ]}*/}
          {/*  >*/}
          {/*    <Input />*/}
          {/*  </FormItem>*/}
          {/*  <FormItem*/}
          {/*    name={'range'}*/}
          {/*    label={messages.view.main.tasks.quickCount.range}*/}
          {/*    rules={[*/}
          {/*      {*/}
          {/*        required: true,*/}
          {/*        message: messages.view.main.tasks.quickCount.validateMessage(`\${label}`),*/}
          {/*      },*/}
          {/*    ]}*/}
          {/*  >*/}
          {/*    <Input />*/}
          {/*    <Button />*/}
          {/*  </FormItem>*/}
          {/*  <FormItem>*/}
          {/*    <Button*/}
          {/*      className={s.continueButton}*/}
          {/*      htmlType={'submit'}*/}
          {/*    >*/}
          {/*      {messages.button.continue}*/}
          {/*    </Button>*/}
          {/*  </FormItem>*/}
          {/*</Form>*/}
        </section>
      )}
    </main>
  );
};

export default QuickCount;
