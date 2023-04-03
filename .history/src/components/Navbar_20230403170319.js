import React from 'react'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Navbar = () => {
  return (
    <AppBar position="static">
        <ToolBar>
            
            <span style={{color: 'red', fontSize: '90px'}}>something</span>

            <Typography variant="h1" component="p" sx={{ color: }}>
                Bank Of React
            </Typography>
        </ToolBar>
    </AppBar>
  )
}

export default Navbar