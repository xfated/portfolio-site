import React from 'react';
import './Footer.css'
import { MyInfo } from '../profile/myinfo';

const Footer = (props) => {
    return(
        <div className="footer">
           <div className="divider"></div>
           <div className="footer-content flex flex-vertical-center flex-horizontal-center"> 
                <div>
                    <blockquote className="blockquote text-center flex">
                        <p className="quote mb-0">
                            <i className="quote-icon fa fa-broom fa-pull-left"></i>
                            {MyInfo.footer_quote}
                        </p>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default Footer;