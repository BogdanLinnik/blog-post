import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const initialState = {
  author: '',
  content: '',
  open: false
}

export default class NewComment extends React.Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this)
    this.openDialog = this.openDialog.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isValidAuthor', (value) => {
      return /(?=^[A-Z][A-z]+(\.\s|\.\s.*|\s.*\s|\s)[A-Z][A-z]+(\.$|\.\s.*$|\s.*$|$))(?=.*\..*)/.test(value)
    });
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  openDialog = () => {
    this.setState({ open: true });
  };

  closeDialog = () => {
    this.setState({ open: false });
  };

  submitForm = () => {
    this.props.handleCreate(this.state.author,
                            this.state.content);
    this.closeDialog();
  }

  render() {
    return(
      <div>
        <IconButton>
          <AddIcon
            style={{color: 'white'}}
            onClick={this.openDialog}
          />
        </IconButton>
        <Dialog
          open={this.state.open}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Leave Your comment</DialogTitle>
          <ValidatorForm onSubmit={this.submitForm}>
            <DialogContent>
              <TextValidator
                label="Comment Author"
                name="author"
                margin="normal"
                value={this.state.author}
                onChange={this.handleChange}
                fullWidth
                inputProps={{
                  maxLength: 100,
                }}
                validators={['required', 'isValidAuthor']}
                errorMessages={
                  [
                    'This field is required',
                    'Name should contain at "." and least two words, '+
                    'first should be from capital word.'
                  ]
                }
              />
              <TextValidator
                label="Comment content"
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
                validators={['required']}
                errorMessages={['This field is required']}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeDialog} color="primary">
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Save
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    )
  }
}