import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axiosClient from '../axiosClient';
import { AllCategories } from './components/AllCategories';
import { NewCategory } from './components/NewCategory';

export class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
    this.handleCreate = this.handleCreate.bind(this)
    this.addNewCategory = this.addNewCategory.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteCategory = this.deleteCategory.bind(this)
  }

  handleCreate(name, description){
    let body = { category: {name: name, description: description} }

    axiosClient.post(`categories.json`, body)
               .then((response) => {
      this.addNewCategory(response.data.category)
    })
  }

  addNewCategory(category){
    this.setState({
      categories: this.state.categories.concat(category)
    })
  }

  handleUpdate(category){
    let body = {category: category}

    axiosClient.patch(`categories/${category.id}.json`, body)
               .then((response) => {
      this.updateCategory(response.data.category)
    })
  }

  updateCategory(category){
    let newCategories = this.state.categories.filter((c) => c.id !== category.id)
    newCategories.push(category)
    this.setState({
      categories: newCategories
    })
  }

  handleDelete(id){
    axiosClient.delete(`categories/${id}.json`)
               .then((response) => {
      this.deleteCategory(id)
    })
  }

  deleteCategory(id){
    const newCategories = this.state.categories.filter((category) => category.id !== id)
    this.setState({
      categories: newCategories
    })
  }

  componentDidMount(){
    axiosClient.get('categories.json').then((response) => {
      this.setState({ categories: response.data.categories }, () => {
        const categoryLinks = []
        const categoryTitle = 'Categories List'
        const newCategory = (<NewCategory handleCreate={this.handleCreate} />)
        this.props.handleNavBarChange(categoryLinks, categoryTitle, newCategory)
      })
    });
  }

  render(){
    return(
      <div>
        <Grid container justify="center">
          <Grid item xs={8}>
            <AllCategories
              categories={this.state.categories}
              handleRedirect={this.props.handleRedirect}
              handleUpdate={this.handleUpdate}
              handleDelete={this.handleDelete}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}
