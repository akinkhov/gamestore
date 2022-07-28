import React from 'react';
import { useDispatch } from 'react-redux';
import { removeGame } from '../../redux/slices/cartSlice';




function CartItem( {id, title, price, imageUrl}) {

    const dispatch = useDispatch();

    const onClickRemove = () => {
        dispatch( removeGame(id) );
    }

   
    
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="game-block__image" src={imageUrl} alt="game" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        
      </div>
      <div className="cart__item-count">
      </div>
      <div className="cart__item-price">
        <b>{price} ₽</b>
      </div>
      <div className="cart__item-remove">
        <div 
        onClick={onClickRemove} 
        className='btn-cart'>
         X
        </div>
      </div>
    </div>
  )
}

export default CartItem;