import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Switch, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";

// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";

const DialogsContainer = React.lazy(()=> import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(()=> import("./components/Profile/ProfileContainer"));

// const  = React.lazy(()=> import())

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer className="app-wrapper_header"/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <React.Suspense fallback={<Preloader/>}>
                        <Switch>
                        <Route exact path="/dialogs" component={DialogsContainer}
                               /*render={() => <DialogsContainer/>}*//>
                        <Route exact path="/profile/:userId?" component={ProfileContainer}
                               /*render={() => <ProfileContainer/>}*//>
                        <Route exact path="/users" component={UsersContainer}
                               /*render={() => <UsersContainer/>}*//>
                        <Route exact path="/login" component={Login}
                               /*render={() => <Login/>}*//>
                        <Route exact path="/news" component={News}
                               /*render={() => <News/>}*//>
                        <Route exact path="/music" component={Music}
                               /*render={() => <Music/>}*//>
                        <Route exact path="/settings" component={Settings}
                               /*render={() => <Settings/>}*//>
                            </Switch>
                    </React.Suspense>

                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
