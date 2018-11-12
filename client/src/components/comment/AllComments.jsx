import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchComments } from '../../actions/commentActions';
import { NEW_COMMENT } from '../../actions/types'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comment from './_comment';

class AllComments extends Component  {

  componentDidMount(){
    const commentData = {
      commentable_id: this.props.id,
      commentable_type: this.props.commentable_type
    }

    this.props.fetchComments(commentData);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.type === NEW_COMMENT){
      this.props.comments.unshift(nextProps.newComment)
    }
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
        <Card>
          <CardContent >
            <Typography component="p" style={{wordBreak: 'break-word'}}>
              No comments
            </Typography>
          </CardContent>
        </Card>
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
  fetchComments: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  commentable_type: PropTypes.string.isRequired,
  comments: PropTypes.array,
  newComment: PropTypes.object
}

const mapStateToProps = state => ({
  type: state.comments.type,
  comments: state.comments.items,
  newComment: state.comments.newItem,
})

export default connect(mapStateToProps, { fetchComments })(AllComments)
