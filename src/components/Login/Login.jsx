import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../units/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.scss"
// import {Field, Form} from "react-final-form";

const Login = (props) => {
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};
const LoginForm = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"}
                       validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"}
                       validate={[required]} component={Input}
                       type={"password"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>
                Remember me
            </div>
            { error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login);