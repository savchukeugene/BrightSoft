import { Form, Input, Select } from 'antd';

import { IField } from '../../types/filterTypes.ts';
import { IAuthorizationFields } from '../../types/commonTypes.ts';

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

export const fieldsGenerator = (fields: IField[]) =>
  fields.map((element: IField) => {
    switch (element.type) {
      case 'input':
        return (
          <Form.Item name={element.name}>
            <Input
              style={{ maxWidth: '200px' }}
              placeholder={element.placeholder}
            />
          </Form.Item>
        );
      case 'select':
        return (
          <Form.Item name={element.name}>
            <Select
              style={{ width: '200px' }}
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
