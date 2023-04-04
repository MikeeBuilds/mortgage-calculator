import React from 'react'
import Slider from '@mui/material/Slider'
import { Stack, Typography } from '@mui/material'

const SliderComponent = ({ defaultValue, min, max, step, onChange, value }) => {
  return (
  <>
    <Stack gap={1}>
      <Typography variant='subtitle2'>Home Value</Typography>
      <Typography variant='h5'>$300,000</Typography>
    </Stack>

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
      <Stack direction='row' justifyContent='space-between'>
    <Typography variant='' color='text.secondary'>$1000</Typography>
    <Typography color='text.secondary'>$10,000</Typography>
      </Stack>

  </>
  )
}

export default SliderComponent