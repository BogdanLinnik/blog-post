import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { updateCategory } from '../../actions/categoryActions';

class CategoryEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.category.id,
      name: props.category.name,
      description: props.category.description
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
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

  handleFormSubmit = () => {
    this.props.updateCategory(this.state)
    this.props.handleEdit();
  }

  render(){
    return (
      <Card className="card">
        <ValidatorForm onSubmit={() => this.handleFormSubmit()} >
          <CardHeader
            title={
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
            }
          />
          <CardContent>
            <TextValidator
              label="Category Description"
              name="description"
              margin="normal"
              value={this.state.description}
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
      </Card>
    )
  }
}

CategoryEdit.propTypes = {
  updateCategory: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired
}

export default connect(null, { updateCategory })(CategoryEdit)
