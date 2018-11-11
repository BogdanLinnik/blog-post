import React from 'react';
import { CategoryCard } from './_category_card';
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
    this.updateCategory = this.updateCategory.bind(this)
  }

  updateCategory(category){
    this.props.handleUpdate(category);
    this.handleEdit();
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
        updateCategory={this.updateCategory}
      />
    );

    const categoryShow = (
      <CategoryCard
        category={this.props.category}
        handleRedirect={this.props.handleRedirect}
        handleEdit={this.handleEdit}
        handleDelete={this.props.handleDelete}
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
