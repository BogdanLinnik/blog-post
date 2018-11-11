import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from '../NavBar'
import axiosClient from '../axiosClient';
import ShowPost from './components/Show';
import Comments from '../Comment/Index';

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
      }, () => {console.log(this.state)})});
  }

  render(){
    return(
      <div>
        <NavBar name="Show post"/>
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
