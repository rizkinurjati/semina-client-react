import React from 'react';
import { Form } from 'react-bootstrap';

function TextInput({ name, type, value, placeholder, onChange}) {
    return (
        <Form.Control 
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default TextInput;