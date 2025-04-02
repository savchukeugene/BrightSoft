import s from './styles.module.scss';
import { messages } from '../../../../../../../common/constants/messages.ts';

export const RightAnswer = () => {
  return (
    <div className={s.answer_field}>
      <div className={s.answer_emoji}>😀</div>
      <div className={s.answer_description}>
        {messages.view.main.tasks.quickCount.play.rightAnswerDescription}
      </div>
    </div>
  );
};

export const WrongAnswer = () => (
  <div className={s.answer_field}>
    <div className={s.answer_emoji}>😡</div>
    <div className={s.answer_description}>
      {messages.view.main.tasks.quickCount.play.wrongAnswerDescription}
    </div>
  </div>
);
