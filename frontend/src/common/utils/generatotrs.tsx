import { Form, Input, Select } from 'antd';

import { IField } from '../../types/filterTypes.ts';
import { IAuthorizationFields } from '../../types/commonTypes.ts';

export const routeGenerator = (...routes: string[]) => {
  return routes.join('');
};

export const authorizationFieldsGenerator = (config: IAuthorizationFields[]) =>
  config.map((element: IAuthorizationFields) => (
    <div className={'formItem'}>
      {element.label}
      <input
        name={element.name}
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
