import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comment from './_comment';

export default class AllComments extends React.Component  {

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
