import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from "../assets/transparent-logo.png";

const Footer = () => {
    return (
        <footer>
            <div id="footer__logo--container">
                <img id='footer__logo' src={footerLogo} alt="" />
            </div>
            <div id="copyright">
                <p id='footer__copyright'>&copy; Copyright Porkins 2022</p>
            </div>
            <div id="footer__links--container">
                <h6>How can we help you?</h6>
                <ul id='footer__link--list'>
                    <li>
                        <Link className='footer__link' to='/'>Home</Link> 
                    </li>
                    <li>
                        <Link className='footer__link' to='/about'>About</Link> 
                    </li>
                    <li>
                        <Link className='footer__link' to='/store'>Store</Link> 
                    </li>
                    <li>
                        <Link className='footer__link' to='/contact'>Contact</Link> 
                    </li>
                    <li>
                        <Link className='footer__link' to=''>Privacy Policy</Link> 
                    </li>
                    <li>
                        <Link className='footer__link' to=''>Terms of Service</Link> 
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
