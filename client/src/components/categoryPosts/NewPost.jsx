import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Typography from '@material-ui/core/Typography';
import { createPost } from '../../actions/postActions';

const initialState = {
  name: '',
  content: '',
  open: false,
  file: null,
  fileTooBig: false
}

class NewPost extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this)
    this.openDialog = this.openDialog.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isValidName', (value) => {
      return /(?=^[A-Z][A-z]+(\.\s|\.\s.*|\s.*\s|\s)[A-z]{2,}(\.$|\.\s.*$|\s.*$|$))(?=.*\..*)/.test(value)
    });
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  handleFileChange = event => {
    const file = event.target.files[0];
    if (file.size <= 2097152){
      this.setState({file: file});
    } else {
      this.setState({fileTooBig: true});
    }
  }

  handleClose = (event, reason) => {
    this.setState({ fileTooBig: false });
  };

  openDialog = () => {
    this.setState({ open: true });
  };

  closeDialog = () => {
    this.setState(initialState);
  };

  submitForm = () => {
    const formData = this.props.buildFormData(
      this.state.name,
      this.state.content,
      this.state.file
    );

    this.props.createPost(formData, this.props.config);

    this.closeDialog();
  }

  render() {
    let fileName = this.state.file ? this.state.file.name : ''

    return(
      <div>
        <Button
          variant="contained"
          aria-label="Add"
          onClick={this.openDialog}
        >
          <AddIcon /> Add post
        </Button>
        <Dialog
          open={this.state.open}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Post</DialogTitle>
          <ValidatorForm onSubmit={this.submitForm}>
            <DialogContent>
              <input name="file"
                id="file"
                type="file"
                style={{ display: 'none' }}
                onChange={this.handleFileChange}
                accept='*'
                data-max-size='2048'
              />
              <label htmlFor="file">
                <Button variant="contained" component="span">
                  Upload file (Max size 2mb)
                </Button>
                <Typography component="p" style={{wordBreak: 'break-word', display: 'inline-block', marginLeft: '20px'}}>
                  {fileName}
                </Typography>
              </label>
              <TextValidator
                label="Post Name"
                name="name"
                margin="normal"
                value={this.state.name}
                onChange={this.handleChange}
                fullWidth
                inputProps={{
                  maxLength: 100,
                  minLength: 6
                }}
                validators={['required', 'isValidName']}
                errorMessages={
                  [
                    'This field is required',
                    'Name should contain at "." and least two words, '+
                    'first should be from capital word.'
                  ]
                }
              />
              <TextValidator
                label="Post Content"
                name="content"
                margin="normal"
                value={this.state.content}
                multiline={true}
                rows={2}
                rowsMax={4}
                onChange={this.handleChange}
                fullWidth
                inputProps={{
                  maxLength: 600
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeDialog} color="secondary">
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Save
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.fileTooBig}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">File size is too big</span>}
        />
      </div>
    )
  }
}

NewPost.propTypes = {
  buildFormData: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired
}

export default connect(null, { createPost })(NewPost)
