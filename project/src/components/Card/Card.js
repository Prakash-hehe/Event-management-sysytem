import React from 'react'
import './C1.css';
import Nav from 'react-bootstrap/Nav';
import Example from '../Modal.js'
const Card = (props) => {
  return (
    <div style={{ marginLeft:'200px'}}>
     <div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>📨</h2>
        <h3>MaiLlist</h3>
        <p>Email marketing automation is an email or a sequence of emails that are sent after a subscriber takes a specific action. </p>
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',marginLeft :'54px'}}
            navbarScroll
          >
          {props.token?<Nav.Link href="/Mailing">Mailing List</Nav.Link> : <Example name="Mailing List"/>}
          </Nav>
          <a href="#"></a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>♾️</h2>
        <h3>Analytics</h3>
        <p>Analytics is the systematic computational analysis of data or statistics.It is used for the discovery, interpretation, and communication of meaningful patterns in data.</p>
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',marginLeft :'60px'}}
            navbarScroll
          >
          {props.token?<Nav.Link href="/Analytics">Analytics</Nav.Link> : <Example name="Analytics"/>}
          </Nav>
          <a href="#"></a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
