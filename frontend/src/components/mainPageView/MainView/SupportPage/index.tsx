import React, {FC} from "react";
import {messages} from "../../../../common/constants/messages.ts";
import TextArea from "antd/es/input/TextArea";
import {Button} from "antd";

import s from './styles.module.scss'

const SupportPage: FC = (): React.JSX.Element => {
    return (
        <div
            className={s.supportPage}
        >
            <h1
                className={s.supportTitle}
            >
                {messages.view.main.supportPage.title}
            </h1>
            <h4>
                {messages.view.main.supportPage.subTitle}
            </h4>
            <div>
                <TextArea
                    placeholder={messages.view.main.supportPage.textAreaPlaceholder}
                    className={s.supportTextarea}
                >

                </TextArea>
                <Button
                    className={s.supportButton}
                >
                    Отправить
                </Button>
            </div>
        </div>
    )
}

export default SupportPage