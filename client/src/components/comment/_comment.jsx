import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Comment = (props) => {
  return (
    <Card className="card">
      <CardHeader
        title={props.comment.author}
      />
      <CardContent >
        <Typography component="p" className="paragraph">
          {props.comment.content}
        </Typography>
      </CardContent>
    </Card>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default Comment;
