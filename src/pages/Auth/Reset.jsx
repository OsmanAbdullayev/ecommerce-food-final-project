import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

const Reset = () => {
  return (
    <Container className="mt-5">
    <div className="d-flex flex-column justify-content-center align-items-center ms-5">
      <div className="text-center">
        <h4 className="my-2 pb-3">Please, fill in your details</h4>
      </div>

      <Form className="w-50 ">

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Control type="email" placeholder="Enter email" required/>
          </Form.Group>

        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      <div className="d-flex justify-content-between align-items-center w-100 my-4">
        <Link className="text-muted" to="/login">Log In</Link>
        <Link className="text-muted" to="/signup">Sign Up</Link>
      </div>
      </Form>
    </div>
  </Container>
  )
}

export default Reset