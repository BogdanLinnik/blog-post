import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import axiosClient from '../axiosClient';
import AllComments from './components/AllComments';
import NewComment from './components/NewComment';

export default class Comments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.handleCreate = this.handleCreate.bind(this)
    this.addNewComment = this.addNewComment.bind(this)
  }

  handleCreate(author, content){
    const commentObj = {
      author: author,
      content: content,
      commentable_id: this.props.id,
      commentable_type: this.props.type
    }

    const body = {comment: commentObj}

    axiosClient.post(`comments.json`, body)
               .then((response)=>{
      this.addNewComment(response.data.comment)
    })
  }

  addNewComment(comment){
    this.setState({
      comments: this.state.comments.concat(comment)
    })
  }

  componentDidMount(){
    const commentData = {
      commentable_id: this.props.id,
      commentable_type: this.props.type
    }

    const body = {comment: commentData}

    axiosClient.post('comments/list.json', body)
               .then((response) => {this.setState({
        comments: response.data.comments
      })
    });
  }

  render(){
    return(
      <div>
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <Card style={{ marginTop: 10 }}>
              <CardHeader
                title="Comments"
                action={
                  <NewComment handleCreate={this.handleCreate}/>
                }
                style={{backgroundColor: 'darkblue'}}
                classes={{
                  title: 'cardHeader'
                }}
              />
              <CardContent>
                <AllComments comments={this.state.comments}/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}
