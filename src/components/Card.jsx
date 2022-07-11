import React from 'react';
import plus from './img/plus.svg';
import heard from './img/heardlike.svg';
import '../index.scss'; 
import svglogo from './img/logo.svg';




function Card() {
  return (
    <div className='d-flex'>
      <div className ='card'>
        <div className='favorite'>
          <img src={heard} alt='like'/>
        <div/>
        
          <img width={133} height={112} src={svglogo} alt= 'crad'/>
        
        <p>Игра года</p>
        <div className ='d-flex justify-between align-center'>
            <div className='d-flex flex-column '>
                <span>Цена:</span>
                <b>4999rub</b>
            </div>
            <button className='button'>
            <img src={plus} alt='plus'/>
            </button>
        </div>
    </div>
    </div>
     </div>
  )
}

export default Card;