import s from '../styles.module.scss';
import { Button, Form, Input } from 'antd';
import { FC } from 'react';
import { messages } from '../../../../../../../common/constants/messages.ts';

interface IUserAnswer {
  userAnswer: string;
}

const Final: FC<{ result: number }> = ({ result }) => {
  const onAnswer = (values: IUserAnswer) => {
    if (parseInt(values.userAnswer) === result) {
      alert('Верно');
    } else {
      alert('Не верно');
    }
  };

  return (
    <>
      <div
        className={s.gameText}
        style={{ fontSize: '25px' }}
      >
        {'Время истекло. Пожалуйста, введите ваш ответ в поле ниже:'}
      </div>
      <Form onFinish={onAnswer}>
        <Form.Item name={'userAnswer'}>
          <Input placeholder={'Ваш ответ'} />
        </Form.Item>
        <Form.Item>
          <Button htmlType={'submit'}>{messages.button.check}</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Final;
