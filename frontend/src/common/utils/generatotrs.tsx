import { Form, Input, Select } from 'antd';

import { IField } from '../../types/filterTypes.ts';
import { IAuthorizationFields, IQuickCountLevelFields } from '../../types/commonTypes.ts';
import s from './styles.module.scss';
export const routeGenerator = (...routes: string[]) => {
  return routes.join('');
};

export const authorizationFieldsGenerator = (config: IAuthorizationFields[]) =>
  config.map((element: IAuthorizationFields, index: number) => (
    <div
      key={`${index}_formItem`}
      className={'formItem'}
    >
      {element.label}
      <input
        name={element.name}
        key={`${index}_input`}
        className={'loginInput'}
      />
    </div>
  ));

export const quickCountLevelsGenerator = (config: IQuickCountLevelFields[]) =>
  config.map((level: IQuickCountLevelFields) => (
    <section
      className={s.select}
      style={{
        boxShadow: `0px 0px 40px ${level.boxShadow} inset`,
        width: `${100 / config.length - 2}%`,
      }}
    >
      {level.icon}
      {level.label}
    </section>
  ));

export const fieldsGenerator = (fields: IField[]) =>
  fields.map((element: IField, index: number) => {
    switch (element.type) {
      case 'input':
        return (
          <Form.Item
            name={element.name}
            key={`${index}_field`}
          >
            <Input
              className={s.input}
              key={`${index}_field_input`}
              style={{ maxWidth: '200px' }}
              placeholder={element.placeholder}
            />
          </Form.Item>
        );
      case 'select':
        return (
          <Form.Item
            name={element.name}
            key={`${index}_field`}
          >
            <Select
              key={`${index}_field_select`}
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
        key={`${index}_field_default`}
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
