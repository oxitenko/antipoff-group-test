import "./SignUp.css";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUpdateFields, resetForm, setFieldError, clearFieldError} from "../../redux-saga/signUpState";
import {Formik, Form, Field} from 'formik';
import {FiEyeOff, FiEye} from "react-icons/fi";
import {v4 as uuidv4} from 'uuid';
import {setIsLogin} from "../../redux-saga/isLoginedState"
import {useHistory} from "react-router-dom";

export const SignUp = () => {

    let history = useHistory();
    const [toggleShowPassword, setToggleShowPassword] = useState(false);
    const [toggleShowConfirmPassword, setToggleShowConfirmPassword] = useState(false);
    const dispatch = useDispatch();
    const signup = useSelector((state) => state.signup);
    const {fieldErrors} = useSelector((state) => state.signup);
    const isHasErrors = Object.keys(fieldErrors).length;
    const eyeIconStyle = {
        color: "#808185",
        width: "1.5rem",
        height: "1.5rem",
        position: "absolute",
        right: "8px",
        top: "41px",
        cursor: "pointer"
    }
    const handleChangeField = (field) => (evt) => {
        dispatch(setUpdateFields({field, value: evt.target.value}));
    }
    const handleSubmit = () => {
        if (isHasErrors === 0) {
            const token = uuidv4();
            localStorage.setItem("token", token);
            dispatch(setIsLogin(true));
            history.push("/antipoff-group-test")
            dispatch(resetForm());
        }
        return
    };

    const handleShowPassword = () => {
        setToggleShowPassword(!toggleShowPassword);
    }

    const handleShowConfirmPassword = () => {
        setToggleShowConfirmPassword(!toggleShowConfirmPassword)
    }

    const validateField = (field, value) => {
        switch (field) {
            case 'name':
                if (!value) {
                    return 'Это обязательное поле';
                }
                if (value.length < 2) {
                    return 'Более двух символов';
                }
                if (value.length > 30) {
                    return 'Не более 30 символов';
                }
                break;
            case 'email':
                if (!value) {
                    return 'Это обязательное поле';
                }
                if (!value.includes('@')) {
                    return 'Невалидный адрес электронной почты';
                }
                break;
            case 'password':
                if (!value) {
                    return 'Это обязательное поле';
                }
                if (value.length < 8) {
                    return 'Минимум 8 символов';
                }
                if (!/[a-zA-Z]/.test(value)) {
                    return 'Только латинские буквы';
                }
                break;
            case 'confirm':
                if (!value) {
                    return 'Это обязательное поле';
                }
                if (value !== signup.password) {
                    return 'Пароли должны совпадать';
                }
                break;
            default:
                break;
        }
        return null;
    };

    const handleFieldBlur = (field, value) => {
        const error = validateField(field, value);
        if (error) {
            dispatch(setFieldError({field, error}));
        } else {
            dispatch(clearFieldError({field}));
        }
    };


    return (<div className="signup">
        <div className="signup_container">
            <h2 className="signup_title">Регистрация</h2>
            <Formik initialValues={signup}
                    onSubmit={handleSubmit}>
                <Form className="signup_form">
                    <div className="signup_field">
                        <label className="signup_label" htmlFor="name">Имя</label>
                        <Field className={!fieldErrors.name ? "signup_input" : "signup_input signup_input-error"}
                               type="text" id="name" name="name"
                               onChange={handleChangeField('name')} value={signup.name}
                               onBlur={(e) => handleFieldBlur('name', e.target.value)}
                        />
                        <div className="signup_error-field">
                            {fieldErrors.name && <p className="signup_error">{fieldErrors.name}</p>}
                        </div>
                    </div>

                    <div className="signup_field">
                        <label className="signup_label" htmlFor="email">Электронная почта</label>
                        <Field className={!fieldErrors.email ? "signup_input" : "signup_input signup_input-error"}
                               type="email" id="email" name="email"
                               autoComplete="username"
                               onChange={handleChangeField('email')} value={signup.email}
                               onBlur={(e) => handleFieldBlur('email', e.target.value)}
                        />
                        <div className="signup_error-field">
                            {fieldErrors.email && <p className="signup_error">{fieldErrors.email}</p>}
                        </div>
                    </div>

                    <div className="signup_field">
                        <label className="signup_label" htmlFor="password">Пароль</label>
                        <Field className={!fieldErrors.password ? "signup_input" : "signup_input signup_input-error"}
                               type={!toggleShowPassword ? "password" : "text"}
                               id="password"
                               name="password"
                               autoComplete="new-password"
                               onChange={handleChangeField('password')} value={signup.password}
                               onBlur={(e) => handleFieldBlur('password', e.target.value)}
                        />
                        {!toggleShowPassword ? <FiEyeOff onClick={handleShowPassword} style={eyeIconStyle}/> :
                            <FiEye onClick={handleShowPassword} style={eyeIconStyle}/>}
                        <div className="signup_error-field">
                            {fieldErrors.password && <p className="signup_error">{fieldErrors.password}</p>}
                        </div>
                    </div>

                    <div className="signup_field">
                        <label className="signup_label" htmlFor="confirm">Подтвердите пароль</label>
                        <Field className={!fieldErrors.confirm ? "signup_input" : "signup_input signup_input-error"}
                               type={!toggleShowConfirmPassword ? "password" : "text"}
                               id="confirm" name="confirm"
                               autoComplete="new-password"
                               onChange={handleChangeField('confirm')} value={signup.confirm}
                               onBlur={(e) => handleFieldBlur('confirm', e.target.value)}
                        />
                        {!toggleShowConfirmPassword ?
                            <FiEyeOff onClick={handleShowConfirmPassword} style={eyeIconStyle}/> :
                            <FiEye onClick={handleShowConfirmPassword} style={eyeIconStyle}/>}
                        <div className="signup_error-field">
                            {fieldErrors.confirm && <div className="signup_error">{fieldErrors.confirm}</div>}
                        </div>
                    </div>
                    <button className="signup_button" type="submit">Зарегистрироваться</button>
                </Form>
            </Formik>
        </div>
    </div>);
};

export default SignUp;