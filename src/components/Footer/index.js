import React from 'react';
import './styles.scss';
import 'bulma/css/bulma.min.css';

import Instagram from './Instagram.svg';
import Youtube from './YouTube.svg';
import Facebook from './Facebook.svg';

const Footer = () => (
    <footer className="footer footCont">  
        <div className="content has-text-centered footerContent">
            <div className='arr'>
                <p>
                    BlackMezas<sup>®</sup> - © 2022 - All rights reserved
                </p>
            </div>
            <div className='socialIcons'>
                <img src={Instagram} alt='' width={30}/>
                <img src={Youtube} alt='' width={30}/>
                <img src={Facebook} alt='' width={30}/>
            </div>
        </div>
    </footer>
)

export default(Footer)