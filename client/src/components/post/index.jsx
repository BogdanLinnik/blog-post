import React from 'react';
import Grid from '@material-ui/core/Grid';
import axiosClient from '../../axiosClient';
import ShowPost from './show';
import Comments from '../comment/index';

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
      }, () => {
        const postLinks = [{name: 'Categories List', path: '/'},
                           {name: this.state.category.name, path: `/categories/${this.state.category.id}`}]
        const postName = this.state.post.name
        const postButton = ''
        this.props.handleNavBarChange(postLinks, postName, postButton)
      })
    });
  }

  render(){
    return(
      <div>
        <Grid container justify="center">
          <Grid item xs={12} md={7}>
            <ShowPost
              post={this.state.post}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Comments
              type="Post"
              id={this.state.postId}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}
