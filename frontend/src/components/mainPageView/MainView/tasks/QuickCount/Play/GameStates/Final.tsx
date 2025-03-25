import s from '../styles.module.scss';
import { Button, Form, Input } from 'antd';

const Final = () => {
  return (
    <>
      <div
        className={s.gameText}
        style={{ fontSize: '25px' }}
      >
        {'Время истекло. Пожалуйста, введите ваш ответ в поле ниже:'}
      </div>
      <Form>
        <Form.Item>
          <Input placeholder={'Ваш ответ'} />
        </Form.Item>
        <Form.Item>
          <Button htmlType={'submit'}>Проверить</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Final;
