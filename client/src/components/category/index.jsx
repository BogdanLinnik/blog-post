import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import AllCategories from './AllCategories';

export default class Categories extends Component {

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
}
