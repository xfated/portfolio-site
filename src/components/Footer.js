import React from 'react';
import './Footer.css'
import { MyInfo } from '../profile/myinfo';

const Footer = (props) => {
    return(
        <div className="footer">
           <div className="divider"></div>
           <div className="footer-content flex flex-vertical-center flex-horizontal-center"> 
                <blockquote className="blockquote text-center">
                    <p className="quote mb-0">
                        <i class="fa fa-broom"></i>
                        {MyInfo.footer_quote}
                    </p>
                </blockquote>
            </div>
        </div>
    );
}

export default Footer;