import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Breadcrumbs, BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import Typography from '@material-ui/core/Typography';
import { Route } from 'react-router-dom';
import NewCategory from './NewCategory';
import NewPost from './NewPost';

const NavBar = () => {

  return(
    <div>
      <AppBar position="static">
        <Toolbar id="navbar">
          <Typography variant="title" color="inherit" id="navbar-title">
            <Breadcrumbs
              separator={<b> / </b>}
              finalItem={'b'}
              finalProps={{
                style: {color: "yellow"}
              }}
            />
          </Typography>
          <BreadcrumbsItem to='/'>Categories</BreadcrumbsItem>
          <Route exact path='/' component={NewCategory} />
          <Route exact path='/categories/:id' component={NewPost} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;
