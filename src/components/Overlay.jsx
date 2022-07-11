import React from 'react';
import svglogo from './img/logo.svg';

function overlay() {
  return (
    <div className='overlay'>
        <div className='drawer justify-between'>
          <div>
          <h2 className='p-30'>Корзина</h2>

          <div className='cartItem d-flex align-center' >
            <img
             className='mb-15'
             width={70} 
             height={70} 
             src={svglogo} alt='pik'/>
            <div className='mr-20'>
              <p className='mp-5'>игра года</p>
              <p>4999rub</p>
            </div>
          
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
<path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
</svg>
        </div></div>
        <div className='cartTotalBlock'>
        <ul >
          <li className='d-flex'>
            <span>Итого</span>
            <div></div>
            <b>5468руб</b>
          </li>
          <li className='d-flex'>
            <span>Налог 5%</span>
            <div></div>
            <b>256руб</b>
          </li>
        </ul>
        <button>Оформить заказ</button></div>
        </div> 
</div>
  )
}

export default overlay