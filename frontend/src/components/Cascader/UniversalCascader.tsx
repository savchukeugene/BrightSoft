import {FC} from "react";
import {Cascader, CascaderProps} from "antd";

interface ICascader {
    config: object,
    options: CascaderProps['options'],
}

const UniversalCascader: FC<ICascader> = ({config, options}): JSX.Element => {
    return (
        <Cascader {...config} options={options}>
        </Cascader>
    )
}

export default UniversalCascader