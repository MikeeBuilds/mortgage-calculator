import React, { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
  return (
    <>
        <SliderComponent min={0} max={50} defauktValue={20} />
        <SliderComponent />
        <SliderComponent />
    </>
        
     
  )
}

export default SliderSelect