import { FC } from 'react';
import s from './styles.module.scss';
import { IField } from '../../../../../types/filterTypes.ts';
import { IUserMapped } from '../../../../../types/userTypes.ts';
import { createConfig } from './config.ts';
import { fieldsGenerator } from '../../../../../common/utils/generatotrs.tsx';

export interface IUserInfoGenerator {
  label: string;
  value: string;
  activeElement?: Partial<IField>;
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
      <div className={s.label}>{`${field.label}: `}</div>
      {field.activeElement
        ? fieldsGenerator([field.activeElement] as IField[])
        : field.value}
    </div>
  ));

const UserInfo: FC<IUserInfoComponent> = ({ data }): JSX.Element => {
  return <section>{userInfoGenerator(createConfig(data))}</section>;
};

export default UserInfo;
