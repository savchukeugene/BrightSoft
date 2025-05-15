import s from '../styles.module.scss';
import { Button, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { IUserData } from '../../../../../../types/commonTypes';
import { FC } from 'react';

interface IUserProfileSection {
  handleImageUpload: (file: any) => void;
  profileImage: string | null;
  userInfo: IUserData | undefined;
  handleLogout: () => void;
}

export const UserProfileSection: FC<IUserProfileSection> = ({
  handleImageUpload,
  profileImage,
  userInfo,
  handleLogout,
}) => {
  return (
    <div className={s.left}>
      <section className={s.mainBlock}>
        <Upload
          beforeUpload={handleImageUpload}
          showUploadList={false}
          accept="image/*"
        >
          <div className={s.userPhoto}>
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className={s.profileImage}
              />
            ) : (
              <UserOutlined />
            )}
          </div>
        </Upload>
        <div className={s.userMainInfo}>
          <span className={s.userName}>{userInfo?.userName || 'Имя пользователя'}</span>
          <span className={s.userEmail}>{userInfo?.email || 'email@example.com'}</span>
        </div>
        <Button
          type="primary"
          danger
          onClick={handleLogout}
          className={s.logoutButton}
        >
          Выйти из аккаунта
        </Button>
      </section>
    </div>
  );
};
