import React from 'react';
import { Route } from 'react-router-dom';
import { Form, Input, Select } from 'antd';

import { IField } from '../../types/filterTypes.ts';

export const routeGenerator = (...routes: string[]) => {
  return routes.join('');
};

interface IRouteConfig {
  path: string;
  element: React.JSX.Element;
  children: IRouteConfig;
}

export const routesTagRender = (routeConfig: IRouteConfig): React.JSX.Element => {
  return routeConfig.children ? (
    <Route
      path={routeConfig.path}
      element={routeConfig.element}
    >
      routesTagRender(routeConfig.children)
    </Route>
  ) : (
    <Route
      path={routeConfig.path}
      element={routeConfig.element}
    ></Route>
  );
};

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
