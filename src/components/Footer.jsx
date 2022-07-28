import React from 'react';
import svglogo from './img/logo.svg';

function Footer() {
  return (
    <div>
            <div className='phantom' />
            <div className='footer'> GAMESTORE 
            <img src={svglogo} width={25} height={25} alt='logosvg'/>
           
            </div>
        </div>
  )
}

export default Footer