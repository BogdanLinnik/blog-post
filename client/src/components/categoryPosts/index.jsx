import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AllPosts from './AllPosts';
import Comments from '../comment/index';

const commentType = 'Category';

export default class CategoryPosts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryId: props.match.params.categoryId
    };
  }

  render(){
    return(
      <div>
        <Grid container justify="center">
          <Grid item xs={12} md={7}>
            <AllPosts
              categoryId={this.state.categoryId}
              handleRedirect={this.props.handleRedirect}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Comments
              type={commentType}
              id={this.state.categoryId}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

CategoryPosts.propTypes = {
  handleRedirect: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}
