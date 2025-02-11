import React, {useState} from "react";

import {BugOutlined, BuildOutlined, InfoCircleOutlined, UserOutlined,} from '@ant-design/icons';

import {Layout, Menu, MenuProps} from "antd";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import Header from "../Header";
import PageWrapper from "../PageWrapper";

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
    const {pathname} = useLocation()

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
                }}
            >
            <PageWrapper>
                {pathname.includes('user') && <Header/>}
                <Outlet/>
                <div style={{height: '200vh'}} className="main">

                </div>
            </PageWrapper>
            </Layout>
        </Layout>
    )
}

export default MainPage