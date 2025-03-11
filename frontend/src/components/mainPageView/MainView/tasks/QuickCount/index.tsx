import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { messages } from '../../../../../common/constants/messages.ts';

import s from './styles.module.scss';

const QuickCount: FC = (): JSX.Element => {
  return (
    <div>
      <h1 className={'pageTitle'}>{messages.view.main.tasks.quickCount.title}</h1>
      <section>
        <Form className={s.quickCountForm}>
          <h1> {messages.view.main.tasks.quickCount.formTitle}</h1>
          <FormItem
            name={'duration'}
            label={messages.view.main.tasks.quickCount.duration}
            rules={[
              {
                required: true,
                message: messages.view.main.tasks.quickCount.validateMessage(`\${label}`),
              },
            ]}
          >
            <Input className={s.input} />
          </FormItem>
          <FormItem
            name={'period'}
            label={messages.view.main.tasks.quickCount.period}
            rules={[
              {
                required: true,
                message: messages.view.main.tasks.quickCount.validateMessage(`\${label}`),
              },
            ]}
          >
            <Input />
          </FormItem>
          <FormItem
            name={'range'}
            label={messages.view.main.tasks.quickCount.range}
            rules={[
              {
                required: true,
                message: messages.view.main.tasks.quickCount.validateMessage(`\${label}`),
              },
            ]}
          >
            <Input />
            <Button />
          </FormItem>
          <FormItem>
            <Button
              className={s.continueButton}
              htmlType={'submit'}
            >
              {messages.button.continue}
            </Button>
          </FormItem>
        </Form>
      </section>
    </div>
  );
};

export default QuickCount;
