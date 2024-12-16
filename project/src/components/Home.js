import React from 'react'
import Card from './Card/Card'
import Car from './Carousel'
import mysvg from './images/layered-waves-haikei2.svg';
import Companies from './Companies/Companies'
import Button from './AskaQues/Button'
import Foot from './Footer/Foot'
{/*

import Form from './Form/Form'
import Foot from './Footer/Foot'*/}
function Home() {
  return (
    <>
     <div style={{ backgroundImage: `url(${mysvg})` , backgroundRepeat:"no-repeat", height:700}}>
    <h2>‎</h2>
   <Car/>
   <p style={{color:'white',marginTop:'50px'}}>
    LUNA is a one stop solution to your marketing needs providing real-time Analytics Solutions and Automated emailing
    </p>
   </div>
   <Card/>
   <Companies/>
   <div>
   <Button/>
   <Foot/>
   </div>
   </>
  )
}
export default Home;
