import React from 'react';
import {Link} from 'react-router-dom';
import svglogo from '../img/shopping-cart.png';

function CartEmpty() {
  return (
    <div><Link className='emptyCart' to='/'>
          
          <div>
            <h3>Корзина пустая</h3>
            <img width={200} height={200} src={svglogo} alt='logosvg'/>
            <p>вернуться назад</p>
          </div>
        </Link>
        </div>
  )
}

export default CartEmpty