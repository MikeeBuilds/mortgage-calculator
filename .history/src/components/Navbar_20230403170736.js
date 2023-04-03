import React from 'react'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <ToolBar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Bank Of React
            </Typography>
        </ToolBar>
      </Container>
    </AppBar>
  )
}

export default Navbar