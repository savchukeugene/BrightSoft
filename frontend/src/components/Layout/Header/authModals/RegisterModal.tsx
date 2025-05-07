import { Button, Divider, Flex, Form, FormInstance, Input, Modal } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import React, { FC } from 'react';
import { messages } from '@common/constants/messages';
import { IRegisterUserDTOOut } from '../../../../types/userTypes';

interface IRegisterModal {
  setAuthState: React.Dispatch<React.SetStateAction<'' | 'login' | 'register'>>;
  handleOnUserRegister: (values: IRegisterUserDTOOut) => void;
  form: FormInstance;
}

export const RegisterModal: FC<IRegisterModal> = ({
  setAuthState,
  handleOnUserRegister,
  form,
}) => {
  return (
    <Modal
      open
      footer={
        <Flex justify={'space-between'}>
          <Flex gap={8}>
            <Button onClick={() => setAuthState('')}>{messages.button.back}</Button>
            <Button
              onClick={() => form.submit()}
              type={'primary'}
            >
              {messages.button.create}
            </Button>
          </Flex>
          <Button>Войти</Button>
        </Flex>
      }
      onCancel={() => setAuthState('')}
    >
      <h1>Создать аккаунт</h1>
      <Form
        layout={'vertical'}
        onFinish={handleOnUserRegister}
        form={form}
      >
        <FormItem
          label={'Придумайте логин'}
          rules={[{ required: true }]}
          name={'name'}
        >
          <Input></Input>
        </FormItem>
        <FormItem
          label={'Введите ваш email'}
          rules={[{ required: true }]}
          name={'email'}
        >
          <Input></Input>
        </FormItem>
        <FormItem
          label={'Придумайте пароль'}
          rules={[{ required: true }]}
          name={'password'}
        >
          <Input></Input>
        </FormItem>
        <FormItem
          label={'Повторите пароль'}
          rules={[{ required: true }]}
          name={'passwordRepeat'}
        >
          <Input></Input>
        </FormItem>
        <Divider />
        <FormItem
          label={'Введите ваше имя'}
          name={'firstName'}
        >
          <Input></Input>
        </FormItem>
        <FormItem
          label={'Введите вашу фамилию'}
          name={'secondName'}
        >
          <Input></Input>
        </FormItem>
        <FormItem
          label={'Введите ваше отчество'}
          name={'fatherName'}
        >
          <Input></Input>
        </FormItem>
      </Form>
    </Modal>
  );
};
