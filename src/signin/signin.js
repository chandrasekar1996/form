import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './signin.css';
import '../assets/style/style.css';

const Signin = () => {
  return (
    <div className='signin'>
      <div className='signin-card'>
        <Form>
          <div className='custom-input'>
            <label>Username*</label>
            <Form.Control type='text' placeholder='Enter your Username' />
          </div>
          <div className='custom-input'>
            <label>Password*</label>
            <Form.Control type='password' placeholder='Enter your Password' />
          </div>
        </Form>
        <Button className='green-btn'>Login</Button>
      </div>
    </div>
  );
};

export default Signin;
