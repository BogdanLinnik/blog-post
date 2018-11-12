import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Category from './components/category/index';
import CategoryPosts from './components/categoryPosts/index';
import Post from './components/post/index';

export default class Routes extends Component {
  render(){
    return(
      <Router history={this.props.history}>
        <Switch>
          <Route
            path="/categories/:categoryId/posts/:postId"
            render={props => <Post
              handleRedirect={this.props.handleRedirect}
              handleNavBarChange={this.props.handleNavBarChange}
              {...props}
            />}
          />
          <Route
            path="/categories/:categoryId"
            render={props => <CategoryPosts
              handleRedirect={this.props.handleRedirect}
              handleNavBarChange={this.props.handleNavBarChange}
              {...props}
            />}
          />
          <Route
            path="/"
            render={props => <Category
              handleRedirect={this.props.handleRedirect}
              handleNavBarChange={this.props.handleNavBarChange}
              {...props}
            />}
          />
        </Switch>
      </Router>
    )
  }
}
