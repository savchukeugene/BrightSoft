import { FC } from 'react';
import { messages } from '../../../../../common/constants/messages.ts';

const Timetable: FC = (): JSX.Element => {
  return (
    <section>
      <h1 className={'pageTitle'}>{messages.view.main.user.timetable.title}</h1>
      <section></section>
    </section>
  );
};

export default Timetable;
