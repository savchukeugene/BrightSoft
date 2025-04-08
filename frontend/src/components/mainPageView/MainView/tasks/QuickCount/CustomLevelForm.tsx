import s from './styles.module.scss';
import { messages } from '../../../../../common/constants/messages';
import FormItem from 'antd/es/form/FormItem';
import { Button, Form, FormInstance, Input } from 'antd';
import { FC } from 'react';

const CustomLevelForm: FC<{ form: FormInstance<any> }> = ({ form }) => {
  return (
    <Form
      className={s.quickCountForm}
      form={form}
      onFinish={(values) => console.log(values)}
    >
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
