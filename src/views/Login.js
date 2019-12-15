import React from 'react';
import Input from '../common/Input';
import firebase from '../utils/firebase';
import useForm from '../hooks/useForm';
import 'firebase/auth';

function Login({history}){

    const catchData = async (inputs) => {
        const data = await firebase.auth().signInWithEmailAndPassword(inputs.email, inputs.password);
        console.log(data)
        if(data) {
            sessionStorage.setItem('jtToken', data);
            history.push('/dashboard');
        }
        // if (error) alert(`Error con tu login: ${error}`);
    };

    const {
        inputs,
        handleInputChange,
        handleSubmit
    } = useForm(catchData);

    return(
        <>
            <form onSubmit={handleSubmit}>
                < Input
                name = "email"
                label = "Correo:"
                type = "email"
                placeholder = "Escribe tu email"
                value={inputs.email}
                change={handleInputChange}
                required={true}
                />
                < Input
                name = "password"
                label = "Password:"
                type = "password"
                placeholder = "Password"
                value={inputs.password}
                change={handleInputChange}
                required={true}
                />
                <div className="clearfix mt-4">
                    <button type="submit" className="btn btn-primary" >Entrar</button>
                </div>
            </form>
        </>
    );
};

export default Login;
