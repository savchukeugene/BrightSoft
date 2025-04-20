import clockEnd from '../../../../../../images/svg/clock-end.svg';
import clockStart from '../../../../../../images/svg/clock-start.svg';
import { FC } from 'react';
import s from '../../QuickCount/styles.module.scss';
export const ProgressBar: FC<{ duration: number }> = ({ duration }) => {
  return (
    <div className={s.progressBar}>
      <img
        src={clockEnd}
        alt={'clock end'}
        className={s.sideIcons}
      />
      <div className={s.progressBar_zone}>
        <div
          className={s.progressBar_item}
          style={{ animationDuration: `${duration}s` }}
        />
      </div>
      <img
        src={clockStart}
        alt={'clock start'}
        className={s.sideIcons}
      />
    </div>
  );
};
