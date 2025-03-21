import { FC } from 'react';
import s from './styles.module.scss';
import { IField } from '../../../../../types/filterTypes.ts';
import { IUserMapped } from '../../../../../types/userTypes.ts';
import { createConfig } from './config.ts';

export interface IUserInfoGenerator {
  label: string;
  value: string;
  activeElement?: IField;
}

interface IUserInfoComponent {
  data: IUserMapped;
}

const userInfoGenerator = (config: IUserInfoGenerator[]): JSX.Element[] =>
  config.map((field: IUserInfoGenerator, index: number) => (
    <div
      key={`${index}_userInfo`}
      className={s.userInfoBlock}
    >
      {`${field.label}: `}
      {field.value}
    </div>
  ));

const UserInfo: FC<IUserInfoComponent> = ({ data }): JSX.Element => {
  console.log(data);
  return <section>{userInfoGenerator(createConfig(data))}</section>;
};

export default UserInfo;
