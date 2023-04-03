import React from 'react'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Navbar = () => {
  return (
    <AppBar position="static">
        <ToolBar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
            </Typography>
        </ToolBar>
    </AppBar>
  )
}

export default Navbar