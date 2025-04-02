import { FC } from 'react';
import { IUserMapped } from '../../../../../types/userTypes.ts';
import { createConfig } from './config.ts';
import { userInfoGenerator } from '../../../../../common/utils/generatotrs.tsx';
import { Form } from 'antd';

interface IUserInfoComponent {
  data: IUserMapped;
}

const UserInfo: FC<IUserInfoComponent> = ({ data }): JSX.Element => {
  return (
    <Form onFinish={(values: IUserMapped) => console.log(values)}>
      {userInfoGenerator(createConfig(data))}
    </Form>
  );
};

export default UserInfo;
