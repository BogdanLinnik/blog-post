import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import { fetchPost } from '../../actions/postActions';
import ShowPost from './show';
import Comments from '../comment/index';

const commentType = 'Post'

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      postId: props.match.params.postId
    };
  }

  componentDidMount(){
    this.props.fetchPost(this.state.postId);
  }

  render(){
    return(
      <div>
        <BreadcrumbsItem to={`/categories/${this.state.postId}`}>{this.props.post.name}</BreadcrumbsItem>
        <Grid container justify="center">
          <Grid item xs={12} md={7}>
            <ShowPost post={this.props.post}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <Comments
              id={this.state.postId}
              type={commentType}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

Post.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  post: PropTypes.object,
}

const mapStateToProps = state => ({
  post: state.posts.item
})

export default connect(mapStateToProps, { fetchPost })(Post)
