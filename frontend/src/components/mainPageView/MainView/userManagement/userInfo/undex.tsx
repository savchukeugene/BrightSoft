import { FC } from 'react';
import { IUserMapped } from '../../../../../types/userTypes.ts';

interface IUserInfoComponent {
  data: IUserMapped;
}

const UserInfo: FC<IUserInfoComponent> = ({ data }): JSX.Element => {
  return (
    <section>
      <div>{data?.userName}</div>
      <div>{data?.email}</div>
      <div>{data?.role}</div>
      {/*<div>status</div>*/}
    </section>
  );
};

export default UserInfo;
