import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from './_category_card';
import CategoryEdit from './_category_edit';

export default class Category extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      id: props.category.id,
      name: props.category.name,
      description: props.category.description,
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){

    const categoryEdit = (
      <CategoryEdit
        category={this.props.category}
        handleEdit={this.handleEdit}
      />
    );

    const categoryShow = (
      <CategoryCard
        category={this.props.category}
        handleRedirect={this.props.handleRedirect}
        handleEdit={this.handleEdit}
      />
    );

    let categoryTemplate = this.state.editable ? categoryEdit : categoryShow

    return(
      <div>
        { categoryTemplate }
      </div>
    )
  }
}

Category.propTypes = {
  handleRedirect: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired
}
