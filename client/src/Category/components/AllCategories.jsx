import React from 'react';
import Category from './_category';

export const AllCategories = (props) => {
  var categories = props.categories.map((category) => {
    return(
      <Category
        key={category.id}
        category={category}
        handleRedirect={props.handleRedirect}
        handleUpdate={props.handleUpdate}
        handleDelete={props.handleDelete}
      />
    )
  })
  return(
    <div>
      {categories}
    </div>
  )
}
