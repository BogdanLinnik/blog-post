import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import { connect } from 'react-redux';

const Breadcrumb = (props) => {
  return (
    <BreadcrumbsItem to={`/categories/${props.category.id}`}>{props.category.name}</BreadcrumbsItem>
  )
}

Breadcrumb.propTypes = {
  category: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  category: state.posts.category,
})

export default connect(mapStateToProps)(Breadcrumb);
