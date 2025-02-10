import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-white ">
            <div className="max-w-7xl mx-auto px-4  sm:px-4 lg:px-8  ">
                <div className="flex flex-wrap ">
                    <div className="flex flex-col text-start rounded-lg p-8 pl-24 w-full md:w-1/2">
                        <h2 className="text-lg font-bold ">Get In Touch</h2>
                        <p className="">the quick fox jumps over the lazy dog</p>
                        <div className="flex mt-4">
        <button className="mr-4  ">
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#23A6F0' }} />
        </button>
        <button className="mr-4">
          <FontAwesomeIcon icon={faInstagram} size="2x"  style={{ color: '#23A6F0' }}/>
        </button>
        <button className="mr-4 ">
          <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#23A6F0' }}/>
        </button>
      </div>
                    </div>
                    <div className="flex flex-col text-start rounded-lg p-7 pl-24 w-full md:w-1/4">
                        <h2 className="text-lg font-bold">Company Info</h2>
                        <ul className="mt-4">
                            <li><Link to="/about" >About Us</Link></li>
                            <li><Link to="/Carrier" >Carrier</Link></li>
                            <li><Link to="/WeAreHiring" >We are Hiring</Link></li>
                            <li><Link to="/Blog" >Blog</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-start rounded-lg p-7 pl-24 w-full md:w-1/4">
                        <h2 className="text-lg font-bold">Features</h2>
                        <ul className="mt-4">
                            <li><Link to="/BusinessMarketing">Business Marketing</Link></li>
                            <li><Link to="/UserAnalytic">User Analytic</Link></li>
                            <li><Link to="/LiveChat">Live Chat</Link></li>
                            <li><Link to="/UnlimitedSupport">Unlimited Support</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            

        </footer>
    );
}

export default Footer;