import s from '../styles.module.scss';
import { generateCells } from '@common/utils/generatotrs';
import { FC, useState } from 'react';
import { GamesLevelType } from '../../../../../../types/games';
import { useSearchParams } from 'react-router-dom';
import { numberHuntingConfig } from '../config';
import { isNil } from 'lodash';
import { ProgressBar } from '../../commonTasksComponents/ProgressBar';
import { notification } from 'antd';

export const NumberHuntingProgress: FC = () => {
  const [searchParams] = useSearchParams();
  const level = searchParams.get('level') as GamesLevelType;
  const levelInfo = numberHuntingConfig[level];
  const [chosenNumber, setChosenNumber] = useState<number | null>(0);

  if (isNil(levelInfo)) {
    throw new Error('');
  }

  if (isNil(chosenNumber)) {
    notification.error({
      message: 'Вы провалили задание',
    });
  }

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const eventElement: HTMLTextAreaElement = e.target as HTMLTextAreaElement;
    const eventNumber: number = parseInt(eventElement.textContent ?? '0');
    setChosenNumber((prevState) => {
      if (isNil(prevState)) {
        notification.error({
          message: 'Произошла ошибка',
        });
        return null;
      }
      if (eventNumber - prevState === 1) {
        return eventNumber;
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div
        className={s.cellZone}
        style={{ '--grid-size': levelInfo.dimension } as React.CSSProperties}
      >
        {generateCells(levelInfo, onClickHandler)}
      </div>
      <ProgressBar duration={levelInfo.duration} />
    </>
  );
};
