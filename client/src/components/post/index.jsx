import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import axiosClient from '../../axiosClient';
import ShowPost from './show';
import Comments from '../comment/index';

const commentType = 'Post'

export default class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      postId: props.match.params.postId,
      category: {},
      post: {}
    };
  }

  componentDidMount(){
    axiosClient.get(`posts/${this.state.postId}.json`)
               .then((response) => {this.setState({
        category: response.data.category,
        post: response.data.post
      })
    });
  }

  render(){
    return(
      <div>
        <BreadcrumbsItem to={`/categories/${this.state.postId}`}>{this.state.post.name}</BreadcrumbsItem>
        <Grid container justify="center">
          <Grid item xs={12} md={7}>
            <ShowPost
              post={this.state.post}
            />
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
