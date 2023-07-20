import React from 'react';
import SButton from '../../components/Button';
import TextInputWithLable from '../../components/TextInputWithLabel';
import { Form } from 'react-bootstrap';

export default function SForm({
    form,
    handleChange,
    handleSubmit,
    isLoading
}) {
  return (
    <Form>
        <TextInputWithLable 
            label="Email Adress" 
            name="email"
            value={form.email}
            type="email" 
            placeholder="Enter email"
            onChange={handleChange}
        />
        <TextInputWithLable 
            label="Pssword" 
            name="password"
            value={form.password}
            type="password" 
            placeholder="Enter password"
            onChange={handleChange}
        />
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <SButton loading={isLoading} disabled={isLoading} action={handleSubmit} variant="primary" type="submit">
            Submit
        </SButton>
    </Form>
  );
}
