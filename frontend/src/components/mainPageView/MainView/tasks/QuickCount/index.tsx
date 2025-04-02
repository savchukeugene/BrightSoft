import { FC, useState } from 'react';
import { messages } from '../../../../../common/constants/messages.ts';
import { quickCountLevelsGenerator } from '../../../../../common/utils/generatotrs.tsx';
import { levelsConfig } from './config.tsx';

import s from './styles.module.scss';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ROOTS } from '../../../../../common/constants/roots.tsx';
import { GamesLevelType } from '../../../../../types/commonTypes.ts';
import { Button, Form, Input, Modal } from 'antd';
import FormItem from 'antd/es/form/FormItem';

const QuickCount: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const [isCustomVisible, setIsCustomVisible] = useState<boolean>(false);
  const [form] = Form.useForm();

  const handleLevelChoose = (param: GamesLevelType): void => {
    if (param === 'custom') {
      return setIsCustomVisible(true);
    }
    const newSearchParams: URLSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('level', param);
    navigate({
      pathname: pathname.concat(ROOTS.play),
      search: newSearchParams.toString(),
    });
  };
  return (
    <main>
      <h1 className={'pageTitle'}>{messages.view.main.tasks.quickCount.title}</h1>
      {pathname.includes(ROOTS.play) ? (
        <Outlet />
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
            <Form
              className={s.quickCountForm}
              form={form}
              onFinish={(values) => console.log(values)}
            >
              <h1> {messages.view.main.tasks.quickCount.formTitle}</h1>
              <FormItem
                name={'duration'}
                label={messages.view.main.tasks.quickCount.duration}
                rules={[
                  {
                    required: true,
                    message:
                      messages.view.main.tasks.quickCount.validateMessage(`\${label}`),
                  },
                ]}
              >
                <Input />
              </FormItem>
              <FormItem
                name={'period'}
                label={messages.view.main.tasks.quickCount.period}
                rules={[
                  {
                    required: true,
                    message:
                      messages.view.main.tasks.quickCount.validateMessage(`\${label}`),
                  },
                ]}
              >
                <Input />
              </FormItem>
              <FormItem
                label={messages.view.main.tasks.quickCount.range}
                rules={[{ required: true }]}
              >
                <FormItem
                  name={'start'}
                  rules={[
                    {
                      required: true,
                      message: '',
                    },
                  ]}
                  style={{ display: 'inline-block', marginRight: '8px' }}
                >
                  <Input />
                </FormItem>
                <FormItem
                  name={'end'}
                  rules={[
                    {
                      required: true,
                      message: '',
                    },
                  ]}
                  style={{ display: 'inline-block' }}
                >
                  <Input />
                </FormItem>
              </FormItem>
              <Button
                className={s.continueButton}
                htmlType={'submit'}
              >
                {messages.button.continue}
              </Button>
            </Form>
          </Modal>
        </section>
      )}
    </main>
  );
};

export default QuickCount;
