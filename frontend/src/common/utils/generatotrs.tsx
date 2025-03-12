import React from 'react';
import { Route } from 'react-router-dom';
import { Input, Select } from 'antd';
import { IField } from '../../components/commonComponents/Filter';

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
          <Input
            style={{ maxWidth: '300px' }}
            placeholder={element.placeholder}
            name={element.name}
          />
        );
      case 'select':
        return (
          <Select
            style={{ width: '300px' }}
            options={element.options}
            placeholder={element.placeholder}
            allowClear={true}
          />
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
