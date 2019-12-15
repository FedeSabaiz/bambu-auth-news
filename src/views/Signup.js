import React from 'react';
import useForm from '../hooks/useForm';
import firebase from '../utils/firebase';
import Input from '../common/Input';
import 'firebase/auth';

const Signup = ({history}) => {

    const catchData = async (inputs) => {
        if(inputs.password === inputs.confirm_password){
            delete inputs.confirm_password;
            console.log(inputs)
            const data = await firebase.auth().createUserWithEmailAndPassword(inputs.email, inputs.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode)
            var errorMessage = error.message;
            console.log(errorMessage)
            // ...
            });
            console.log(data);
            if(data){
                if(data.errors) console.log(data.errors);
                delete inputs.password;
                await firebase.firestore().collection('users').add({
                                ...inputs
                            });
                history.push('/dashboard');
            }
        } else {
            alert('Tu contraseña no coincide');
        }
    };

    const {
        inputs,
        handleInputChange,
        handleSubmit
    } = useForm(catchData);

    return (
        <>
             <form onSubmit={handleSubmit}>
                < Input
                name = "first_name"
                label = "Nombre"
                type = "text"
                placeholder = "Escribe tu nombre"
                value={inputs.first_name}
                change={handleInputChange}
                required={true}
                />
                < Input
                name = "last_name"
                label = "Apellido"
                type = "text"
                placeholder = "Escribe tu apellido"
                value={inputs.last_name}
                change={handleInputChange}
                required={true}
                />
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
                label = "Password: "
                type = "password"
                placeholder = "Escribe tu password"
                value={inputs.password}
                change={handleInputChange}
                required={true}
                />
                < Input
                name = "confirm_password"
                label = "Confirma tu password: "
                type = "password"
                placeholder = "Escribe de nuevo tu password"
                value={inputs.confirm_password}
                change={handleInputChange}
                required={true}
                />
                <div className="clearfix mt-4">
                    <button>Registrar</button>
                </div>
            </form>
        </>
    );
}
 
export default Signup;