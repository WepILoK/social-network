import React from "react";
import {Link} from "react-router-dom";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";
import {Menu} from "antd";


const { SubMenu } = Menu;

export const Navbar: React.FC = () => {
    return (
        <Menu
            mode="inline"
            /*defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}*/
            style={{ height: '100%' }}
        >
            <SubMenu key="sub1" icon={<UserOutlined />} title="My profile">
                <Menu.Item key="1">
                    <Link to="/profile">Profile</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/dialogs">Messages</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/music">Music</Link>
                </Menu.Item><Menu.Item key="4">
                <Link to="/settings">Settings</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Users">
                <Menu.Item key="5">
                    <Link to="/users">Users</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="News">
                <Menu.Item key="6">
                    <Link to="/news">News</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
};