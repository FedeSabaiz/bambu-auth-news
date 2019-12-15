import React from 'react';

const Input = ({label, idname, name, type, change, placeholder, value, required}) => {
    return (
        <>
            <div>
                <label htmlFor="">{label}</label>
                <input 
                    id={idname}
                    name={name}
                    type={type}
                    onChange={change}
                    placeholder={placeholder}
                    value={value}
                    required={required}
                >
                </input>
            </div>
        </>
    );
}
 
export default Input;