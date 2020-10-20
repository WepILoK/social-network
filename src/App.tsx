import React from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import {initializeApp} from "./redux/app_reducer";
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Preloader} from "./components/common/Preloader/Preloader";

import './App.css';

import {AppStateType} from "./redux/redux-store";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

const App: React.FC<PropsType> = (props) => {
    React.useEffect(() => {
        props.initializeApp()
    }, [])

    if (!props.initialized) return <Preloader/>

    return (
        <div className="app-wrapper">
                <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <React.Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Route path='/' exact><Redirect to='/profile'/></Route>
                        <Route exact path="/dialogs/:userId?" component={DialogsContainer}/>
                        <Route exact path="/profile/:userId?" component={ProfileContainer}/>
                        <Route exact path="/users" component={UsersContainer}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/news" component={News}/>
                        <Route exact path="/music" component={Music}/>
                        <Route exact path="/settings" component={Settings}/>
                        <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </React.Suspense>
            </div>
        </div>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

type PropsType = ReturnType<typeof mapStateToProps> & { initializeApp: () => void }