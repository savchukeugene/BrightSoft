import { Button, Form, Input, Modal } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import React, { FC } from 'react';
import { messages } from '@common/constants/messages';

interface ILoginModal {
  setAuthState: React.Dispatch<React.SetStateAction<'' | 'login' | 'register'>>;
}

export const LoginModal: FC<ILoginModal> = ({ setAuthState }) => {
  return (
    <Modal
      open
      footer={
        <>
          <Button onClick={() => setAuthState('')}>{messages.button.back}</Button>
          <Button type={'primary'}>{messages.button.login}</Button>
          <Button
            type={'primary'}
            onClick={() => setAuthState('register')}
          >
            {messages.button.create}
          </Button>
        </>
      }
    >
      <h1>{messages.button.login}</h1>
      <Form
        layout={'vertical'}
        onFinish={() => {}}
      >
        <FormItem
          label={'Введите логин или email'}
          rules={[{ required: true }]}
          name={'userName'}
        >
          <Input></Input>
        </FormItem>
        <FormItem
          label={'Введите пароль'}
          rules={[{ required: true }]}
          name={'password'}
        >
          <Input></Input>
        </FormItem>
      </Form>
    </Modal>
  );
};
