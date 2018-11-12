import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Comment = (props) => {
  return (
    <Card style={{ marginTop: 10 }}>
      <CardHeader
        title={props.comment.author}
      />
      <CardContent >
        <Typography component="p" style={{wordBreak: 'break-word'}}>
          {props.comment.content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Comment;
