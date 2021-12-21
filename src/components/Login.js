import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return username.length > 5 && password.length > 8;
    }
  
    function onSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div className="Login">
        <Form onSubmit={onSubmit}>
          <Form.Group className="username" controlId="username">
            <Form.Label>Username</Form.Label>
            <br/>
            <Form.Control
              autoFocus
              type="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="password" controlId="password">
            <Form.Label>Password</Form.Label>
            <br/>
            <Form.Control
              type="password"
              name="password"     
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="submitBtn" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
    );
  }