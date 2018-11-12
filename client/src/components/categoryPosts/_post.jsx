import React from 'react';
import PostCard from './_post_card';
import PostEdit from './_post_edit';

export default class Post extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.updatePost = this.updatePost.bind(this)
  }

  updatePost(post){
    this.props.handleUpdate(post);
    this.handleEdit();
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
        handleEdit={this.handleEdit}
        updatePost={this.updatePost}
      />
    );

    const postShow = (
      <PostCard
        post={this.props.post}
        categoryId={this.props.categoryId}
        handleRedirect={this.props.handleRedirect}
        handleEdit={this.handleEdit}
        handleDelete={this.props.handleDelete}
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
