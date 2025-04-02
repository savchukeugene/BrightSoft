import React, { FC } from 'react';
import { messages } from '../../../../common/constants/messages';
import TextArea from 'antd/es/input/TextArea';
import { Button, Form } from 'antd';
import s from './styles.module.scss';
import FormItem from 'antd/es/form/FormItem';

const SupportPage: FC = (): React.JSX.Element => {
  return (
    <div className={s.supportPage}>
      <h1 className={s.supportTitle}>{messages.view.main.supportPage.title}</h1>
      <h4>{messages.view.main.supportPage.subTitle}</h4>
      <Form onFinish={(): void => {}}>
        <FormItem
          name={'userMessage'}
          rules={[
            { required: true, message: messages.view.main.supportPage.validateMessage },
          ]}
        >
          <TextArea
            placeholder={messages.view.main.supportPage.textAreaPlaceholder}
            className={s.supportTextarea}
          />
        </FormItem>
        <FormItem>
          <Button
            htmlType={'submit'}
            className={s.supportButton}
          >
            {messages.button.send}
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default SupportPage;
