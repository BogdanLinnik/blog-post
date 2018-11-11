import React from 'react';
import Grid from '@material-ui/core/Grid';
import axiosClient from '../axiosClient';
import { AllPosts } from './components/AllPosts';
import NewPost from './components/NewPost';
import Comments from '../Comment/Index';
import NavBar from '../NavBar'

export default class CategoryPosts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryId: props.match.params.categoryId,
      category: {},
      multipartConfig: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      },
      posts: []
    };
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  handleRedirect(postId){
    this.props.history.push(`/posts/${postId}`)
  }

  buildFormData(name, content, file){
    let formData = new FormData();
    formData.append('name', name);
    formData.append('content', content);
    formData.append('category_id', this.state.categoryId);
    formData.append('file', file);
    return(formData);
  }


  handleCreate(name, content, file){
    const formData = this.buildFormData(name, content, file)

    axiosClient.post(`posts.json`, formData, this.state.multipartConfig)
               .then((response) => {
      this.addNewPost(response.data.post)
    })
  }

  addNewPost(post){
    this.setState({
      posts: this.state.posts.concat(post)
    })
  }

  handleUpdate(post){
    const formData = this.buildFormData(post.name, post.content, post.file)

    axiosClient.patch(`posts/${post.id}.json`, formData, this.state.multipartConfig)
               .then((response) => {
        this.updatePost(response.data.post)
    })
  }

  updatePost(post){
    let newPosts = this.state.posts.filter((p) => p.id !== post.id)
    newPosts.push(post)
    this.setState({
      posts: newPosts
    })
  }

  handleDelete(id){
    axiosClient.delete(`posts/${id}.json`)
               .then((response) => {
      this.deletePost(id)
    })
  }

  deletePost(id){
    const newPosts = this.state.posts.filter((post) => post.id !== id)
    this.setState({
      posts: newPosts
    })
  }

  componentDidMount(){
    axiosClient.get(`categories/${this.state.categoryId}.json`).then((response) => {
      this.setState({
        categories: response.data.category,
        posts: response.data.posts
      })
    });
  }

  render(){
    const newPost = (<NewPost handleCreate={this.handleCreate}/>)

    return(
      <div>
        <NavBar name="Category page" button={newPost} />
        <Grid container justify="center">
          <Grid item xs={12} md={7}>
            <AllPosts
              posts={this.state.posts}
              handleRedirect={this.handleRedirect}
              handleUpdate={this.handleUpdate}
              handleDelete={this.handleDelete}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Comments
              type="Category"
              id={this.state.categoryId}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}
