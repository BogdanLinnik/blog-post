import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Category } from './Category/Index';
import CategoryPosts from './CategoryPosts/Index';
import CategoryPost from './Post/Index';

const history = createBrowserHistory();

const Routes = () => {
  return(
    <Router history={history}>
      <Switch>
        <Route path="/categories/:categoryId" component={CategoryPosts} />
        <Route path="/posts/:postId" component={CategoryPost} />
        <Route path="/" component={Category} />
      </Switch>
    </Router>
  )
}

export default Routes;
