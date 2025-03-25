import s from '../styles.module.scss';
import { messages } from '../../../../../../../common/constants/messages.ts';
import { Button } from 'antd';
import { FC } from 'react';
const PreparingForAGame: FC<{
  handleStart: () => void;
}> = ({ handleStart }) => {
  return (
    <>
      <h1 className={s.beforeGame}>?</h1>
      <Button onClick={handleStart}>
        {messages.view.main.tasks.quickCount.play.start}
      </Button>
    </>
  );
};

export default PreparingForAGame;
