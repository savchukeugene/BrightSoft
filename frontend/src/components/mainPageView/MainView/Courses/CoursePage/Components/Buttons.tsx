import s from '../styles.module.scss';
import { Button, Flex } from 'antd';
import { IUserRoles, useUserStore } from '../../../../../../store/userStore';
import React, { FC } from 'react';

interface IButtons {
  setIsCreateLessonModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAssignModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Buttons: FC<IButtons> = ({
  setIsCreateLessonModalOpen,
  setIsAssignModalOpen,
}) => {
  const allowedRolesToAddLesson = new Set<IUserRoles>(['administrator', 'teacher']);
  const { role } = useUserStore();
  return (
    <Flex
      gap={10}
      align={'center'}
      className={s.actionButtons}
    >
      {allowedRolesToAddLesson.has(role) ? (
        <Button
          type={'primary'}
          onClick={() => setIsCreateLessonModalOpen(true)}
        >
          Добавить урок
        </Button>
      ) : (
        <Button
          type={'primary'}
          size={'large'}
          onClick={() => setIsAssignModalOpen(true)}
        >
          Записаться
        </Button>
      )}
    </Flex>
  );
};
