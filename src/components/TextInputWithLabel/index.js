import React from 'react'
import { Form } from 'react-bootstrap';
import TextInput from '../TextInput';

function TextInputWithLable({
    label,
    name,
    type, 
    value, 
    placeholder, 
    onChange
}) {
  return (
    <Form.Group className="mb-2" >
        <Form.Label>{label}</Form.Label>
        <TextInput
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    </Form.Group>
  );
}

export default TextInputWithLable;
