import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import PostFile from './_file';

export default class ShowPost extends Component {

  render(){
    let fileTemplate = this.props.post.file_name ? <PostFile post={this.props.post} /> : 'No Files attached'

    return (
      <Card className="card">
        <CardHeader
          title={this.props.post.name}
        />
        <CardContent >
          <Typography component="p" className="paragraph">
            {this.props.post.content}
          </Typography>
          <Typography component="p">
            {fileTemplate}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

ShowPost.propTypes = {
  post: PropTypes.object.isRequired,
}
