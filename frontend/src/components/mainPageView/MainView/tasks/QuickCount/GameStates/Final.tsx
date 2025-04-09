import s from '../styles.module.scss';
import { Button, Form, Input } from 'antd';
import { FC, useState } from 'react';
import { messages } from '@common/constants/messages';
import DecideAnswer from '../AnswerComponents/DecideAnswer';
import { scoring } from '../actions';
import { useUserStore } from '../../../../../../store/userStore';

interface IUserAnswer {
  userAnswer: string;
}

const Final: FC<{ result: number }> = ({ result }) => {
  const { user, setStars } = useUserStore();
  const [isAnswerRight, setIsAnswerRight] = useState<boolean | null>(null);
  const onAnswer = async (values: IUserAnswer) => {
    const isResultCorrect = result === parseInt(values.userAnswer);
    const { data } = await scoring(isResultCorrect, user ?? '');
    setStars(data);
    setIsAnswerRight(isResultCorrect);
  };

  return isAnswerRight !== null ? (
    <DecideAnswer isAnswerRight={isAnswerRight} />
  ) : (
    <>
      <div
        className={s.gameText}
        style={{ fontSize: '25px' }}
      >
        {messages.view.main.tasks.quickCount.play.timeOut}
      </div>
      <Form onFinish={onAnswer}>
        <Form.Item name={'userAnswer'}>
          <Input
            placeholder={messages.view.main.tasks.quickCount.play.answerPlaceholder}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType={'submit'}>{messages.button.check}</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Final;
