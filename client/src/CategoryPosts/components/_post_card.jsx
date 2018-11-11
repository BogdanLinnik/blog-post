import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';

export const PostCard = (props) => {
  return (
    <Card style={{ marginTop: 10 }}>
      <CardHeader
        title={props.post.name}
        action={
          <div>
            <IconButton onClick={() => props.handleEdit()} aria-label="Edit">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => props.handleDelete(props.post.id)} >
              <DeleteIcon />
            </IconButton>
          </div>
        }
      />
      <CardContent >
        <Typography component="p" style={{wordBreak: 'break-word'}}>
          {props.post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justify="flex-end">
          <Grid item>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => props.handleRedirect(`/categories/${props.categoryId}/posts/${props.post.id}`)}
              >
                  Read more
              </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}
