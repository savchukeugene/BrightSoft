import { Button, Form, FormInstance, Input, Modal, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { chooseType } from '../config';
import { FC } from 'react';
import { ICreateCourseOutDTO } from '../../../../../types/coursesTypes';

interface ICreateCourseModal {
  isCreateCourseModalOpen: boolean;
  handleModalClose: () => void;
  createCourseForm: FormInstance;
  handleCreateCourse: (values: ICreateCourseOutDTO) => void;
}

export const CreateCourseModal: FC<ICreateCourseModal> = ({
  isCreateCourseModalOpen,
  handleCreateCourse,
  createCourseForm,
  handleModalClose,
}) => {
  return (
    <Modal
      open={isCreateCourseModalOpen}
      onCancel={handleModalClose}
      footer={false}
    >
      <h1
        style={{
          margin: '10px 0',
          textAlign: 'center',
        }}
      >
        Создать курс
      </h1>
      <Form
        layout={'vertical'}
        form={createCourseForm}
        onFinish={handleCreateCourse}
      >
        <FormItem
          name={'name'}
          rules={[{ required: true }]}
          label={'Название курса'}
        >
          <Input />
        </FormItem>
        <FormItem
          name={'description'}
          rules={[{ required: true }]}
          label={'Описание курса'}
        >
          <TextArea />
        </FormItem>
        <FormItem
          name={'type'}
          rules={[{ required: true }]}
          label={'Тип курса'}
        >
          <Select options={chooseType} />
        </FormItem>
        <FormItem
          name={'users'}
          rules={[{ required: true }]}
          label={'Пользователи'}
        >
          <Input />
        </FormItem>
        <Button
          htmlType={'submit'}
          type={'primary'}
        >
          Создать
        </Button>
      </Form>
    </Modal>
  );
};
