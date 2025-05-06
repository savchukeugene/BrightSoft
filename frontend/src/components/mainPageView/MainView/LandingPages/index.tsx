import React, { FC, useEffect, useState } from "react";
import s from "../LandingPages/styles.module.scss";
// import { messages } from '../../../common/constants/messages';
import {Button, Form, Input, message, Modal, Popconfirm, Select, Table} from "antd";
import type { ColumnsType } from 'antd/es/table';
import type { PopconfirmProps } from "antd";

interface Page {
    id: number;
    name: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    url: string;
}

// create module Landing Pages

const LandingPages: FC = (): React.JSX.Element => {
    const [pages, setPages] = useState<Page[]>([]);
    const [pageToDelete, setPageToDelete] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        // if (...)
        fetchPages();
    }, []);

    //  {messages.view.editingPage.title}

    // const fetchPages = async () => {
    //     try {
    //         const fakePages: Page[] = [
    //             {
    //                 id: 1,
    //                 name: "Рекламная страница 1",
    //                 author: "Автор 1",
    //                 createdAt: "2025-04-01",
    //                 updatedAt: "2025-04-15",
    //                 url: "users/userInfo"
    //             },
    //             {
    //                 id: 2,
    //                 name: "Весенняя распродажа",
    //                 author: "Автор 2",
    //                 createdAt: "2025-03-28",
    //                 updatedAt: "2025-04-14",
    //                 url: "users/userInfo"
    //             }
    //         ];
    //         setPages(fakePages);
    //     } catch (error) {
    //         console.error("Ошибка загрузки страниц", error);
    //         message.error('Не удалось загрузить страницы');
    //     }
    // };

    const fetchPages = async () => {
        try {
            const res = await fetch('/api/landing-pages/all', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ authorId: 'some-id' }),
            });
            const data: Page[] = await res.json();
            const pagesWithUrls = data.map(page => ({
                ...page,
                url: `/mainPage/editingPages/${page.id}`,
            }));
            setPages(pagesWithUrls);
        } catch (error) {
            console.error("Ошибка загрузки страниц", error);
            message.error('Не удалось загрузить страницы');
        }
    };

    const handleDeletePage = (id: number) => {
        setPageToDelete(id);
    };

    const confirm: PopconfirmProps['onConfirm'] = async () => {
        if (pageToDelete !== null) {
            try {
                const res = await fetch('/api/landing-pages/delete', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: pageToDelete }),
                });

                if (!res.ok) {
                    throw new Error('Ошибка при удалении');
                }

                setPages(prev => prev.filter(page => page.id !== pageToDelete));
                message.success('Страница успешно удалена');
            } catch (error) {
                console.error('Ошибка при удалении страницы', error);
                message.error('Не удалось удалить страницу');
            } finally {
                setPageToDelete(null);
            }
        }
    };

    const cancel: PopconfirmProps['onCancel'] = () => {
        setPageToDelete(null);
    };

    // const id = Date.now();
    //
    // const handleModalOk = async () => {
    //     try {
    //         const values = await form.validateFields();
    //         const newPage: Page = {
    //             id: Date.now(),
    //             name: values.name,
    //             author: values.author,
    //             createdAt: new Date().toISOString().split('T')[0],
    //             updatedAt: new Date().toISOString().split('T')[0],
    //             url: `/mainPage/editingPages/${id}`,
    //         };
    //         setPages([...pages, newPage]);
    //         setIsModalOpen(false);
    //         form.resetFields();
    //
    //         message.success('Страница успешно добавлена');
    //     } catch (error) {
    //         console.error('Ошибка валидации формы', error);
    //     }
    // };

    const handleModalOk = async () => {
        try {
            const values = await form.validateFields();

            const res = await fetch('/api/landing-pages/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: values.name,
                    author: values.author,
                }),
            });

            if (!res.ok) throw new Error('Ошибка при создании');

            const createdPage: Page = await res.json();
            createdPage.url = `/mainPage/editingPages/${createdPage.id}`;

            setPages(prev => [createdPage, ...prev]);
            setIsModalOpen(false);
            form.resetFields();
            message.success('Страница успешно добавлена');
        } catch (error) {
            console.error(error);
            message.error('Ошибка при создании страницы');
        }
    };

    const handleModalCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const columns: ColumnsType<Page> = [
        {
            title: 'Название страницы',
            dataIndex: 'name',
            key: 'name',
            render: (_text, record) => (
                <a
                    href={record.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {record.name}
                </a>
            ),
        },
        {
            title: 'Автор',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Дата создания',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Дата последнего изменения',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
        },
        {
            title: 'Действия',
            key: 'actions',
            render: (_, record) => (
                <>
                    <Button
                        className={s.actionButtons}
                        type="link"
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
                            type="link"
                            danger
                            onClick={() => handleDeletePage(record.id)}
                        >
                            Удалить
                        </Button>
                    </Popconfirm>
                </>
            ),
        },
    ];

    return (
        <div className={s.editingPage}>
            <h1 className={s.editingTitle}>
                Рекламные страницы
            </h1>

            <div className={s.tableWrapper}>
                <Table
                    dataSource={pages}
                    columns={columns}
                    rowKey="id"
                    pagination={false}
                />
            </div>

            <Modal
                title="Добавить новую страницу"
                open={isModalOpen}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                okText="Сохранить"
                cancelText="Отмена"
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="name"
                        label="Название страницы"
                        rules={[{ required: true, message: 'Введите название страницы' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="author"
                        label="Автор"
                        rules={[{ required: true, message: 'Выберите автора' }]}
                    >
                        <Select placeholder="Выберите автора">
                            <Select.Option value="Автор 1">Автор 1</Select.Option>
                            <Select.Option value="Автор 2">Автор 2</Select.Option>
                            <Select.Option value="Автор 3">Автор 3</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>

            <Button
                className={s.editingButton}
                type="primary"
                onClick={() => setIsModalOpen(true)}
            >
                + Добавить страницу
            </Button>
        </div>
    );
};

export default LandingPages;