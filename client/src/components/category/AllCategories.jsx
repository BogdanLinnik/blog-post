import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategories } from '../../actions/categoryActions';
import Category from './_category';
import { NEW_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../../actions/types'

class AllCategories extends Component {

  constructor() {
    super();
    this.updateCategories = this.updateCategories.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  componentWillMount() {
    this.props.fetchCategories()
  }

  deleteCategory(deletedCategory){
    for (const [index, category] of this.props.categories.entries()) {
      if (category.id === deletedCategory.id){
        this.props.categories.splice(index, 1);
        break;
      }
    }
  }

  updateCategories(updatedCategory) {
    this.deleteCategory(updatedCategory)
    this.props.categories.unshift(updatedCategory)
  }

  componentWillReceiveProps(nextProps){
    switch (nextProps.type) {
      case NEW_CATEGORY:
        return this.props.categories.unshift(nextProps.newCategory);
      case UPDATE_CATEGORY:
        return this.updateCategories(nextProps.updatedCategory);
      case DELETE_CATEGORY:
        return this.deleteCategory(nextProps.deletedCategory);
      default:
        return
    }
  }

  render(){
    const categories = this.props.categories.map((category) => {
      return(
        <Category
          key={category.id}
          category={category}
          handleRedirect={this.props.handleRedirect}
        />
      )
    })
    return(
      <div>
        {categories}
      </div>
    )
  }
}

AllCategories.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  handleRedirect: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  newCategory: PropTypes.object,
  updatedCategory: PropTypes.object,
  deletedCategory: PropTypes.object
}

const mapStateToProps = state => ({
  type: state.categories.type,
  categories: state.categories.items,
  newCategory: state.categories.newItem,
  updatedCategory: state.categories.updatedItem,
  deletedCategory: state.categories.deletedItem
})

export default connect(mapStateToProps, { fetchCategories })(AllCategories)
