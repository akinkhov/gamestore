import React from 'react';
import { useDispatch } from 'react-redux';
import { addGame } from '../../redux/slices/cartSlice';
import {Link} from 'react-router-dom';

    
    
      


function Card({id, title, price, imageUrl}) {
  
  const dispatch = useDispatch();
    
  

  const onClickAdd = () =>{
    const item = {
      id,
      title,
      price,
      imageUrl,
    };
    dispatch(addGame(item));
    
    
  }
 
  return (
    
      <div className ='card'>
        <Link to='/gamecard'>
        
            <img width={198}  src={imageUrl} alt= 'crad'/>
            <p>{title}</p>
        </Link>
        <div className ='d-flex flex-column '>
            <div className='d-flex p-10 '>
                <span>Цена:</span>
                <b>{price}</b>
            </div>
            <div >
            
   
            <button  onClick={onClickAdd} className='button'><i>Добавить</i>
            </button></div>
        </div>
    </div>
    
     
  )
}

export default Card;