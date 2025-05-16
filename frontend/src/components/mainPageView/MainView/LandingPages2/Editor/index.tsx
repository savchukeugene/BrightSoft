import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLandingPageInfo, editLandingPage } from '../actions';
import { ILandingPageData } from '../../../../../types/landingPageTypes';
import { Button, Input, message } from 'antd';
import QuillEditor from './QuillEditor';
import s from './styles.module.scss';

// const { TextArea } = Input;

export const Editor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [landingPage, setLandingPage] = useState<ILandingPageData | null>(null);
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (id) {
            fetchLandingPageData(id);
        }
    }, [id]);

    const fetchLandingPageData = async (id: string) => {
        setLoading(true);
        try {
            const data = await getLandingPageInfo(id);
            if (data) {
                setLandingPage(data);
                setContent(data.description || '');
                setTitle(data.name);
            }
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
            message.error('Ошибка при загрузке данных');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        if (landingPage) {
            try {
                await editLandingPage({
                    id: landingPage.id,
                    description: content,
                    name: title,
                });
                message.success('Изменения сохранены');
                fetchLandingPageData(landingPage.id);
            } catch (error) {
                console.error('Ошибка при сохранении:', error);
                message.error('Ошибка при сохранении');
            }
        }
    };

    const handleCancel = () => {
        navigate(-1);
    };

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (!landingPage) {
        return <div>Landing Page не найдена</div>;
    }

    return (
        <div className={s.editorContainer}>
            <h1>Редактирование: {title}</h1>

            <div className={s.formGroup}>
                <label htmlFor="title">Заголовок:</label>
                <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className={s.formGroup}>
                <label htmlFor="editor">Содержимое:</label>
                <QuillEditor value={content} onChange={setContent} />
            </div>

            <div className={s.buttonGroup}>
                <Button type="primary" onClick={handleSave}>
                    Сохранить
                </Button>
                <Button onClick={handleCancel}>Отменить</Button>
            </div>
        </div>
    );
};