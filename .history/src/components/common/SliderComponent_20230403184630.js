import React from 'react'
import Slider from '@mui/material/Slider'

const SliderComponent = () => {
  return (
    <Slider defaultValue={150} min={100} max={100} aria-label='Default' valueLabelDisplay='auto' />
  )
}

export default SliderComponent