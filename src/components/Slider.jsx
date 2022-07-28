import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


function Slider() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div><AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src="https://static.gabestore.ru/screen_product/188BCMUR9jH0U_yJS6rHis3yz_aNG143.jpg" />
    <div data-src="https://static.gabestore.ru/screen_product/00aV_rXkP9dH_paGy9Vecf1FH5iN0dVi.jpg" />
    <div data-src="https://static.gabestore.ru/screen_product/LMgMQUjQLDc4371enOW9-lajdOpJr7H9.jpg" />
  </AutoplaySlider></div>
  )
}

export default Slider