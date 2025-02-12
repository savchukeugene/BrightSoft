import React, {FC} from "react";
import s from './styles.module.scss'

interface IChooseNextRoute {
    infoText: string;
}

const ChooseNextRoute: FC<IChooseNextRoute> = ({infoText}): React.JSX.Element => {
    return (
        <div
            className={s.chooseNextPage}
        >
            <p
                className={s.info}
            >
                {infoText}
            </p>
        </div>
    )
}

export default ChooseNextRoute