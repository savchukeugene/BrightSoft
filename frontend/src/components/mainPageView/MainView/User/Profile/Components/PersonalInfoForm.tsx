import s from '../styles.module.scss';
import { Button, Form, FormInstance, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { IUserRoles } from '../../../../../../store/userStore';
import React, { FC } from 'react';
import { IUserData } from '../../../../../../types/commonTypes';
import { IUpdateUserInfoDtoOut } from '../../../../../../types/userTypes';

interface IPersonalInfoForm {
  form: FormInstance;
  disabled: boolean;
  role: IUserRoles;
  userInfo: IUserData | undefined;
  updateUser: (values: IUpdateUserInfoDtoOut) => void;

  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PersonalInfoForm: FC<IPersonalInfoForm> = ({
  form,
  disabled,
  role,
  userInfo,
  updateUser,
  setDisabled,
}) => {
  return (
    <section
      className={`${s.infoBlock} ${role !== 'administrator' ? s.infoBlockFull : ''}`}
    >
      <h2>Личная информация</h2>
      <Form
        form={form}
        className={s.form}
        disabled={disabled}
        onFinish={updateUser}
        initialValues={userInfo}
      >
        <FormItem
          label="Фамилия"
          name="secondName"
        >
          {disabled ? (
            <span>{form.getFieldValue('secondName') || 'Не указано'}</span>
          ) : (
            <Input placeholder={userInfo?.secondName || 'Введите фамилию'} />
          )}
        </FormItem>
        <FormItem
          label="Имя"
          name="firstName"
        >
          {disabled ? (
            <span>{form.getFieldValue('firstName') || 'Не указано'}</span>
          ) : (
            <Input placeholder={userInfo?.firstName || 'Введите имя'} />
          )}
        </FormItem>
        <FormItem
          label="Отчество"
          name="fatherName"
        >
          {disabled ? (
            <span>{form.getFieldValue('fatherName') || 'Не указано'}</span>
          ) : (
            <Input placeholder={userInfo?.fatherName || 'Введите отчество'} />
          )}
        </FormItem>
        <FormItem
          label="Имя пользователя"
          name="userName"
        >
          {disabled ? (
            <span>{form.getFieldValue('userName') || 'Не указано'}</span>
          ) : (
            <Input placeholder={userInfo?.userName || 'Введите имя пользователя'} />
          )}
        </FormItem>
        <FormItem
          label="Email"
          name="email"
        >
          {disabled ? (
            <span>{form.getFieldValue('email') || 'Не указано'}</span>
          ) : (
            <Input placeholder={userInfo?.email || 'Введите email'} />
          )}
        </FormItem>
        <FormItem
          label="Пароль"
          name="password"
        >
          {disabled ? (
            <span>******</span>
          ) : (
            <Input.Password placeholder="Введите новый пароль" />
          )}
        </FormItem>
        {!disabled && (
          <div className={s.formButtons}>
            <Button
              type="primary"
              htmlType="submit"
              className={s.saveButton}
            >
              Сохранить
            </Button>
            <Button
              onClick={() => setDisabled(true)}
              className={s.cancelButton}
            >
              Отменить
            </Button>
          </div>
        )}
      </Form>
      {disabled && (
        <div className={s.formButtons}>
          <Button
            type="primary"
            onClick={() => setDisabled(false)}
            className={s.editButton}
          >
            Редактировать
          </Button>
        </div>
      )}
    </section>
  );
};
