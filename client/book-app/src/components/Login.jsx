import { useState } from "react";
// import {validateEmail} from ""
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
export default function Login() {

    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");
    
    function handleSubmit(event){
        event.preventDefault();  
    }
    return(
        <div className="Login">

        <Form onSubmit={handleSubmit}>
  
          <Form.Group size="lg" controlId="email">
  
            <Form.Label>Email</Form.Label>
  
            <Form.Control
  
              autoFocus
  
              type="email"
  
              value={email}
  
              onChange={(event) => setEmail(event)}
  
            />
  
          </Form.Group>
  
          <Form.Group size="lg" controlId="password">
  
            <Form.Label>Password</Form.Label>
  
            <Form.Control
  
              type="password"
  
              value={password}
  
              onChange={(event) => setPassword(event)}
  
            />
  
          </Form.Group>
  
          <Button block size="lg" type="submit">
  
            Login
  
          </Button>
  
        </Form>
  
      </div>
    ) 
}