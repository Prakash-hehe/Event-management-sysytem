import React from 'react'
import './button.css'
import { useState } from 'react';
import axios from 'axios';
const Button = () => {
	const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <div style={{ display : 'initial'}}>
        <header class="header">
	<div class="brand-box">
		<span class="brand">LUNA</span>
	</div>
	
	<div class="text-box">
		<h1 class="heading-primary">
			<span class="heading-primary-main">Wanna know about something?</span>
			<span class="heading-primary-sub">We'll help you</span>
		</h1>
    <a class=" btn btn-white" onClick={handleClick} >Ask a Question</a>
		{isShown && (
        <div style={{marginBottom : '-900px',marginTop : '20px' }}>
		    <h1 style={{textDecoration : 'overline'}}> Click on the button<br/>
               Fill the Form<br/>
                       We'll answer your Queries shortly <br/>
                              through mail</h1>
        </div>
      )}
      {/* 👇️ show component on click */}
      {isShown || <Box />}
	</div>
</header>
     {/*<button class="button-56" role="button">Button 55</button>*/}
    </div>
  )
}
export default Button;

function Box() {

  const [qname,setQname] = useState()
  const [qemail,setQemail] = useState()
  const [querys,setQuery] = useState()

  const handleSubmit = () =>{
    const newquery = {
      qname : qname,
      qemail : qemail,
      query : querys
    }

    axios.post('http://localhost:3001/queries',newquery).then(response=>{
          console.log(response.data, " added successfully")
    })
}

	return (
	  <div>
		<div class="wrapper">
    <form class="former">
      <div class="pageTitle titler">Post Your Query</div>
      <input type="text" class="name formEntrypoint" placeholder="Name" onChange={e=> setQname(e.target.value)} />
      <input type="text" class="email formEntrypoint" placeholder="Email" onChange={e=> setQemail(e.target.value)}/>
      <textarea class="message formEntrypoint" placeholder="Message" onChange={e=> setQuery(e.target.value)}></textarea>
      <button  onClick={handleSubmit}>Submit</button>
    </form>
  </div>
	  </div>
	);
  }
