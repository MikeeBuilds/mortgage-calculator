import React, { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
  return (
    <>
        <SliderComponent 
            label='Home Value'
            min={0} 
            max={300} 
            defaultValue={20} 
            step={5 } 
            onChange={(e, value) => console.log(value)}
            unit='$'
            amount={300000}
        />
          <SliderComponent 
            label='Down Payment'
            min={0} 
            max={3000} 
            defaultValue={20} 
            step={5 } 
            onChange={(e, value) => console.log(value)}
            unit={'$'}
            amount={50000}
        />
          <SliderComponent 
            label='Loan Amount'
            min={0} 
            max={50} 
            defaultValue={20} 
            step={5 } 
            onChange={(e, value) => console.log(value)}
            unit={'$'}
            amount={1000}
        />
       
    </>
        
     
  )
}

export default SliderSelect