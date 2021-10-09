import React from 'react';
import validator from 'validator'; //npm i validator
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterFirebase } from '../../actions/auth';


export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui); 

    const [formValues, handleInputChange] = useForm({
        name: 'Diego',
        email: 'dyq@gmail.com',
        password: '123456',
        password2:'123456',
    });
    
    const {name, email, password, password2} = formValues;
    
    const handleRegister = (e) => {
        e.preventDefault();

        if(isFormValid()){
            console.log("entro")
            dispatch( startRegisterFirebase(email, password, name) );
        }
    }

    const isFormValid = () => {

        if( name.trim().length <= 3){
            dispatch( setError( 'Name is required' ));
            return false;
        } else if( !validator.isEmail( email )){
            dispatch( setError( 'Email invalid' ));
            return false;
        } else if( password !== password2 || password.length < 6){
            dispatch( setError( 'Password invalid' ));
            return false;
        }
        dispatch( removeError() );
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit = { handleRegister }>

                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }

                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value = { name }
                    onChange = { handleInputChange }
                />
                <input
                    className="auth__input"
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    autoComplete="off"
                    value = { email }
                    onChange = { handleInputChange }
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value = { password }
                    onChange = { handleInputChange }
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password Confirm"
                    name="password2"
                    value = { password2 }
                    onChange = { handleInputChange }
                />
                <button
                    className="btn btn-primary btn-block mb-1"
                    type="submit"
                >
                    Register
                </button>

               
                <Link 
                    className="link"
                    to="/auth/login"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
