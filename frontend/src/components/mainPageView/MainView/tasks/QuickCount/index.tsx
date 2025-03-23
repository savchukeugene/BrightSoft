import { FC } from 'react';
import { messages } from '../../../../../common/constants/messages.ts';
import { quickCountLevelsGenerator } from '../../../../../common/utils/generatotrs.tsx';
import { levelsConfig } from './config.tsx';

import s from './styles.module.scss';

const QuickCount: FC = (): JSX.Element => {
  console.log(`${100 / levelsConfig.length - 2}%`);
  return (
    <div>
      <h1 className={'pageTitle'}>{messages.view.main.tasks.quickCount.title}</h1>
      <section className={s.quickCountLevels}>
        {quickCountLevelsGenerator(levelsConfig)}
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
    </div>
  );
};

export default QuickCount;
