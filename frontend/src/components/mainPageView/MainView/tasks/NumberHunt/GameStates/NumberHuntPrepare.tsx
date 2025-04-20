import s from '../../QuickCount/styles.module.scss';
import { Button } from 'antd';
import { messages } from '@common/constants/messages';
import { FC } from 'react';

export const NumberHuntPrepare: FC<{ handleStart: () => void }> = ({ handleStart }) => {
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
