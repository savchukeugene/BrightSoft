import { FC, ReactNode } from "react";
import s from './styles.module.scss'

interface IPageWrapper {
    children?: ReactNode;
    width?: number;
}

const PageWrapper: FC<IPageWrapper> = ({ children, width  }) => {
    return (
        <div
            className={s.pageWrapperSettings}
            style={width ? {
                maxWidth: width
            } : {}}
        >
            {children}
        </div>
    );
};

export default PageWrapper;
