import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Login(){
    return(
        <>
            <Form className='w-50 m-auto mt-5'>
                <h3 className='text-center'>User Login</h3>
                <Form.Group className="mb-3">
                    <Form.Label>User Name </Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100 mt-3' variant="primary" type="submit">
                    Submit
                </Button>
                <h6>If you dont have an account please Sign Up first</h6>
            </Form>
        </>
    )
}