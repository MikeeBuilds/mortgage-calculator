import React from 'react'
import Slider from '@mui/material/Slider'
import { Typography } from '@mui/material'

const SliderComponent = ({ defaultValue, min, max, step, onChange, value }) => {
  return (
  <>
    <Typography>Home Value</Typography>
    <Typography>$300,000</Typography>

    <Slider 
      defaultValue={defaultValue} 
      min={min} max={max} 
      aria-label='Default' 
      valueLabelDisplay='auto' 
      marks
      step={step}
      onChange={onChange}
      value={value}
      />
    <Typography></Typography>
  </>
  )
}

export default SliderComponent