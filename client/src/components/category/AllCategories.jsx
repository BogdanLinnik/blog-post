import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategories } from '../../actions/categoryActions';
import Category from './_category';

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
    if (nextProps.newCategory) {
      this.props.categories.unshift(nextProps.newCategory);
    } else if (nextProps.updatedCategory) {
      this.updateCategories(nextProps.updatedCategory)
    } else if (nextProps.deletedCategory) {
      this.deleteCategory(nextProps.deletedCategory)
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
  categories: PropTypes.array.isRequired,
  newCategory: PropTypes.object,
  updatedCategory: PropTypes.object,
  deletedCategory: PropTypes.object
}

const mapStateToProps = state => ({
  categories: state.categories.items,
  newCategory: state.categories.newItem,
  updatedCategory: state.categories.updatedItem,
  deletedCategory: state.categories.deletedItem
})

export default connect(mapStateToProps, { fetchCategories })(AllCategories)
