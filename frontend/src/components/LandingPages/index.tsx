import React, {FC} from "react";
import s from "../LandingPages/styles.module.scss";
import {messages} from "../../common/constants/messages.ts";
import {Button, Form, Input, message, Modal, Popconfirm, PopconfirmProps, Select, Table} from "antd";

interface Page {
    name: string;
    author: string;
}

const LandingPages: FC = (): React.JSX.Element => {
    const [pages, setPages] = React.useState<Page[]>([]);
    const [pageToDelete, setPageToDelete] = React.useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [form] = Form.useForm();


    const handleDeletePage = (index: number) => {
        setPageToDelete(index);
    };

    const confirm: PopconfirmProps['onConfirm'] = () => {
        if (pageToDelete !== null) {
            const newPages = pages.filter((_, idx) => idx !== pageToDelete);
            setPages(newPages);
            setPageToDelete(null);
        }
        message.success('Страница удалена');
    };

    const cancel: PopconfirmProps['onCancel'] = () => {};

    const handleModalOk = () => {
        form.validateFields().then(values => {
            setPages([...pages, { name: values.name, author: values.author }]);
            setIsModalOpen(false);
            form.resetFields();
        });
    };

    const handleModalCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    return (
        <div
            className={s.editingPage}
        >
            <h1
                className={s.editingTitle}
            >
                {messages.view.editingPage.title}
            </h1>

            <Table
                dataSource={pages.map((page, index) => ({
                    key: index,
                    page: page.name,
                    author: page.author,
                    date: new Date().toLocaleDateString(),
                    dateChange: new Date().toLocaleDateString(),
                }))}
                columns={[
                    {
                        title: 'Страница',
                        dataIndex: 'page',
                        key: 'page',
                        render: (text) => <a>{text}</a>,
                    },
                    {
                        title: 'Автор',
                        dataIndex: 'author',
                        key: 'author'
                    },
                    {
                        title: 'Дата создания',
                        dataIndex: 'date',
                        key: 'date'
                    },
                    {
                        title: 'Дата последнего изменения',
                        dataIndex: 'dateChange',
                        key: 'dateChange'
                    },
                    {
                        title: 'Действия',
                        key: 'actions',
                        render: (_, _record, index) => (
                            <><Button
                                className={s.actionButtons}
                            >
                                Изменить
                            </Button>

                            <Popconfirm
                                title="Удаление страницы"
                                description="Вы действительно хотите удалить страницу?"
                                onConfirm={confirm}
                                onCancel={cancel}
                                okText="Да"
                                cancelText="Нет"
                            >
                                <Button
                                    className={s.actionButtons}
                                    danger
                                    onClick={() => handleDeletePage(index)}
                                >
                                    Удалить
                                </Button>
                            </Popconfirm></>
                        )
                    }

                ]}
                pagination={false}
            />

            <Modal
                title="Добавить страницу"
                open={isModalOpen}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
            >
                <Form form={form}>
                    <Form.Item
                        name="name"
                        label="Название страницы"
                        rules={[{ required: true, message: 'Пожалуйста, введите название страницы' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="author"
                        label="Автор"
                        rules={[{ required: true, message: 'Пожалуйста, выберите автора' }]}
                    >
                        <Select>
                            <Select.Option value="Автор 1">Автор 1</Select.Option>
                            <Select.Option value="Автор 2">Автор 2</Select.Option>
                            <Select.Option value="Автор 3">Автор 3</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>

            <Button
                className={s.plusButton}
                onClick={() => setIsModalOpen(true)}
            >
                +
            </Button>
        </div>
    )
}

export default LandingPages