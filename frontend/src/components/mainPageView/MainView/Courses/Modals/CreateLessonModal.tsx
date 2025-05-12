import { Button, Form, FormInstance, Input, Modal } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import Dragger from 'antd/es/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { ILessonCreateFormInfo } from '../../../../../types/lessonTypes';
import { FC } from 'react';

interface ICreateLessonModal {
  isCreateLessonModalOpen: boolean;
  handleClose: () => void;
  handleCreateLesson: (dto: ILessonCreateFormInfo) => void;
  createLessonForm: FormInstance;
}

export const CreateLessonModal: FC<ICreateLessonModal> = ({
  isCreateLessonModalOpen,
  handleCreateLesson,
  handleClose,
  createLessonForm,
}) => {
  return (
    <Modal
      open={isCreateLessonModalOpen}
      onCancel={handleClose}
      footer={false}
    >
      <Form
        layout={'vertical'}
        onFinish={handleCreateLesson}
        form={createLessonForm}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Добавить урок</h2>
        <FormItem
          label={'Название урока'}
          rules={[{ required: true }]}
          name={'name'}
        >
          <Input
            size={'large'}
            placeholder={'Название урока'}
          />
        </FormItem>

        <FormItem
          label={'Описание урока'}
          rules={[{ required: true }]}
          name={'description'}
        >
          <TextArea placeholder={'Описание урока'} />
        </FormItem>

        <FormItem label={'Добавьте изображение'}>
          <Dragger>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Нажмите или перетащите изображение</p>
          </Dragger>
        </FormItem>

        <FormItem label={'Добавьте видео'}>
          <Dragger>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Нажмите или перетащите видео</p>
          </Dragger>
        </FormItem>

        <FormItem
          label={'Домашнее задание'}
          rules={[{ required: true }]}
          name={'homework'}
        >
          <TextArea />
        </FormItem>

        <Button
          htmlType={'submit'}
          type={'primary'}
        >
          Сохранить
        </Button>
      </Form>
    </Modal>
  );
};
