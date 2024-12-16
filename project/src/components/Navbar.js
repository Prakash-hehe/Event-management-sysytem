import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Example from './Modal.js'
import img from './images/logo2.png'

function NavScrollExample(props) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#"> <img
              src={img}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />{' '}LUNA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/SignIn">Sign In</Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link>
           {props.token?<Nav.Link href="/Analytics" >Analytics</Nav.Link> : <Example name="Analytics"/>}
            {props.token?<Nav.Link href="/Mailing">Mailing List</Nav.Link> : <Example name="Mailing List"/>}
       
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;