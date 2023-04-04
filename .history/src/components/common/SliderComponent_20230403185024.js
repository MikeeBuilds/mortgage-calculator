import React from 'react'
import Slider from '@mui/material/Slider'

const SliderComponent = (props) => {
  return (
    <Slider defaultValue={80} min={50} max={100} aria-label='Default' valueLabelDisplay='auto' />
  )
}

export default SliderComponent