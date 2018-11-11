import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = (props) => {
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ flex: 1 }}>
            {props.name}
          </Typography>
          {props.button}
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default NavBar;