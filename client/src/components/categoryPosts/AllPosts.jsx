import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../actions/postActions';
import { FETCH_POSTS, NEW_POST, UPDATE_POST, DELETE_POST } from '../../actions/types'
import Post from './_post';
import NewPost from './NewPost';
import NoPosts from './_no_posts';

const categoryLinks = [{name: 'Categories List', path: '/'}]
const initialState = {
  multipartConfig: {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
}

class AllPosts extends Component {

  constructor(){
    super();
    this.state = initialState;
    this.buildFormData = this.buildFormData.bind(this);
    this.changeNavBar = this.changeNavBar.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts(this.props.categoryId)
  }

  changeNavBar(category) {
    const categoryName = category.name
    const newPost = (
      <NewPost
        buildFormData={this.buildFormData}
        categoryId={this.props.categoryId}
        config={this.state.multipartConfig}
      />
    )
    this.props.handleNavBarChange(categoryLinks, categoryName, newPost)
  }

  buildFormData(name, content, file){
    let formData = new FormData();
    formData.append('name', name);
    formData.append('content', content);
    formData.append('category_id', this.props.categoryId);
    if (file) {
      formData.append('file', file);
    }
    return(formData);
  }

  deletePost(deletedPost){
    for (const [index, post] of this.props.posts.entries()) {
      if (post.id === deletedPost.id){
        this.props.posts.splice(index, 1);
        break;
      }
    }
  }

  updatePosts(updatedPost) {
    this.deletePost(updatedPost)
    this.props.posts.unshift(updatedPost)
  }

  componentWillReceiveProps(nextProps){
    switch (nextProps.type) {
      case FETCH_POSTS:
        return this.changeNavBar(nextProps.category);
      case NEW_POST:
        return this.props.posts.unshift(nextProps.newPost);
      case UPDATE_POST:
        return this.updatePosts(nextProps.updatedPost);
      case DELETE_POST:
        return this.deletePost(nextProps.deletedPost);
      default:
        return
    }
  }

  render(){
    let posts

    if (this.props.posts.length > 0){
      posts = this.props.posts.map((post) => {
        return(
          <Post
            key={post.id}
            post={post}
            config={this.state.multipartConfig}
            buildFormData={this.buildFormData}
            categoryId={this.props.categoryId}
            handleDelete={this.props.handleDelete}
            handleRedirect={this.props.handleRedirect}
          />
        )
      })
    } else {
      posts = (
        <NoPosts />
      )
    }

    return(
      <div>
        {posts}
      </div>
    )
  }
}

AllPosts.propTypes = {
  handleRedirect: PropTypes.func.isRequired,
  handleNavBarChange: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  categoryId: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  newPost: PropTypes.object,
  updatetPost: PropTypes.object,
  deletedPost: PropTypes.object
}

const mapStateToProps = state => ({
  type: state.posts.type,
  category: state.posts.category,
  posts: state.posts.items,
  newPost: state.posts.newItem,
  updatedPost: state.posts.updatedItem,
  deletedPost: state.posts.deletedItem
})

export default connect(mapStateToProps, { fetchPosts })(AllPosts)
