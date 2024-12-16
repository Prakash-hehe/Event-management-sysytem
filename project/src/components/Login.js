import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import axios from 'axios'


function SignIn(props) {
  const [validated, setValidated] = useState(false);
    
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLogin=(event)=>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      axios.get('http://localhost:3001/login').then(response=>{
        
      const findUser = response.data.filter(user=> user.username === username && user.password === password)
      
        if(findUser.length !== 1)
        {
          alert("Invalid Login Credentials")
        }
        else{
          console.log(response.data)

          props.setToken({token : findUser[0].token})
          props.setUser(findUser[0])
          window.location.reload(false);
        }
      })
    }

    setValidated(true);
  }

  
  if(!props.token)
  return (
    <>
    <p>                    </p>
    <Card style={{ width: '60rem' , padding:'1cm' ,height : '400px', display:'flex', marginTop:'1cm', margin:'auto' }}>
   <div >
   <h3 style={{marginBottom:'-600px'}}>Sign In</h3>
    <Form noValidate validated={validated} >

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
          <Form.Control   onChange={e => setPassword(e.target.value)}type="password" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            Please enter your password
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" >
      <div className='d-flex justify-content-center'>
      <Form.Check style={{color:'GrayText'}}
            type="checkbox"
            label="Remember Me"
          />
        </div>
      </Form.Group>
      <Button onClick={handleLogin}>Login</Button>
    </Form>
    </div>
    </Card>
    <footer id="footer">© 2022 Copyright SDP Project</footer>
    </>
  );
  else{
    return(
      <>
      Welcome
      </>
    )
  }
}
export default SignIn;