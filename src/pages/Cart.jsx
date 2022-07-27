import React from 'react';
import { Link } from 'react-router-dom';



function Cart() {
  return (
    <div>
    <div className='cart__title '>
        <h1>Корзина</h1>
        <span>Очистить корзину</span>
    </div>
    <div className='cart__items'>
        <h1>game</h1>
        <h1>cost</h1>
        <h1>price</h1>
        <h1>bucket</h1>
    </div>
    <div className='cart__buttons'>
        <Link to='/'>
            <button className='cart__bottom-buttons'>
                Назад
            </button>
        </Link>
        <Link to='/NotFound'>    
            <button className='cart__bottom-buttons'>
                Купить
            </button>
        </Link>
    </div>
    </div>
  )
}

export default Cart