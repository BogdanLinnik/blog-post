import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export const NavBar = (props) => {

  let links = props.links.map((link) => {
    return(
      <Typography variant="title" color="inherit" key={link.name} >
        <span onClick={() => props.handleRedirect(link.path)} className="navbarLink">{link.name}</span>
        <span className="separator"> / </span>
      </Typography>
    )
  })

  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          {links}
          <Typography variant="title" color="inherit" style={{ flex: 1 }}>
            {props.title}
          </Typography>
          {props.button}
        </Toolbar>
      </AppBar>
    </div>
  )
}
