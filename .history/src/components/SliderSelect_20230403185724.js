import React, { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
  return (
    <>
        <SliderComponent 
            min={0} 
            max={50} defaultValue={20} step={10 } />
       
    </>
        
     
  )
}

export default SliderSelect