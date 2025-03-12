import { FC, useState } from 'react';
import { Button } from 'antd';

import s from './styles.module.scss';
import { FilterOutlined } from '@ant-design/icons';
import { fieldsGenerator } from '../../../common/utils/generatotrs.tsx';
import { IFilter } from '../../../types/filterTypes.ts';

const Filter: FC<IFilter> = ({ fields }) => {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <div className={hidden ? s.hidden : s.filters}>
      {hidden ? <></> : <div className={s.filterFields}>{fieldsGenerator(fields)}</div>}
      <Button onClick={() => setHidden(!hidden)}>
        <FilterOutlined />
      </Button>
    </div>
  );
};

export default Filter;
