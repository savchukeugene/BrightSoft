import s from '../styles.module.scss';
import { messages } from '@common/constants/messages';
import FormItem from 'antd/es/form/FormItem';
import { Button, Form, FormInstance, Input, notification } from 'antd';
import { FC } from 'react';
import { IGameParams } from '../../../../../types/commonTypes';

interface ICustomLevelValues {
  duration: string;
  end: string;
  period: string;
  start: string;
}

const CustomLevelForm: FC<{
  form: FormInstance;
  handler: (customParams: IGameParams) => void;
}> = ({ form, handler }) => {
  const onFormFinish = (values: ICustomLevelValues) => {
    if (Number(values.start) - Number(values.end) === 0) {
      return notification.warning({
        message: messages.notification.warn.payAttention,
        description: messages.notification.warn.difference,
      });
    }
    if (Number(values.start) > Number(values.end)) {
      return notification.warning({
        message: messages.notification.warn.payAttention,
        description: messages.notification.warn.firstMustBeLess,
      });
    }
    const newValues: IGameParams = {
      duration: Number(values.duration),
      changePeriod: Number(values.period),
      range: [Number(values.start), Number(values.end)],
    };

    handler(newValues);
  };

  return (
    <Form
      className={s.quickCountForm}
      form={form}
      onFinish={onFormFinish}
    >
      <h1>{messages.view.main.tasks.quickCount.formTitle}</h1>
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
        <Input />
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
        label={messages.view.main.tasks.quickCount.range}
        rules={[{ required: true }]}
      >
        <FormItem
          name={'start'}
          rules={[
            {
              required: true,
              message: '',
            },
          ]}
          style={{ display: 'inline-block', marginRight: '8px' }}
        >
          <Input />
        </FormItem>
        <FormItem
          name={'end'}
          rules={[
            {
              required: true,
              message: '',
            },
          ]}
          style={{ display: 'inline-block' }}
        >
          <Input />
        </FormItem>
      </FormItem>
      <Button
        className={s.continueButton}
        htmlType={'submit'}
      >
        {messages.button.continue}
      </Button>
    </Form>
  );
};

export default CustomLevelForm;
