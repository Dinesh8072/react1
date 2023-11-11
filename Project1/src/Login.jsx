import React from "react";
import  Form  from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Link,Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';

 const Login = () => {
    const[data,setdata]=useState({
        email:"",
        password:"",
    })
    const handle =(e)=>{
      const {name,value}=e.target;
      setdata({...data, [name]: value});
    }
    const displayvalues =()=>{
      console.log(data);}
  return (
    <Container>
      <h1>Login Form</h1>
      <Form onSelect={displayvalues()}>
        <Form.Group className="mb-3 ">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" value={data.email} onChange={handle} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="regpass">Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" value={data.password} onChange={handle}  required/>
        </Form.Group>
      </Form>
      <Button className="regbtn" variant="primary">Login</Button>{' '}
      <p> I Does'nt have a account?  <Link to='/'>SignUp </Link></p>  
    </Container>
 )
}
export default Login;
