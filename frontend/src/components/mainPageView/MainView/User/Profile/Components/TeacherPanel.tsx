import s from '../styles.module.scss';
import { Button, Flex, Form, Input, List, Modal, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { FC, useState } from 'react';
import { IGroupCreateDtoOut, IGroupsAllDtoIn } from '../../../../../../types/groupTypes';
import { useForm } from 'antd/es/form/Form';
import {
  createGroup,
  getAllCoursesForGroups,
  getAllGroups,
  getGroupById,
  getStudents,
} from '../actions';
import { DAYS_OF_WEEK_OPTIONS } from '@common/constants/options';
import { IOptions } from '../../../../../../types/commonTypes';

export const TeacherPanel: FC = () => {
  const [form] = useForm();
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState<boolean>(false);
  const [allGroupData, setAllGroupData] = useState<IGroupsAllDtoIn[]>([]);
  const [users, setUsers] = useState<{ users: IOptions[]; courses: IOptions[] }>();
  const [isGroupDataLoading, setIsGroupDataLoading] = useState<boolean>(true);
  isGroupDataLoading &&
    getAllGroups()
      .then((data: IGroupsAllDtoIn[]) => {
        setAllGroupData(data);
      })
      .then(() => setIsGroupDataLoading(false));

  const handleGroupSave = async (values: IGroupCreateDtoOut) => {
    await createGroup(values);
    setIsGroupDataLoading(true);
    setIsCreateGroupModalOpen(false);
    form.resetFields();
  };

  const handleOpenModal = async () => {
    const data = await getStudents();
    const courseOptionsData = await getAllCoursesForGroups();
    setUsers({
      courses: courseOptionsData,
      users: data,
    });
    setIsCreateGroupModalOpen(true);
  };

  const handleViewGroupData = async (id: string) => {
    const data = await getGroupById(id);
    console.log(data);
  };

  return (
    <section className={s.teacherSection}>
      <h1>Панель Преподавателя</h1>
      <List<IGroupsAllDtoIn>
        loading={isGroupDataLoading}
        header={
          <Flex
            align={'center'}
            gap={30}
          >
            <h3>Группы</h3>
            <Button
              onClick={handleOpenModal}
              type={'dashed'}
            >
              Создать
            </Button>
          </Flex>
        }
        bordered
        dataSource={allGroupData}
        renderItem={(item: IGroupsAllDtoIn) => (
          <List.Item>
            <Flex
              className={s.flexItem}
              justify={'space-between'}
            >
              {`${item.name}, №${item.groupNumber}`}
              <Button
                onClick={() => handleViewGroupData(item.id)}
                type={'link'}
              >
                Просмотр
              </Button>
            </Flex>
          </List.Item>
        )}
      />
      <List
        header={
          <Flex
            align={'center'}
            gap={30}
          >
            <h3>Заявки</h3>
            <Button
              onClick={handleOpenModal}
              type={'dashed'}
            >
              Создать
            </Button>
          </Flex>
        }
        bordered
        dataSource={Array.from({ length: 10 }).map((_, index) => `Заявка ${index}`)}
        renderItem={(item: string) => (
          <List.Item>
            <Flex
              className={s.flexItem}
              justify={'space-between'}
            >
              {item}
            </Flex>
          </List.Item>
        )}
      />
      <Modal
        open={isCreateGroupModalOpen}
        onCancel={() => setIsCreateGroupModalOpen(false)}
        footer={false}
      >
        <Form
          onFinish={handleGroupSave}
          form={form}
          layout={'vertical'}
        >
          <FormItem
            name={'name'}
            label={'Введите название группы'}
          >
            <Input />
          </FormItem>
          <FormItem
            name={'groupNumber'}
            label={'Введите номер группы'}
            rules={[{ required: true }]}
          >
            <Input type={'number'} />
          </FormItem>
          <FormItem
            name={'course'}
            label={'Выберите курс группы:'}
            rules={[{ required: true }]}
          >
            <Select options={users?.courses} />
          </FormItem>
          <FormItem
            name={'duration'}
            label={'Введите длительность занятия у группы'}
            rules={[{ required: true }]}
          >
            <Input />
          </FormItem>
          <FormItem
            name={'startHour'}
            label={'Введите время начала занятия'}
            rules={[{ required: true }]}
          >
            <Input />
          </FormItem>
          <FormItem
            name={'maxStudents'}
            label={'Введите максимальное число учеников'}
            rules={[{ required: true }]}
          >
            <Input />
          </FormItem>
          <FormItem
            name={'users'}
            label={'Добавить пользователей:'}
          >
            <Select
              options={users?.users}
              mode="multiple"
            />
          </FormItem>
          <FormItem
            name={'days'}
            label={'Введите дни занятий у группы:'}
            rules={[{ required: true }]}
          >
            <Select
              mode="multiple"
              options={DAYS_OF_WEEK_OPTIONS}
            />
          </FormItem>
          <Button htmlType={'submit'}>Сохранить</Button>
        </Form>
      </Modal>
    </section>
  );
};
