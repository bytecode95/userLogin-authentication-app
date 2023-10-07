import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios'

export default function SignUp(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
       e.preventDefault();
       if(username==="" && password===""){
            alert("These fileds are imporatant!!")
       }else{
        axios.post('http://localhost:3000/api/signup',{
            username: username,
            email:email,
            password:password
        })
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
       }

    }

 
    return(
        <>
            <Form onSubmit={handleSubmit} className='w-50 m-auto mt-5'>
                <h3 className='text-center'>User Sign Up form</h3>
                <Form.Group className="mb-3">
                    <Form.Label>User Name </Form.Label>
                    <Form.Control onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email </Form.Label>
                    <Form.Control onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100 mt-3' variant="primary" type="submit">
                    Submit
                </Button>
                
            </Form>
        </>
    )
}