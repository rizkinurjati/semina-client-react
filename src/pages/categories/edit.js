import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SBreadCrumb from '../../components/Breadcrumb';
import SAlert from '../../components/Allert';
import Form from './form';
import { useNavigate, useParams } from 'react-router-dom';

function CategoryEdit() {
  const navigate = useNavigate();

  const { categoryId } = useParams();
  const [form, setForm] = useState({
    name: '',
  });

  const [alert, setAlert] = useState({
    status: false,
    type: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchOneCategories = async () => {
    // const res = await getData(`/cms/categories/${categoryId}`);
    // setForm({ ...form, name: res.data.data.name });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
        // const res = await putData(`/cms/categories/${categoryId}`, form);
        navigate('/categories');
        setIsLoading(false);
    } catch (err) {    
        setIsLoading(false);
        setAlert({
            ...alert,
            status: true,
            type: 'danger',
            message: err.response.data.msg,
      });
    }
  };
  return (
    <Container className='mt-3'>
      <SBreadCrumb
        textSecound={'Categories'}
        urlSecound={'/categories'}
        textThird='Edit'
      />
      {alert.status && <SAlert type={alert.type} message={alert.message} />}
      <Form
        edit
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default CategoryEdit;
