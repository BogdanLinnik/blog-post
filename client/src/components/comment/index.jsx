import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import AllComments from './AllComments';
import NewComment from './NewComment';

export default class Comments extends React.Component {

  render(){
    return(
      <div>
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <Card style={{ marginTop: 10 }}>
              <CardHeader
                title="Comments"
                action={
                  <NewComment id={this.props.id} type={this.props.type}/>
                }
                style={{backgroundColor: 'darkblue'}}
                classes={{
                  title: 'cardHeader'
                }}
              />
              <CardContent>
                <AllComments id={this.props.id} commentable_type={this.props.type}/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}
