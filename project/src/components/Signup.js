import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import axios from 'axios'


function SignUp({setToken,setUser}) {
  const [validated, setValidated] = useState(false);

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{

      const newUser={
        name : name,
        email : email,
        username : username,
        password : password,
      }

      axios.post('http://localhost:3001/new-login',newUser).then(response=>{
        console.log(`${response.data.name} added successfully`)
        setToken({token : response.data.token})
        setUser(response.data)
      })


    
    }
    setValidated(true);
  };

  return (
    <>
    <p>                    </p>
    <Card style={{ width: '60rem' , padding:'1cm' , display:'flex',height : '700px', marginTop:'1cm', margin:'auto' }}>
   <div >
   <h3 style={{marginBottom:'-600px'}}>Register</h3>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

    <Row className="mb-3">
        
       
        <Form.Group as={Col} md={{ span: 4, offset: 4 }} controlId="validationCustom05">
          <Form.Label>Company Name</Form.Label>
          <Form.Control onChange={e => setName(e.target.value)} type="text" placeholder="Company Name" required />
          <Form.Control.Feedback type="invalid">
            Please enter your Name
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        
       
        <Form.Group as={Col} md={{ span: 4, offset: 4 }} controlId="validationCustom05">
          <Form.Label>Email</Form.Label>
          <Form.Control  onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" required />
          <Form.Control.Feedback type="invalid">
            Please enter your email
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={{ span: 4, offset: 4 }} controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
            onChange={e => setUserName(e.target.value)}
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        
       
        <Form.Group as={Col} md={{ span: 4, offset: 4 }} controlId="validationCustom05">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            Please enter your password
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} md={{ span: 4, offset: 4 }} controlId="validationCustom05">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Re-Enter Password" required />
          <Form.Control.Feedback type="invalid">
            Please enter your password
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Button type="submit">Register</Button>
    </Form>
    </div>
    </Card>
    <footer id="footer">© 2022 Copyright SDP Project</footer>
    </>
  );
}
export default SignUp;