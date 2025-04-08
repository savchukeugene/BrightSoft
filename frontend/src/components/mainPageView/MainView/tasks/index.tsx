import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Form, Modal, Tooltip } from 'antd';
import { Routes } from '@common/constants/routes';
import s from './styles.module.scss';
import { levelsGenerator } from '@common/utils/generatotrs';
import CustomLevelForm from './commonTasksComponents/CustomLevelForm';
import { InfoCircleOutlined } from '@ant-design/icons';
import LevelRules from './commonTasksComponents/LevelRules';
import { messages } from '@common/constants/messages';
import {
  GamesLevelType,
  GamesType,
  IGameParams,
  ILevelsFields,
} from '../../../../types/games';
import { useGameStore } from '../../../../store/gameStore';

export interface IRules {
  title: string;
  descriptions: string[];
}
interface ILevelWrapper {
  levelConfig: ILevelsFields[];
  title: GamesType;
  levelRules: IRules;
}

const LevelWrapper: FC<ILevelWrapper> = ({ levelConfig, title, levelRules }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const [isCustomVisible, setIsCustomVisible] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [levelInfoContext, setLevelInfoContext] = useState<IGameParams | null>(null);
  const [isLevelInfoVisible, setIsLevelInfoVisible] = useState<boolean>(false);
  const { setGame } = useGameStore();

  useEffect(() => {
    return () => setGame(null, null);
  }, []);

  const handleLevelChoose = (param: GamesLevelType): void => {
    if (param === 'custom') {
      return setIsCustomVisible(true);
    }
    setGame(
      title,
      levelConfig.find((elem: ILevelsFields) => elem.name === param),
    );
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
      <h1 className={'pageTitle'}>
        {messages.view.main.tasks[title].title}
        <Tooltip
          placement="right"
          title={messages.tooltip.gameInfo}
        >
          <InfoCircleOutlined
            onClick={() => setIsLevelInfoVisible(true)}
            className={s.infoAboutLevel}
          />
        </Tooltip>
      </h1>
      {pathname.includes(Routes.play) ? (
        <Outlet context={{ levelInfoContext }} />
      ) : (
        <section className={s.quickCountLevels}>
          {levelsGenerator(levelConfig, handleLevelChoose)}
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
      <Modal
        open={isLevelInfoVisible}
        onCancel={() => setIsLevelInfoVisible(false)}
        footer={false}
      >
        <LevelRules levelRules={levelRules} />
      </Modal>
    </main>
  );
};

export default LevelWrapper;
