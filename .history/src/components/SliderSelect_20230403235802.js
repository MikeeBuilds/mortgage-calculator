import React, { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({data, setData}) => {

    const bank_limit = 300000;
  return (
    <>
        <SliderComponent 
            label='Home Value'
            min={100000} 
            max={bank_limit} 
            defaultValue={data.homeValue} 
            value={data.homeValue}
            step={100} 
            onChange={(e, value) => setData({homeValue: value})}
            unit='$'
            amount={300000}
        />
          <SliderComponent 
            label='Down Payment'
            min={0} 
            max={3000} 
            defaultValue={data.downPayment} 
            value={data.downPayment}
            step={} 
            onChange={(e, value) => console.log(value)}
            unit={'$'}
            amount={50000}
        />
          <SliderComponent 
            label='Loan Amount'
            min={0} 
            max={30000} 
            defaultValue={20} 
            step={5 } 
            onChange={(e, value) => console.log(value)}
            unit={'$'}
            amount={1000}
        />
         <SliderComponent 
            label='Interest Rate'
            min={0} 
            max={30000} 
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