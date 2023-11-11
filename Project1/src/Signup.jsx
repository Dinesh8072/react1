import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function Signup() {

  const[data,setdata]=useState({
    name:"",
    email:"",
    password:"",
})
const handle =(e)=>{
  const {name,value}=e.target;
  setdata({...data, [name]: value});
}
const displayvalues =()=>{
  console.log(data);
}
  return (
    <Container>
       <h1>Regstratiom Form</h1>
      <Form onSelect={displayvalues()} >
       <Form.Group className="mb-3 ">
          <Form.Label className="regname" >Name</Form.Label>
          <Form.Control type="text"  name="name" value={data.name} onChange={handle}   />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"name="email" value={data.email} onChange={handle} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="regpass">Password</Form.Label>
          <Form.Control type="password" name="password" value={data.password} onChange={handle} />
        </Form.Group>
      </Form>
      <Button  className="regbtn" variant="primary">register</Button>{' '}
      <p>Already have a account?  <Link to='/login'>Login </Link></p> 
    </Container>
  );
}

export default Signup;