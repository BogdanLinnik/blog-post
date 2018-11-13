import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './_comment';
import NoComments from './_no_comments';

export default class AllComments extends Component {

  componentWillMount(){
    this.props.cableApp.cable.subscriptions.create(
      {
        channel: 'CommentableChannel',
        id: this.props.id,
        commentable: this.props.type
      },
      {
        received: (response) => {
          this.props.addComment(response.comment)
        }
      }
    )
  }

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
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired,
  cableApp: PropTypes.object.isRequired
}
