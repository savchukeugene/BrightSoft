import { Form, Input, Select } from 'antd';
import { IField } from '../../types/filterTypes';
import {
  IAuthorizationFields,
  IRoutesGenerator,
  IUserInfoGenerator,
} from '../../types/commonTypes';
import { v4 as uuid } from 'uuid';
import { Route } from 'react-router-dom';
import s from '../../components/mainPageView/MainView/userManagement/userInfo/styles.module.scss';
import currentStyles from './styles.module.scss';
import { StarFilled } from '@ant-design/icons';
import { GamesLevelType, ILevelsFields, INumberHuntingParams } from '../../types/games';

export const routesGenerator = (
  routesConfig: IRoutesGenerator[],
  parentPath: string = '',
) =>
  routesConfig.map((element: IRoutesGenerator) => (
    <Route
      path={parentPath + element.path}
      element={element.element}
      key={uuid()}
    >
      {element.child ? routesGenerator(element.child, parentPath + element.path) : <></>}
    </Route>
  ));

export const authorizationFieldsGenerator = (config: IAuthorizationFields[]) =>
  config.map((element: IAuthorizationFields) => (
    <div
      key={uuid()}
      className={'formItem'}
    >
      {element.label}
      <input
        name={element.name}
        key={uuid()}
        className={'loginInput'}
      />
    </div>
  ));

export const routeGenerator = (...routes: string[]) => {
  return routes.join('');
};

export const levelsGenerator = (
  config: ILevelsFields[],
  handler: (param: GamesLevelType) => void,
) =>
  config.map((level: ILevelsFields) => (
    <section
      className={s.select}
      onClick={() => handler(level.name)}
      key={uuid()}
    >
      <div className={currentStyles.levelStarsAmount}>
        {level.starsAmount}
        <StarFilled style={{ fontSize: '38px' }} />
      </div>
      {level.label}
    </section>
  ));

export const fieldsGenerator = (fields: IField[]) =>
  fields.map((element: IField) => {
    switch (element.type) {
      case 'input':
        return (
          <Form.Item
            name={element.name}
            key={uuid()}
          >
            <Input
              className={s.input}
              key={uuid()}
              style={{ maxWidth: '200px' }}
              placeholder={element.placeholder}
            />
          </Form.Item>
        );
      case 'select':
        return (
          <Form.Item
            name={element.name}
            key={uuid()}
          >
            <Select
              key={uuid()}
              style={{ width: '200px' }}
              className={s.select}
              options={element.options}
              defaultValue={element?.defaultValue}
              placeholder={element.placeholder}
              allowClear={element.allowClear ?? true}
            />
          </Form.Item>
        );
    }
    return (
      <Input
        key={uuid()}
        style={{ maxWidth: '300px' }}
        placeholder={element.placeholder}
        name={element.name}
      />
    );
  });

export function collectFieldsData<T>(formData: FormData, fields: string[]): T {
  const data: Record<string, any> = {};

  fields.forEach((field: string): void => {
    data[field] = formData.get(field);
  });

  return data as T;
}

export const userInfoGenerator = (config: IUserInfoGenerator[]): JSX.Element[] =>
  config.map((field: IUserInfoGenerator) => (
    <div
      key={uuid()}
      className={s.userInfoBlock}
    >
      <div className={s.label}>{`${field.label}: `}</div>
      {field.activeElement
        ? fieldsGenerator([field.activeElement] as IField[])
        : field.value}
    </div>
  ));

export const formGenerator = (config: IField[]) => {
  return config.map((field: IField) => fieldsGenerator([field]));
};

export const generateCells = (
  levelInfo: INumberHuntingParams,
  onClickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
) => {
  const dimension = levelInfo.dimension;
  const totalCells = dimension * dimension;

  const numbers = Array.from({ length: totalCells }, (_, i) => i + 1);

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers.map((number) => (
    <div
      key={number}
      className={s.cell}
      onClick={(event) => onClickHandler(event)}
    >
      {number}
    </div>
  ));
};
