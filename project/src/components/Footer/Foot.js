import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import logo2 from '../images/logo2.png'
import './F1.css'
const Foot = () => {
  return (
    <div>
      <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
        <div>
 <a href="#" class="fa fa-facebook"> </a>     
 <a href="#" class="fa fa-instagram"></a>  
 <a href="#" class="fa fa-youtube"></a>  
 <a href="#" class="fa fa-pinterest"> </a>  
 <a href="#" class="fa fa-linkedin"> </a>  
  </div> 
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>          
          
          <small class='website-rights'>SDP-PMS © 2022</small>
          
        </div>
      </section>
    </div>
      
</div>
  )
}

export default Foot
