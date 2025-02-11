import {TableColumnsType} from "antd";

export interface DataType {
    key: React.Key;
    name: string;
    address: string;
}

export const dataSource: DataType[] = [
    { key: '1', name: 'Робототехника',  address: '9' },
    { key: '2', name: 'Математика',  address: '8' },
];

export const columns: TableColumnsType<DataType> = [
    {
        title: 'Название предмета',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
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
