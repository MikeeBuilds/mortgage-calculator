import React, { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
  return (
    <>
        <SliderComponent 
            label='Home Value'
            min={0} 
            max={50} 
            defaultValue={20} 
            step={5 } 
            onChange={(e, value) => console.log(value)}
        />
          <SliderComponent 
            label='Down Payment'
            min={0} 
            max={50} 
            defaultValue={20} 
            step={5 } 
            onChange={(e, value) => console.log(value)}
        />
          <SliderComponent 
            label='Loan Amount'
            min={0} 
            max={50} 
            defaultValue={20} 
            step={5 } 
            onChange={(e, value) => console.log(value)}
        />
       
    </>
        
     
  )
}

export default SliderSelect