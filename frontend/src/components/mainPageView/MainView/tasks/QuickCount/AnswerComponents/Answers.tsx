import s from './styles.module.scss';
import { messages } from '@common/constants/messages';
import { useGameStore } from '../../../../../../store/gameStore';
import { isNil } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@common/constants/routes';

export const RightAnswer = () => {
  const { gameConfig } = useGameStore();
  const navigate = useNavigate();
  if (isNil(gameConfig)) {
    navigate({
      pathname: Routes.mainPage,
    });
    return null;
  }
  return (
    <div className={s.answer_field}>
      <div className={s.answer_emoji}>{`+${gameConfig.starsAmount}`}</div>
      <div className={s.answer_description}>
        {messages.view.main.tasks.quickCount.play.rightAnswerDescription}
      </div>
    </div>
  );
};

export const WrongAnswer = () => {
  return (
    <div className={s.answer_field}>
      <div className={s.answer_emoji}>0</div>
      <div className={s.answer_description}>
        {messages.view.main.tasks.quickCount.play.wrongAnswerDescription}
      </div>
    </div>
  );
};
