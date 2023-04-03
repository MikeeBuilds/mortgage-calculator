import React from 'react'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Navbar = () => {
  return (
    <AppBar position="static">
        <ToolBar>
            
            <span style={{color: 'red', fonts}}>something</span>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Bank Of React
            </Typography>
        </ToolBar>
    </AppBar>
  )
}

export default Navbar