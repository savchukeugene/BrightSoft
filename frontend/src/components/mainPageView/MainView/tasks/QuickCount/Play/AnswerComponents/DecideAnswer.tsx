import { FC } from 'react';
import { RightAnswer, WrongAnswer } from './Answers';

const DecideAnswer: FC<{ isAnswerRight: boolean }> = ({ isAnswerRight }): JSX.Element =>
  isAnswerRight ? <RightAnswer /> : <WrongAnswer />;

export default DecideAnswer;
