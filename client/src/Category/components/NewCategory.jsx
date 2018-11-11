import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import AddIcon from '@material-ui/icons/Add';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const initialState = {
  name: '',
  description: '',
  open: false
}

export class NewCategory extends React.Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this)
    this.openDialog = this.openDialog.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this)
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

  openDialog = () => {
    this.setState({ open: true });
  };

  closeDialog = () => {
    this.setState({ open: false });
  };

  submitForm = () => {
    this.props.handleCreate(this.state.name,
                            this.state.description);
    this.closeDialog();
  }

  render() {
    return(
      <div>
        <Button
          variant="contained"
          aria-label="Add"
          onClick={this.openDialog}
        >
          <AddIcon /> Add category
        </Button>
        <Dialog
          open={this.state.open}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Category</DialogTitle>
          <ValidatorForm onSubmit={this.submitForm}>
            <DialogContent>
              <TextValidator
                label="Category Name"
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
                label="Category Description"
                name="description"
                margin="normal"
                value={this.state.description}
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
