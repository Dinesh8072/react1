import React from 'react';
import { Container , Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
        <h1>Home</h1>
        <h2>Welcome solgers</h2>
        <Button  className="regbtn" variant="primary">Boom</Button>{' '}
    </Container>
  )
}

export default Home