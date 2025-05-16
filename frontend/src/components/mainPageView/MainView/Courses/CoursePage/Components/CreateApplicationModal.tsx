import {
  Button,
  Divider,
  Form,
  FormInstance,
  Input,
  Modal,
  Radio,
  RadioChangeEvent,
} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import React, { FC, useState } from 'react';
import { ICreateApplicationForm } from '../../../../../../types/applicationTypes';
import { ICourseData } from '../../../../../../types/coursesTypes';
import { getGroupsByCourseId } from '../actions';
import { useParams } from 'react-router-dom';
import { ICreateApplicationGroupsData } from '../../../../../../types/groupTypes';

interface ICreateApplicationModal {
  isAssignModalOpen: boolean;
  courseData: ICourseData | null;
  setIsAssignModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createApplicationForm: FormInstance;
  handleCreateApplication: (values: ICreateApplicationForm) => void;
}

interface Option {
  label: string;
  value: string;
}

export const CreateApplicationModal: FC<ICreateApplicationModal> = ({
  isAssignModalOpen,
  courseData,
  setIsAssignModalOpen,
  createApplicationForm,
  handleCreateApplication,
}) => {
  const { id } = useParams();
  const [isGroupsDataLoading, setIsGroupsDataLoading] = useState<boolean>(true);
  const [groupsData, setGroupsData] = useState<ICreateApplicationGroupsData[]>([]);
  const [checkedList, setCheckedList] = useState<string>('');
  const groupNumbers: Option[] = groupsData.map((group) => ({
    label: group.groupNumber + '',
    value: group.id,
  }));

  const onChange = (e: RadioChangeEvent) => {
    setCheckedList(e.target.value);
  };

  isGroupsDataLoading &&
    getGroupsByCourseId(id!).then((data) => {
      setGroupsData(data);
      setIsGroupsDataLoading(false);
    });
  return (
    <Modal
      open={isAssignModalOpen}
      title={`Записаться на курс "${courseData?.name}"`}
      onCancel={() => setIsAssignModalOpen(false)}
      footer={false}
    >
      <Form
        form={createApplicationForm}
        layout={'vertical'}
        onFinish={(values: ICreateApplicationForm) =>
          handleCreateApplication({ ...values, groupId: checkedList })
        }
      >
        <FormItem
          label={'Выберите группу'}
          name={'groupId'}
        >
          <Radio.Group
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
            options={groupNumbers}
            value={checkedList}
            onChange={onChange}
          />
        </FormItem>
        <Divider />
        <FormItem
          label={'Введите ваш номер телефона:'}
          name={'contactData'}
          rules={[{ required: true }]}
        >
          <Input type={''} />
        </FormItem>
        <Button htmlType={'submit'}>Отправить заявку</Button>
      </Form>
    </Modal>
  );
};
