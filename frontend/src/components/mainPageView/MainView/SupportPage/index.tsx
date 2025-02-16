import React, {FC} from "react";
import {messages} from "../../../../common/constants/messages.ts";
import TextArea from "antd/es/input/TextArea";
import {Button, Form} from "antd";

import s from './styles.module.scss'
import FormItem from "antd/es/form/FormItem";
import AxiosService from "../../../../axios/AxiosService.tsx";

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
            <Form
                onFinish={(value):void => {
                    console.log(value)
                }}
            >
                <FormItem
                    name={'userMessage'}
                    rules={[{required: true}]}
                >
                    <TextArea
                        placeholder={messages.view.main.supportPage.textAreaPlaceholder}
                        className={s.supportTextarea}
                    />
                </FormItem>
                <FormItem>
                    <Button
                        htmlType={'submit'}
                        className={s.supportButton}
                    >
                        {messages.button.send}
                    </Button>
                </FormItem>
            </Form>
            <div>
                DEV ONLY
                <br/>
                <Button
                    onClick={() => AxiosService.GET('url1')}
                >
                    GET
                </Button>
                <Button
                    onClick={() => AxiosService.POST('url2')}
                >
                    POST
                </Button>
                <Button
                    onClick={() => AxiosService.PUT('url3')}
                >
                    PUT
                </Button>
            </div>
        </div>
    )
}

export default SupportPage