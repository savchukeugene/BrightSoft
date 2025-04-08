import { FC, useState } from 'react';
import { messages } from '../../../../../common/constants/messages';
import { quickCountLevelsGenerator } from '../../../../../common/utils/generatotrs';
import { levelsConfig } from './config';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { GamesLevelType, IGameParams } from '../../../../../types/commonTypes';
import { Form, Modal } from 'antd';
import { Routes } from '../../../../../common/constants/routes';
import CustomLevelForm from './CustomLevelForm';

import s from './styles.module.scss';

const QuickCount: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const [isCustomVisible, setIsCustomVisible] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [levelInfoContext, setLevelInfoContext] = useState<IGameParams | null>(null);
  const handleLevelChoose = (param: GamesLevelType): void => {
    if (param === 'custom') {
      return setIsCustomVisible(true);
    }
    const newSearchParams: URLSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('level', param);
    navigate({
      pathname: pathname.concat(Routes.play),
      search: newSearchParams.toString(),
    });
  };

  const handleCustomLevel = (customParams: IGameParams): void => {
    setLevelInfoContext(customParams);
    const newSearchParams: URLSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('level', 'custom');
    navigate({
      pathname: pathname.concat(Routes.play),
      search: newSearchParams.toString(),
    });
  };
  return (
    <main>
      <h1 className={'pageTitle'}>{messages.view.main.tasks.quickCount.title}</h1>
      {pathname.includes(Routes.play) ? (
        <Outlet context={{ levelInfoContext }} />
      ) : (
        <section className={s.quickCountLevels}>
          {quickCountLevelsGenerator(levelsConfig, handleLevelChoose)}
          <Modal
            open={isCustomVisible}
            footer={null}
            className={s.modal}
            onCancel={() => {
              form.resetFields();
              setIsCustomVisible(false);
            }}
          >
            <CustomLevelForm
              form={form}
              handler={handleCustomLevel}
            />
          </Modal>
        </section>
      )}
    </main>
  );
};

export default QuickCount;
