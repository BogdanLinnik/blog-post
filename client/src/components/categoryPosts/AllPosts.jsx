import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../actions/postActions';
import { NEW_POST, UPDATE_POST, DELETE_POST } from '../../actions/types'
import Post from './_post';
import NoPosts from './_no_posts';

class AllPosts extends Component {

  componentWillMount() {
    this.props.fetchPosts(this.props.categoryId)
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
