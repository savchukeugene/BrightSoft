import { FC, useState } from 'react';
import { Button, Input } from 'antd';

import s from './styles.module.scss';
import { FilterOutlined } from '@ant-design/icons';

interface IField {
  name: string;
  type: string;
  placeholder: string;
}

interface IFilter {
  fields: IField[];
}

const Filter: FC<IFilter> = ({ fields }) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const fieldsGenerator = () =>
    fields.map((element: IField) => (
      <Input
        style={{ maxWidth: '300px' }}
        placeholder={element.placeholder}
        name={element.name}
      />
    ));
  return (
    <div className={hidden ? s.hidden : s.filters}>
      {hidden ? <></> : <div className={s.filterFields}>{fieldsGenerator()}</div>}
      <Button onClick={() => setHidden(!hidden)}>
        <FilterOutlined />
      </Button>
    </div>
  );
};

export default Filter;
