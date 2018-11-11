import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { File } from './_file';

export default class ShowPost extends Component {

  render(){
    let fileTemplate = this.props.post.file_name ? <File post={this.props.post} /> : 'No Files attached'

    return (
      <Card style={{ marginTop: 10 }}>
        <CardHeader
          title={this.props.post.name}
        />
        <CardContent >
          <Typography component="p" style={{wordBreak: 'break-word'}}>
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
