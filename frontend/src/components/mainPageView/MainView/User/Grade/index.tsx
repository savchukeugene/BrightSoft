import { Table } from 'antd';
import { columns, dataSource, DataType } from './config';
import s from './styles.module.scss';
import { messages } from '../../../../../common/constants/messages';

const Grade = () => {
  return (
    <section>
      <h1 className={'pageTitle'}>{messages.view.main.user.grade.title}</h1>
      <Table<DataType>
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        className={s.table}
        scroll={{ x: 'max-content' }}
      />
    </section>
  );
};

export default Grade;
