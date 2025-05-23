import s from '../styles.module.scss';
import { messages } from '@common/constants/messages';
import { Button } from 'antd';
import { FC } from 'react';

const PreparingForAGame: FC<{
  handleStart: () => void;
}> = ({ handleStart }) => {
  return (
    <>
      <h1 className={s.beforeGame}>?</h1>
      <Button
        className={s.startButton}
        onClick={handleStart}
      >
        {messages.view.main.tasks.quickCount.play.start}
      </Button>
    </>
  );
};

export default PreparingForAGame;
