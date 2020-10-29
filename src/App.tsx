import React from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {Breadcrumb, Layout} from 'antd';

import {initializeApp} from "./redux/app_reducer";
import {Navbar} from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Users} from "./components/Users/Users";
import {Headers} from "./components/Header/Header";
import {Login} from "./components/Login/Login";
import {Preloader} from "./components/common/Preloader/Preloader";

import './App.css';
import 'antd/dist/antd.css';

import {AppStateType} from "./redux/redux-store";


const {Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

const App: React.FC<PropsType> = (props) => {
    React.useEffect(() => {
        props.initializeApp()
    }, [])

    if (!props.initialized) return <Preloader/>

    return( <Layout>
            <Headers/>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={200}>
                        <Navbar/>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <React.Suspense fallback={<Preloader/>}>
                            <Switch>
                                <Route path='/' exact><Redirect to='/profile'/></Route>
                                <Route exact path="/dialogs/:userId?" component={DialogsContainer}/>
                                <Route exact path="/profile/:userId?" component={ProfileContainer}/>
                                <Route exact path="/users" component={Users}/>
                                <Route exact path="/login" component={Login}/>
                                <Route exact path="/news" component={News}/>
                                <Route exact path="/music" component={Music}/>
                                <Route exact path="/settings" component={Settings}/>
                                <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </React.Suspense>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Social network 2020 on React</Footer>
        </Layout>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

type PropsType = ReturnType<typeof mapStateToProps> & { initializeApp: () => void }