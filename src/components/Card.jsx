import React from 'react';
import plus from './img/plus.svg';
import heard from './img/heardlike.svg';





function Card({title, price, imageUrl}) {
 
  return (
    <div className='d-flex'>
      <div className ='card'>
        <div className='favorite'>
          <img src={heard} alt='like'/>
        <div/>
        
          <img width={132} height={201} src={imageUrl} alt= 'crad'/>
        
        <p>{title}</p>
        <div className ='d-flex '>
            <div className='d-flex flex-column '>
                <span>Цена:</span>
                <b>{price}</b>
            
            <div className='d-flex flex-row align-center justify-between '>Добавить
            <i className=' mr-10 ml-10'  >3</i>
            <button className='button'>
            <img src={plus} alt='plus'/>
            </button></div></div>
        </div>
    </div>
    </div>
     </div>
  )
}

export default Card;