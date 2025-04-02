import s from '../styles.module.scss';
import { Button, Form, Input } from 'antd';
import { FC, useState } from 'react';
import { messages } from '../../../../../../../common/constants/messages';
import DecideAnswer from '../AnswerComponents/DecideAnswer';
import { accruePoints, takePointsAway } from '../actions';

interface IUserAnswer {
  userAnswer: string;
}

const Final: FC<{ result: number }> = ({ result }) => {
  const [isAnswerRight, setIsAnswerRight] = useState<boolean | null>(null);
  const onAnswer = (values: IUserAnswer) => {
    const isResultCorrect = result === parseInt(values.userAnswer);
    isResultCorrect ? accruePoints() : takePointsAway();
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
