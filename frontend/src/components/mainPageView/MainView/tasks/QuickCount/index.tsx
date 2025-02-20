import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { messages } from '../../../../../common/constants/messages.ts';

import s from './styles.module.scss';

const QuickCount: FC = (): JSX.Element => {
  return (
    <div>
      <h1>{messages.view.main.tasks.quickCount.title}</h1>
      <section>
        <h1> {messages.view.main.tasks.quickCount.formTitle}</h1>
        <Form className={s.quickCountForm}>
          <FormItem
            name={'duration'}
            label={messages.view.main.tasks.quickCount.duration}
            rules={[
              {
                required: true,
                message:
                  messages.view.main.tasks.quickCount.validateMessage.validateDuration,
              },
            ]}
          >
            <Input />
          </FormItem>
          <FormItem
            name={'period'}
            label={messages.view.main.tasks.quickCount.period}
            rules={[
              {
                required: true,
                message:
                  messages.view.main.tasks.quickCount.validateMessage.validatePeriod,
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
                message:
                  messages.view.main.tasks.quickCount.validateMessage.validateRange,
              },
            ]}
          >
            <Input />
          </FormItem>
          <FormItem>
            <Button htmlType={'submit'}>{messages.button.continue}</Button>
          </FormItem>
        </Form>
      </section>
    </div>
  );
};

export default QuickCount;
