import { FC } from 'react';
import { IUserMapped } from '../../../../../types/userTypes';
import { createConfig } from './config';
import { userInfoGenerator } from '../../../../../common/utils/generatotrs';
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
