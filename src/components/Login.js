import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { push } = useHistory();
  
    function validateForm() {
      return username.length > 5 && password.length > 8;
    }
  
    function onSubmit(event) {
      event.preventDefault();
      axios.post('https://water-my-plants-build-week.herokuapp.com/api/auth/login', {username, password})
        .then(esp=>{
          const { token, user_id, username } = esp.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user_id", user_id);
          localStorage.setItem("username", username);
          push('/plants')
        })
        .catch(err=>{
          console.error(err);
        })
    }
  
    return (
      <div className="login">
        <Form onSubmit={onSubmit}>
          <Form.Group className="username" controlId="username">
          
            <h2 className='welcome'>Welcome</h2>
            <Form.Control
              autoFocus
              required
              type="username"
              className="form-box"
              name="username"
              value={username}
              placeholder = "Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="password" controlId="password">
            
            <Form.Control
              required
              type="password"
              className="form-box"
              name="password"     
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="submitBtn" type="submit" >
            Login
          </Button>
        </Form>
      </div>
    );
  }
