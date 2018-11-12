import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Category from './components/category/index';
import Posts from './components/categoryPosts/index';
import CategoryPost from './components/post/index';

export default class Routes extends Component {
  render(){
    return(
      <Router history={this.props.history}>
        <Switch>
          <Route
            path="/categories/:categoryId/posts/:postId"
            render={props => <CategoryPost
              handleRedirect={this.props.handleRedirect}
              handleNavBarChange={this.props.handleNavBarChange}
              {...props}
            />}
          />
          <Route
            path="/categories/:categoryId"
            render={props => <Posts
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
