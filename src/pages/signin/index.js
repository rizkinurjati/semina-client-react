import React, {useState} from 'react';
import {Form, Container, Card} from 'react-bootstrap';
import SButton from '../../components/Button';
import SAlert from '../../components/Allert';
import TextInputWithLable from '../../components/TextInputWithLabel';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { config } from '../../configs';
import SForm from './from';


function PageSignin() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    };
    const [alert, setAlert] = useState({
        status: false,
        message: '',
        type: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const res = await axios.post(
                'http://localhost:9000/api/v1/cms/auth/signin',
                form
            );
            localStorage.setItem('token', res.data.data.token);
            setIsLoading(false);
            navigate('/');
        } catch (err) {
            setIsLoading(false);
            setAlert({
                status:true,
                message:err?.response?.data?.msg,
                type: 'danger'
            });
        }
    };
  return (
    <Container md={12}>
        <div className='m-auto' style={{ width: '50%'}}>
            {alert.status && <SAlert message={alert.message} type={alert.type}/>}
        </div>
    <Card style={{ width: '50%' }} className='m-auto md-5'>
    <Card.Body>
        <Card.Title className='text-center'>FORM LOGIN</Card.Title>
        <SForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
        />
    </Card.Body>
    </Card>
    </Container>
  );
}

export default PageSignin;
