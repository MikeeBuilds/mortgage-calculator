import React from 'react'
import Slider from '@mui/material/Slider'

const SliderComponent = ({defaultValue, min, max}) => {
  return (
    <Slider defaultValue={props.defaultValue} min={props.min} max={props.max} aria-label='Default' valueLabelDisplay='auto' />
  )
}

export default SliderComponent