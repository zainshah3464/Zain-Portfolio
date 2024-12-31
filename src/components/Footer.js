import React from 'react';

const Footer = () => {

  const currentDate = new Date();
  const formattedDate = currentDate.getFullYear();

  return (
    <div className='footer-container'>
      <p className='copyright-text left'>Created by <span className="footer-name">ZAIN ALI SHAH</span></p>
      <p className='copyright-text right'>Copyright © {formattedDate}. All Rights Reserved by ZAIN SHAH.</p>
    </div>
  );
};

export default Footer;
