import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import AllCategories from './AllCategories';
import NewCategory from './NewCategory';

const categoryLinks = []
const categoryTitle = 'Categories List'
const newCategory = (<NewCategory />)

export default class Categories extends Component {

  componentWillMount() {
    this.props.handleNavBarChange(categoryLinks, categoryTitle, newCategory)
  }

  render(){
    return(
      <div>
        <Grid container justify="center">
          <Grid item xs={8}>
            <AllCategories
              handleRedirect={this.props.handleRedirect}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

Categories.propTypes = {
  handleRedirect: PropTypes.func.isRequired,
  handleNavBarChange: PropTypes.func.isRequired,
}
