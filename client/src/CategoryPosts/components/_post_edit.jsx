import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';

export default class PostEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.post.id,
      name: props.post.name,
      content: props.post.content,
      file: {name: props.post.file_name},
      fileTooBig: false
    }
    console.log(this.state)
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

  handleFileChange = event => {
    const file = event.target.files[0];
    if (file.size <= 2097152){
      this.setState({file: file});
    } else {
      this.setState({fileTooBig: true});
    }
  }

  render(){
    return (
      <Card style={{ marginTop: 10 }}>
        <ValidatorForm onSubmit={() => this.props.updatePost(this.state)} >
          <CardHeader
            title={
              <div>
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
                    {this.state.file.name}
                  </Typography>
                </label>
              </div>
            }
          />
          <CardContent>
            <TextValidator
              label="Category Name"
              name="name"
              margin="normal"
              value={this.state.name}
              onChange={this.handleChange}
              fullWidth
              inputProps={{
                maxLength: 100
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
              onChange={this.handleChange}
              multiline={true}
              rows={2}
              rowsMax={4}
              fullWidth
              inputProps={{
                maxLength: 600
              }}
            />
          </CardContent>
          <CardActions>
            <Button color="primary" type="submit" >
                Update
            </Button>
            <Button color="secondary" onClick={() => this.props.handleEdit()}>
              Cancel
            </Button>
          </CardActions>
        </ValidatorForm>
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
      </Card>
    )
  }
}
