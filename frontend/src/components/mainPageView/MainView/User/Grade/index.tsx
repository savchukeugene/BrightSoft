import {Table} from "antd";
import {columns, dataSource, DataType} from "./config.tsx";
import s from "./styles.module.scss";

const Grade = () => {
    return (
       <>
           <h1
               style={{
                   marginBottom: '20px'
               }}
           >
               {'Оценки'}
           </h1>
            <Table<DataType>
                pagination={false}
                columns={columns}
                dataSource={dataSource}
                className={s.table}
                scroll={{ x: 'max-content' }}
            />
       </>
    );
}

export default Grade