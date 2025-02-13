import React, {useState} from "react";

import {BugOutlined, BuildOutlined, InfoCircleOutlined, UserOutlined,} from '@ant-design/icons';

import {Layout, Menu, MenuProps} from "antd";
import {Outlet, useNavigate} from "react-router-dom";
import PageWrapper from "../commonComponents/PageWrapper";
import {Header} from "antd/lib/layout/layout";
import Footer from "../Layout/Footer";

import s from './styles.module.scss'

const {Sider} = Layout
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    };
}

const MainPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()

    const items: MenuItem[] = [
        getItem('Пользователь', 'user', <UserOutlined/>, [
            getItem('Расписание', 'timetable'),
            getItem('Оценки', 'grade'),
        ]),
        getItem('Задания', 'tasks', <BuildOutlined/>, [
            getItem('Лабиринты', 'taskLabirint'),
            getItem('Быстрый счёт', 'quickCount'),
            getItem('Абакусы', 'tasksAbakus'),
        ]),
        getItem('О компании', 'about', <InfoCircleOutlined/>,),
        getItem('Служба поддержки', 'support', <BugOutlined/>)
    ];
    const headerItem: MenuItem[] = [
        getItem('Оценки', 'grade', <></>, []),
        getItem('Расписание', 'timetable', <></>, []),
        getItem('Мой уровень', 'el3', <></>, []),
        getItem('Редактирование информации', 'el4', <></>, []),
    ]
    const siderStyle: React.CSSProperties = {
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable',
    };

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider style={siderStyle} collapsible collapsed={collapsed}
                   onCollapse={(value) => setCollapsed(value)}>
                <Menu theme={"dark"} defaultSelectedKeys={['1']} mode="inline" items={items}
                      onClick={(value) =>
                          navigate({
                              pathname: `${value.keyPath.reverse().join('/')}`
                          })
                      }/>
            </Sider>
            <Layout
                style={{
                    background: '#002140',
                    color: 'white'
                }}
            >
                <Header style={{ display: 'flex', alignItems: 'center' }} >
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        items={headerItem}
                        style={{ flex: 1, minWidth: 0 }}
                        defaultSelectedKeys={['1']}
                        onClick={(value) =>
                            console.log(value)
                        }/>
                </Header>
                <PageWrapper>
                    <div
                        className={s.outletSettings}
                    >
                        <Outlet/>
                    </div>
                    <Footer />
                </PageWrapper>
            </Layout>
        </Layout>
    )
}

export default MainPage