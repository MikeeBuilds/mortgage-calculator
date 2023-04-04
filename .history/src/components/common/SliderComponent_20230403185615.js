import React from 'react'
import Slider from '@mui/material/Slider'

const SliderComponent = ({ defaultValue, min, max }) => {
  return (
    <Slider 
      defaultValue={defaultValue} 
      min={min} max={max} 
      aria-label='Default' 
      valueLabelDisplay='auto' 
      marks
      step={10}
      />
  )
}

export default SliderComponent