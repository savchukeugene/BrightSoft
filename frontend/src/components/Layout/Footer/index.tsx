import s from './styles.module.scss';
import { messages } from '../../../common/constants/messages';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, GithubOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.text}>
                    <p>{messages.view.footer.footer1}</p>
                    <p>{messages.view.footer.footer2}</p>
                    <p>{messages.view.footer.footer3}</p>
                </div>
                <div className={s.icons}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FacebookOutlined />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <TwitterOutlined />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <InstagramOutlined />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <GithubOutlined />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;