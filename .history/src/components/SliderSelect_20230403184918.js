import React, { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
  return (
    <>
        <SliderComponent min={0} max={50} defaultValue={20} />
        <SliderComponent min={100} max={200}  />
        <SliderComponent />
    </>
        
     
  )
}

export default SliderSelect