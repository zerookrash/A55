import React from 'react';
import './Footer.css';

const date = new Date().getFullYear();

export const Footer = () => {
  return (
    <div class="footer fixed-bottom">
      This is the technical test for <strong>A55</strong> | Developed by <strong> Mario Villela </strong> | Copyright © {date}
    </div>
  )
}
