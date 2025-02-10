import {FC} from "react";
import {Table, TableColumnsType} from "antd";
import s from './styles.module.scss'
interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const dataSource: DataType[] = [
    { key: '1', name: 'Olivia', age: 32, address: '9' },
    { key: '2', name: 'Ethan', age: 40, address: '8' },
];

const columns: TableColumnsType<DataType> = [
    {
        title: 'ФИО',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Возраст',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
        sorter: true,
    },
    { title: '12.02.2025', dataIndex: 'address', key: '1' },
    { title: '12.02.2025', dataIndex: 'address', key: '2' },
    { title: '12.02.2025', dataIndex: 'address', key: '3' },
    { title: '12.02.2025', dataIndex: 'address', key: '4' },
    { title: '12.02.2025', dataIndex: 'address', key: '5' },
    { title: '12.02.2025', dataIndex: 'address', key: '6' },
    { title: '12.02.2025', dataIndex: 'address', key: '7' },
    { title: '12.02.2025', dataIndex: 'address', key: '8' },
    { title: '12.02.2025', dataIndex: 'address', key: '9' },
    { title: '12.02.2025', dataIndex: 'address', key: '10' },
    { title: '12.02.2025', dataIndex: 'address', key: '11' },
    { title: '12.02.2025', dataIndex: 'address', key: '12' },
    { title: '12.02.2025', dataIndex: 'address', key: '13' },
    { title: '12.02.2025', dataIndex: 'address', key: '14' },
    { title: '12.02.2025', dataIndex: 'address', key: '15' },
    { title: '12.02.2025', dataIndex: 'address', key: '16' },
    { title: '12.02.2025', dataIndex: 'address', key: '17' },
    { title: '12.02.2025', dataIndex: 'address', key: '18' },
    { title: '12.02.2025', dataIndex: 'address', key: '19' },
    { title: '12.02.2025', dataIndex: 'address', key: '20' },
    {
        title: 'Действия',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a>Редактировать</a>,
    },
];

const Timetable: FC = (): JSX.Element => {
    return (
        <Table<DataType>
            pagination={false}
            columns={columns}
            dataSource={dataSource}
            className={s.table}
            scroll={{ x: 'max-content' }}
        />
    );
}

export default Timetable