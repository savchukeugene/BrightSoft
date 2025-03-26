import s from '../styles.module.scss';
import { Button, Form, Input } from 'antd';
import { FC, useState } from 'react';
import { messages } from '../../../../../../../common/constants/messages.ts';

interface IUserAnswer {
  userAnswer: string;
}

const RightAnswer = () => <h1>Right</h1>;
const WrongAnswer = () => <h1>Wrong</h1>;

const Final: FC<{ result: number }> = ({ result }) => {
  const [isAnswerRight, setIsAnswerRight] = useState<boolean | null>(null);
  const onAnswer = (values: IUserAnswer) => {
    setIsAnswerRight(result === parseInt(values.userAnswer));
  };

  return isAnswerRight !== null ? (
    isAnswerRight ? (
      <RightAnswer />
    ) : (
      <WrongAnswer />
    )
  ) : (
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
