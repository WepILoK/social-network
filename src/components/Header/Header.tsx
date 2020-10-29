import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";


import {selectCurrentUserLogin, selectIsAuth} from "../../redux/selectors/auth_selectors";
import {logOut} from "../../redux/auth_reducer";


const {Header} = Layout;

export const Headers: React.FC<PropsType> = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth)

    const OnLogOut = () => {
        dispatch(logOut())
    }

    return (
        <Header className="header">
            <div className="logo"/>
            <Row>
                <Col span={19}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                {isAuth
                    ? <>
                        <Col span={1}>
                            <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                        </Col>
                        <Col span={4}>
                            <Button onClick={OnLogOut}>Log out</Button>
                        </Col>
                    </>
                    : <Col span={5}>
                        <Button>
                            <Link to={`/login`}>Login</Link>
                        </Button>
                    </Col>}
            </Row>
        </Header>
    )
}

type PropsType = {}