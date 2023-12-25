import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import "../../styles/Login.css";
function Login() {
  return (
    <>
      <h1 className="d-block text-center">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>
            Don,t have an Account? <a href="/signup">Sign Up</a>
          </Form.Label>
        </Form.Group>
      </Form>
    </>
  );
}

export default Login;
