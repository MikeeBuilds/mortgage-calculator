import React from 'react'
import Slider from '@mui/material/Slider'

const SliderComponent = (props) => {
  return (
    <Slider defaultValue={props} min={props} max={props} aria-label='Default' valueLabelDisplay='auto' />
  )
}

export default SliderComponent