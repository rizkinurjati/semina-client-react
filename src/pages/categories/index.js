import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import SButton from '../../components/Button';
import SBreadCrumb from '../../components/Breadcrumb';
import SNavbar from '../../components/Navbar';
import axios from 'axios';

export default function PageCategories() {
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const getCategoriesApi = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get('http://localhost:9000/api/v1/cms/categories',{
                    headers: {
                        Authorization : `Bearer ${token}`,
                    }
                });
                console.log(res.data);
                setData(res.data.data);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                console.log(err);
            }
        };
        console.log('useEffect');
        getCategoriesApi();
    },[]);


    if (!token) return <Navigate to="/signin" replace="true" />;
  return (
    <>
    {console.log('render')}
      <SNavbar/>
    <Container className='mt-3'>
      <SBreadCrumb textSecound='categories'/>
      <SButton action={() => navigate('/categories/create')}> Tambah </SButton>

      <Table striped bordered hover className="mt-2" variant='dark'>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            isLoading ? (
                <tr>
                    <td colSpan={data.length + 1}  style={{textAlign:'center'}}>
                        <div className='flex items-center justify-center'>
                            <Spinner animation='grow' variant='light'/>
                        </div>
                    </td>
                </tr>
            ) : (
                data.map((data, index) => (
                    <tr key={index}>
                        <td>{(index += 1)}</td>
                        <td>{data.name}</td>
                        <td>Otto</td>
                    </tr>
                ))
            )}
      </tbody>
    </Table>
    </Container>
  </>
  );
}

