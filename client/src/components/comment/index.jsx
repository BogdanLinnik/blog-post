import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchComments } from '../../actions/commentActions';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import AllComments from './AllComments';
import NewComment from './NewComment';
import actionCable from 'actioncable'

const CableApp = {}
CableApp.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3000/cable`)

class Comments extends Component {

  constructor(){
    super();
    this.state = {
      comments: []
    }
    this.addComment = this.addComment.bind(this);
  }

  addComment(comment){
    let newComments = this.state.comments
    newComments.unshift(JSON.parse(comment))
    this.setState({
      comments: newComments
    })
  }

  componentWillMount(){
    const commentData = {
      commentable_id: this.props.id,
      commentable_type: this.props.type
    }
    this.props.fetchComments(commentData);

    CableApp.cable.subscriptions.create(
      {
        channel: 'CommentableChannel',
        id: this.props.id,
        commentable: this.props.type
      },
      {
        received: (response) => {
          this.addComment(response.comment)
        }
      }
    )
  }

  componentWillReceiveProps(nextProps){
    this.setState({comments: nextProps.comments})
  }

  render(){
    return(
      <div>
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <Card className="card">
              <CardHeader
                title="Comments"
                action={
                  <NewComment id={this.props.id} type={this.props.type}/>
                }
                id="comment-container"
                classes={{
                  title: 'cardHeader'
                }}
              />
              <CardContent>
                <AllComments
                  comments={this.state.comments}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Comments.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  comments: PropTypes.array
}

const mapStateToProps = state => ({
  comments: state.comments.items
})

export default connect(mapStateToProps, { fetchComments })(Comments)
