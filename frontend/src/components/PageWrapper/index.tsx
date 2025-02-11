import { FC, ReactNode } from "react";
import s from './styles.module.scss'

interface IPageWrapper {
    children?: ReactNode;
}

const PageWrapper: FC<IPageWrapper> = ({ children }) => {
    return (
        <div
            className={s.pageWrapperSettings}
        >
            {children}
        </div>
    );
};

export default PageWrapper;
