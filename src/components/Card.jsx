import React from 'react';
import plus from './img/plus.svg';






function Card({title, price, imageUrl}) {
 
  return (
    
      <div className ='card'>
        
        
          <img width={198}  src={imageUrl} alt= 'crad'/>
        
        <p>{title}</p>
        <div className ='d-flex flex-column '>
            <div className='d-flex '>
                <span>Цена:</span>
                <b>{price}</b>
            </div>
            <div className='d-flex flex-row '>Добавить
            <i className='mr-10 ml-10'>количество</i>
            <button className='button'>
            <img src={plus} alt='plus'/>
            </button></div>
        </div>
    </div>
    
     
  )
}

export default Card;