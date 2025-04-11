import { FC, ReactNode } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

import s from './styles.module.scss';

const Loader: FC<{ children?: ReactNode; isLoading: boolean }> = ({
  children,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <div className={s.loader}>
          <LoadingOutlined />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
