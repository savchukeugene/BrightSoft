import { FC } from 'react';
import { IRules } from '../index';

const LevelRules: FC<{ levelRules: IRules | null }> = ({ levelRules }) => {
  return (
    <>
      <h1>{levelRules?.title}</h1>
      {levelRules?.descriptions.map((description: string) => (
        <>
          <h3>{description}</h3>
          <br />
        </>
      ))}
    </>
  );
};

export default LevelRules;
