import s from './styles.module.scss';
import { Button, Flex, Form, Input, message } from 'antd';
import { useState } from 'react';
import { IUserData } from '../../../../../types/commonTypes';
import FormItem from 'antd/es/form/FormItem';
import { useUserStore } from '../../../../../store/userStore';
import { useForm } from 'antd/es/form/Form';
import { logout } from '../../../../Authorization/Login/actions';
import { getUserData, updateUserProfile } from './actions';
import { UserProfileSection } from './Components/UserProfileSection';
import { AdminPanel } from './Components/AdminPanel';
import { IUpdateUserInfoDtoOut } from '../../../../../types/userTypes';

const Profile = () => {
  const [form] = useForm();
  const { user, logoutUser, role } = useUserStore();
  const [userInfo, setUserInfo] = useState<IUserData>();
  const [isUserDataLoading, setIsUserDataLoading] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  isUserDataLoading && getUserData(user!).then(() => setIsUserDataLoading(false));

  const updateUser = async (values: IUpdateUserInfoDtoOut) => {
    if (!user) return;
    try {
      const data: IUserData = await updateUserProfile(values);
      setUserInfo(data);
      setDisabled(true);
      message.success('Профиль успешно обновлен');
    } catch (e) {
      console.error('Ошибка обновления профиля:', e);
    }
  };

  const handleLogout = () => logout(logoutUser);

  const handleImageUpload = (file: any) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfileImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    return false;
  };

  return (
    <main className={s.profileContainer}>
      <Flex gap={20}>
        <UserProfileSection
          handleImageUpload={handleImageUpload}
          profileImage={profileImage}
          handleLogout={handleLogout}
          userInfo={userInfo}
        />
        <div className={s.right}>
          <section
            className={`${s.infoBlock} ${role !== 'administrator' ? s.infoBlockFull : ''}`}
          >
            <h2>Личная информация</h2>
            <Form
              form={form}
              className={s.form}
              disabled={disabled}
              onFinish={updateUser}
              initialValues={userInfo}
            >
              <FormItem
                label="Фамилия"
                name="secondName"
              >
                {disabled ? (
                  <span>{form.getFieldValue('secondName') || 'Не указано'}</span>
                ) : (
                  <Input placeholder={userInfo?.secondName || 'Введите фамилию'} />
                )}
              </FormItem>
              <FormItem
                label="Имя"
                name="firstName"
              >
                {disabled ? (
                  <span>{form.getFieldValue('firstName') || 'Не указано'}</span>
                ) : (
                  <Input placeholder={userInfo?.firstName || 'Введите имя'} />
                )}
              </FormItem>
              <FormItem
                label="Отчество"
                name="fatherName"
              >
                {disabled ? (
                  <span>{form.getFieldValue('fatherName') || 'Не указано'}</span>
                ) : (
                  <Input placeholder={userInfo?.fatherName || 'Введите отчество'} />
                )}
              </FormItem>
              <FormItem
                label="Имя пользователя"
                name="userName"
              >
                {disabled ? (
                  <span>{userInfo?.userName}</span>
                ) : (
                  <Input placeholder={userInfo?.userName || 'Введите имя пользователя'} />
                )}
              </FormItem>
              {!disabled && (
                <div className={s.formButtons}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={s.saveButton}
                  >
                    Сохранить
                  </Button>
                  <Button
                    onClick={() => setDisabled(true)}
                    className={s.cancelButton}
                  >
                    Отменить
                  </Button>
                </div>
              )}
            </Form>
            {disabled && (
              <div className={s.formButtons}>
                <Button
                  type="primary"
                  onClick={() => setDisabled(false)}
                  className={s.editButton}
                >
                  Редактировать
                </Button>
              </div>
            )}
          </section>
        </div>
      </Flex>
      {role === 'administrator' && (
        <AdminPanel
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </main>
  );
};

export default Profile;
