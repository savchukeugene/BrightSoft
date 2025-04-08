import { FC, useState } from 'react';
import { Button, Form } from 'antd';

import s from './styles.module.scss';
import { FilterOutlined } from '@ant-design/icons';
import { fieldsGenerator } from '@common/utils/generatotrs';
import { IFilter } from '../../../types/filterTypes';
import { messages } from '@common/constants/messages';

const Filter: FC<IFilter> = ({ fields }) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [form] = Form.useForm();

  const resetFilterFields = () => form.resetFields();

  return (
    <div className={hidden ? s.hidden : s.filters}>
      {hidden ? (
        <></>
      ) : (
        <section>
          <Form
            form={form}
            className={s.filterFields}
          >
            {fieldsGenerator(fields)}
          </Form>
          <div>
            <Button>{messages.button.apply}</Button>
            <Button onClick={resetFilterFields}>{messages.button.reset}</Button>
          </div>
        </section>
      )}
      <Button onClick={() => setHidden(!hidden)}>
        <FilterOutlined />
      </Button>
    </div>
  );
};

export default Filter;
