import s from './styles.module.scss';
import { messages } from '../../../common/constants/messages.ts';

const Footer = () => {
  return (
    <footer className={s.footer}>
      {messages.view.footer.footer1}
      <br />
      {messages.view.footer.footer2}
      <br />
      {messages.view.footer.footer3}
    </footer>
  );
};

export default Footer;
