import { Form, Input, Select } from 'antd';
import { IField } from '../../types/filterTypes.ts';
import {
  IAuthorizationFields,
  IQuickCountLevelFields,
  IRoutesGenerator,
} from '../../types/commonTypes.ts';
import { v4 as uuid } from 'uuid';

import s from './styles.module.scss';
import { Route } from 'react-router-dom';

export const routesGenerator = (
  routesConfig: IRoutesGenerator[],
  parentPath: string = '',
) =>
  routesConfig.map((element: IRoutesGenerator) => {
    const currentPath = `${parentPath + element.path}`;
    return (
      <Route
        path={currentPath}
        element={element.element}
        key={uuid()}
      >
        {element.child ? routesGenerator(element.child, currentPath) : <></>}
      </Route>
    );
  });

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

export const quickCountLevelsGenerator = (
  config: IQuickCountLevelFields[],
  handler: (param: string) => void,
) =>
  config.map((level: IQuickCountLevelFields) => (
    <section
      className={s.select}
      onClick={() => handler(level.name)}
      style={{
        width: `${100 / config.length - 2}%`,
      }}
      key={uuid()}
    >
      {level.icon}
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
              allowClear={true}
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
