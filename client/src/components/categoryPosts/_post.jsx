import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostCard from './_post_card';
import PostEdit from './_post_edit';

export default class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){

    const postEdit = (
      <PostEdit
        post={this.props.post}
        buildFormData={this.props.buildFormData}
        config={this.props.config}
        handleEdit={this.handleEdit}
      />
    );

    const postShow = (
      <PostCard
        post={this.props.post}
        categoryId={this.props.categoryId}
        handleRedirect={this.props.handleRedirect}
        handleEdit={this.handleEdit}
      />
    );

    let postTemplate = this.state.editable ? postEdit : postShow

    return(
      <div>
        { postTemplate }
      </div>
    )
  }
}

Post.propTypes = {
  handleRedirect: PropTypes.func.isRequired,
  buildFormData: PropTypes.func.isRequired,
  categoryId: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
}
