import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Category from './components/category/index';
import CategoryPosts from './components/categoryPosts/index';
import CategoryBreadcrumb from './components/categoryPosts/_breadcrumb';
import Post from './components/post/index';

export default class Routes extends Component {
  render(){
    return(
      <div>
        <Route
          exact
          path="/categories/:categoryId/posts/:postId"
          render={props => <Post
            handleRedirect={this.props.handleRedirect}
            {...props}
          />}
        />
        <Route
          exact
          path="/categories/:categoryId"
          render={props => <CategoryPosts
            handleRedirect={this.props.handleRedirect}
            {...props}
          />}
        />
        <Route
          path="/categories/:categoryId"
          component={CategoryBreadcrumb}
        />
        <Route
          exact
          path="/"
          render={props => <Category
            handleRedirect={this.props.handleRedirect}
            {...props}
          />}
        />
      </div>
    )
  }
}
