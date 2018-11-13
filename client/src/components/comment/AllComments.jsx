import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './_comment';
import NoComments from './_no_comments';

export default class AllComments extends Component {

  render(){
    let comments;

    if (this.props.comments.length > 0){
      comments = this.props.comments.map((comment) => {
        return(
          <Comment
            key={comment.id}
            comment={comment}
          />
        )
      })
    } else {
      comments = (
        <NoComments />
      )
    }

    return(
      <div>
        {comments}
      </div>
    )
  }
}

AllComments.propTypes = {
  comments: PropTypes.array.isRequired,
}
