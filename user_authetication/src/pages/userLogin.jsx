import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios'

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(username==="" && password===""){
            alert("All fileds are required!!")
        }else{
            axios.post('http://localhost:3000/api/login',{
                username: username,
                password: password
            })
            .then((response)=>{
                console.log(response.data)
            })
            .catch((Error)=>{
                console.log(Error)
            })
        }
    }
 


    return(
        <>
            <Form onSubmit={handleSubmit} className='w-50 m-auto mt-5'>
                <h3 className='text-center'>User Login</h3>
                <Form.Group className="mb-3">
                    <Form.Label>User Name </Form.Label>
                    <Form.Control onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Enter Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100 mt-3' variant="primary" type="submit">
                    Submit
                </Button>
                <h6>If you dont have an account please Sign Up first</h6>
            </Form>
        </>
    )
}